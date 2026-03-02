import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".loader-wordmark", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power2.out",
    })
      .to(
        ".loader-line",
        {
          scaleX: 1,
          duration: 0.7,
          ease: "power2.inOut",
        },
        "-=0.3"
      )
      .to(".loader-tagline", {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      }, "-=0.2")
      // Hold for a beat, then fade out
      .to({}, { duration: 0.4 })
      .to(loaderRef.current, {
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.6,
        ease: "power2.inOut",
        onComplete,
      });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-plaster"
    >
      <div className="text-center">
        <h1 className="loader-wordmark font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light tracking-[0.12em] text-charcoal">
          Kaashvaad
        </h1>
        <div className="mt-4 flex items-center justify-center">
          <span
            className="loader-tagline type-caption text-muted-foreground opacity-0"
          >
            Crafted in India
          </span>
        </div>
        <div
          className="loader-line mt-6 h-px bg-brass origin-left mx-auto"
          style={{ transform: "scaleX(0)", width: "180px" }}
        />
      </div>
    </div>
  );
};

export default Loader;
