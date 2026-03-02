import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxHeroProps {
  image: string;
  alt: string;
  children?: React.ReactNode;
  className?: string;
}

const ParallaxHero = ({ image, alt, children, className = "" }: ParallaxHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    const container = containerRef.current;
    if (!el || !container) return;

    // Disable heavy parallax under 768px
    if (window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`parallax-container relative ${className}`}>
      <img
        ref={imageRef}
        src={image}
        alt={alt}
        className="parallax-image absolute inset-0"
        loading="eager"
      />
      <div className="absolute inset-0 bg-charcoal/20" />
      {children && (
        <div className="relative z-10 h-full">{children}</div>
      )}
    </div>
  );
};

export default ParallaxHero;
