"use client";
import { useEffect, useRef, useCallback, useState } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
}

export default function AppAsciiPortrait({ src }: { src: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });
  const animFrameRef = useRef<number>(0);
  const [isReady, setIsReady] = useState(false);

  const MAGNIFIER_RADIUS = 100;

  const generateParticles = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const outputWidth = 700;
    const aspectRatio = img.height / img.width;
    const outputHeight = Math.floor(outputWidth * aspectRatio);

    canvas.width = outputWidth;
    canvas.height = outputHeight;

    const sampleCanvas = document.createElement("canvas");
    const sampleCtx = sampleCanvas.getContext("2d", {
      willReadFrequently: true,
    });
    if (!sampleCtx) return;

    sampleCanvas.width = outputWidth;
    sampleCanvas.height = outputHeight;
    sampleCtx.drawImage(img, 0, 0, outputWidth, outputHeight);

    const imageData = sampleCtx.getImageData(0, 0, outputWidth, outputHeight);
    const pixels = imageData.data;

    const particles: Particle[] = [];
    const step = 3;

    for (let y = 0; y < outputHeight; y += step) {
      for (let x = 0; x < outputWidth; x += step) {
        const offset = (y * outputWidth + x) * 4;
        const r = pixels[offset];
        const g = pixels[offset + 1];
        const b = pixels[offset + 2];
        const a = pixels[offset + 3];

        if (a < 30) continue;

        const gray = 0.299 * r + 0.587 * g + 0.114 * b;
        const normalizedBrightness = gray / 255;

        if (normalizedBrightness < 0.08) continue;

        const placementChance = normalizedBrightness * 0.85 + 0.15;
        if (Math.random() > placementChance) continue;

        const jitterX = (Math.random() - 0.5) * step * 0.8;
        const jitterY = (Math.random() - 0.5) * step * 0.8;

        const size = 0.5 + normalizedBrightness * 1.2;
        const opacity = 0.2 + normalizedBrightness * 0.6;

        particles.push({
          x: x + jitterX,
          y: y + jitterY,
          size,
          opacity,
        });
      }
    }

    particlesRef.current = particles;
    imgRef.current = img;
    setIsReady(true);
  }, []);

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const mouse = mouseRef.current;
    const particles = particlesRef.current;
    const img = imgRef.current;
    const magnifierRadius = MAGNIFIER_RADIUS;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      if (mouse.active) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < magnifierRadius) continue;

        if (dist < magnifierRadius + 30) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 1.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(212, 175, 55, ${Math.min(p.opacity + 0.3, 1)})`;
          ctx.fill();
          continue;
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 190, 170, ${p.opacity})`;
      ctx.fill();
    }

    if (mouse.active && img) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, magnifierRadius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, magnifierRadius * 0.5, mouse.x, mouse.y, magnifierRadius);
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      gradient.addColorStop(1, "rgba(5, 5, 5, 0.7)");
      ctx.fillStyle = gradient;
      ctx.fillRect(mouse.x - magnifierRadius, mouse.y - magnifierRadius, magnifierRadius * 2, magnifierRadius * 2);
      ctx.restore();
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, magnifierRadius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(212, 175, 55, 0.3)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Only request next frame if mouse is active (hovering)
    if (mouse.active) {
      animFrameRef.current = requestAnimationFrame(render);
    }
  }, []);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";

    img.onload = () => {
      generateParticles(img);
    };

    img.onerror = () => {
      console.error("Failed to load portrait image");
    };

    img.src = src;

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [src, generateParticles]);

  // Draw once statically after particles are ready (no loop needed)
  useEffect(() => {
    if (isReady) render();
    return () => { if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current); };
  }, [isReady, render]);

  const handleMouseEnter = useCallback(() => {
    // Start the rAF loop only when hovering
    if (!animFrameRef.current) {
      animFrameRef.current = requestAnimationFrame(render);
    }
  }, [render]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      mouseRef.current = {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
        active: true,
      };
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -1000, y: -1000, active: false };
    // Stop the loop and redraw statically (clears magnifier)
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = 0;
    }
    render();
  }, [render]);

  return (
    <canvas
      ref={canvasRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-auto max-w-[700px] select-none cursor-none"
      style={{ imageRendering: "auto" }}
    />
  );
}
