"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Starfield() {
  const ref = useRef<THREE.Points>(null);

  // Generate random points in a sphere for a luxurious subtle background
  const sphere = useMemo(() => {
    const count = 2500;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2 * Math.cbrt(Math.random()); // radius 2
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Extremely slow rotation for that premium, calm feel (RHYTHM/MOTION 2)
      ref.current.rotation.x -= delta * 0.02;
      ref.current.rotation.y -= delta * 0.03;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#d4af37"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.5}
        />
      </Points>
    </group>
  );
}

export default function AppParticleCanvas() {
  return (
    <div className="fixed inset-0 z-0 bg-[#050505] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Starfield />
      </Canvas>
      {/* Vignette overlay to darken the edges and draw focus to the center */}
      <div 
        className="absolute inset-0 opacity-80" 
        style={{ background: 'radial-gradient(circle at center, transparent 0%, #050505 100%)' }}
      />
    </div>
  );
}
