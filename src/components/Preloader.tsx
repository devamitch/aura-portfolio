import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: "power4.inOut",
          display: "none"
        });
      }
    });

    tl.fromTo(textRef.current, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(progressRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 2, ease: "power2.inOut" },
      "-=0.5"
    )
    .to(textRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: "power3.in"
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white"
      id="preloader"
    >
      <div className="relative overflow-hidden">
        <div ref={textRef} className="text-4xl md:text-6xl font-light tracking-widest uppercase mb-8">
          Aura Architect
        </div>
      </div>
      <div className="w-64 h-[1px] bg-white/20 relative">
        <div 
          ref={progressRef}
          className="absolute inset-0 bg-white origin-left"
        />
      </div>
      <div className="mt-4 text-[10px] tracking-[0.3em] uppercase text-white/40">
        Principal Design Studio
      </div>
    </div>
  );
}
