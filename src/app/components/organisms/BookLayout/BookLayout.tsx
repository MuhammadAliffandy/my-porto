"use client";
import React, { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";

interface BookLayoutProps {
  children: React.ReactNode[];
}

// @ts-ignore - react-pageflip types are sometimes missing
const FlipBook = HTMLFlipBook as any;

const Page = React.forwardRef<HTMLDivElement, { children: React.ReactNode; number: number; bgImage?: string }>((props, ref) => {
  return (
    <div className="page bg-[#0A0A0A] border-r border-[#222]" ref={ref}>
      <div className="w-full h-full overflow-hidden relative">
        {props.bgImage && (
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <img src={props.bgImage} alt={`Page ${props.number} background`} className="w-full h-full object-cover opacity-15 mix-blend-luminosity filter contrast-125 sepia-[0.3]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#14110E]/60 to-[#14110E] z-10"></div>
          </div>
        )}
        {props.children}
      </div>
    </div>
  );
});
Page.displayName = "Page";

export default function BookLayout({ children }: BookLayoutProps) {
  const bookRef = useRef<any>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    let isFlipping = false;
    const handleWheel = (e: WheelEvent) => {
      if (isFlipping) return;
      
      // Ignore if scrolling inside a scrollable container
      const target = e.target as Element;
      if (target && target.closest('.custom-scrollbar, .overflow-y-auto, .overflow-x-auto')) {
         return;
      }
      
      if (e.deltaY > 30) {
        isFlipping = true;
        bookRef.current?.pageFlip()?.flipNext();
        setTimeout(() => isFlipping = false, 800);
      } else if (e.deltaY < -30) {
        isFlipping = true;
        bookRef.current?.pageFlip()?.flipPrev();
        setTimeout(() => isFlipping = false, 800);
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });

    const handleCustomFlip = (e: any) => {
      const pageIndex = e.detail?.page;
      if (pageIndex !== undefined && bookRef.current) {
        // Content pages are now at odd indexes (1, 3, 5...) because dummy is first
        bookRef.current.pageFlip().flip(pageIndex * 2 + 1);
      }
    };
    window.addEventListener("flip-to-page", handleCustomFlip);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("flip-to-page", handleCustomFlip);
    }
  }, []);

  if (dimensions.width === 0) return null;

  return (
    <div className="w-full h-screen overflow-hidden bg-[#050505] relative">
      {/* 
        By making the container 200vw wide and shifting it left by 100vw, 
        the spine of the book (center) sits exactly at the left edge of the screen.
        Since react-pageflip renders 2 pages on desktop (each taking half the book width),
        the right page will now perfectly cover the 100vw screen!
      */}
      <div 
        className="absolute top-0 left-0 h-full" 
        style={{ width: `${dimensions.width * 2}px`, transform: `translateX(-${dimensions.width}px)` }}
      >
        <FlipBook
          width={dimensions.width}
          height={dimensions.height}
          size="fixed"
          minWidth={dimensions.width}
          maxWidth={dimensions.width}
          minHeight={dimensions.height}
          maxHeight={dimensions.height}
          maxShadowOpacity={0.8}
          showCover={false}
          mobileScrollSupport={false}
          useMouseEvents={false}
          className="flip-book"
          ref={bookRef}
          usePortrait={false}
        >
          {React.Children.toArray(children).flatMap((child: any, idx) => {
            const bgImage = child?.props?.['data-bg'];
            return [
              // Left page (back of previous, or off-screen left)
              <Page key={`left-${idx}`} number={idx * 2} bgImage={bgImage}>
                {child}
              </Page>,
              // Right page (visible to user)
              <Page key={`right-${idx}`} number={idx * 2 + 1} bgImage={bgImage}>
                {child}
              </Page>
            ];
          })}
        </FlipBook>
      </div>
    </div>
  );
}
