import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ParallaxHero from "@/components/ParallaxHero";
import ProductCard from "@/components/ProductCard";
import heroHome from "@/assets/hero-home.jpg";
import sofaHero from "@/assets/sofa-hero.jpg";
import bedHero from "@/assets/bed-hero.jpg";
import lightingHero from "@/assets/lighting-hero.jpg";
import atelierHero from "@/assets/atelier-hero.jpg";
import woodTexture from "@/assets/wood-texture.jpg";

gsap.registerPlugin(ScrollTrigger);

const featuredProducts = [
  {
    image: sofaHero,
    name: "Aranya Sofa",
    material: "Forest Green Velvet · Teak",
    price: "₹1,24,000",
    dimensions: "220 × 85 × 72 cm",
    href: "/sofas",
  },
  {
    image: bedHero,
    name: "Vanam Bed",
    material: "Sheesham · Brass",
    price: "₹98,000",
    dimensions: "King · 200 × 200 cm",
    href: "/beds",
  },
  {
    image: lightingHero,
    name: "Tamba Pendant",
    material: "Hand-spun Brass",
    price: "₹18,500",
    dimensions: "Ø 46 cm",
    href: "/lighting",
  },
];

const collections = [
  {
    label: "Sofas & Seating",
    href: "/sofas",
    image: sofaHero,
    count: "12 Pieces",
  },
  {
    label: "Solid Wood Beds",
    href: "/beds",
    image: bedHero,
    count: "8 Pieces",
  },
  {
    label: "Accent Lighting",
    href: "/lighting",
    image: lightingHero,
    count: "15 Pieces",
  },
];

const Index = () => {
  const heroTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-line",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power2.out",
          stagger: 0.08,
          delay: 1.6,
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <ParallaxHero
        image={heroHome}
        alt="Luxury Indian modern living space"
        className="h-screen min-h-[600px]"
      >
        <div className="h-full flex items-end section-padding pb-16 md:pb-24">
          <div ref={heroTextRef} className="max-w-3xl">
            <p className="hero-line type-caption text-ivory/70 mb-4">
              Indian Architectural Interiors
            </p>
            <h1 className="type-display text-ivory leading-none mb-6">
              <span className="hero-line block">Form</span>
              <span className="hero-line block italic font-light" style={{ fontStyle: "italic" }}>
                &amp; Function
              </span>
              <span className="hero-line block">Crafted</span>
            </h1>
            <p className="hero-line type-body text-ivory/70 max-w-md mb-8">
              Furniture and lighting conceived for the Indian home. Every piece shaped by hand, defined by material honesty.
            </p>
            <div className="hero-line flex items-center gap-8">
              <Link
                to="/sofas"
                className="type-nav text-ivory border-b border-ivory/40 pb-1 hover:border-brass hover:text-brass transition-all duration-300"
              >
                Explore Collections
              </Link>
              <Link
                to="/atelier"
                className="type-nav text-ivory/60 hover:text-ivory transition-colors duration-300"
              >
                Our Atelier →
              </Link>
            </div>
          </div>
        </div>
      </ParallaxHero>

      {/* Intro Text */}
      <section className="section-padding py-24 md:py-36">
        <Reveal className="max-w-4xl mx-auto">
          <p className="type-caption text-brass mb-6">Est. 2014 · Mumbai</p>
          <h2 className="type-headline text-charcoal mb-8">
            Architecture-grade furniture for the discerning Indian home.
          </h2>
          <p className="type-body text-muted-foreground max-w-2xl">
            Kaashvaad was founded on the belief that Indian homes deserve furniture built with the same
            material intelligence as the architecture around it. We work with Sheesham, Teak, Cane, and 
            hand-beaten Brass—materials that age with dignity.
          </p>
        </Reveal>
        
        {/* Stats */}
        <Reveal className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-12" stagger>
          {[
            { num: "350+", label: "Pieces Crafted" },
            { num: "4", label: "Indian Materials" },
            { num: "10", label: "Years of Practice" },
            { num: "60+", label: "Homes Furnished" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="type-headline text-charcoal" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                {stat.num}
              </p>
              <p className="type-caption text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Collections Grid */}
      <section className="section-padding pb-24">
        <Reveal className="mb-12">
          <span className="type-caption text-muted-foreground">Collections</span>
          <h2 className="type-headline text-charcoal mt-2">The Full Portfolio</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {collections.map((col) => (
            <Link key={col.href} to={col.href} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-linen">
                <img
                  src={col.image}
                  alt={col.label}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="type-caption text-ivory/60 mb-1">{col.count}</p>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-normal text-ivory">
                    {col.label}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding pb-24 bg-linen">
        <Reveal className="mb-12 flex items-end justify-between">
          <div>
            <span className="type-caption text-muted-foreground">Featured</span>
            <h2 className="type-headline text-charcoal mt-2">Selected Works</h2>
          </div>
          <Link to="/sofas" className="type-nav text-brass hover:opacity-70 transition-opacity hidden md:block">
            View All →
          </Link>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((p) => (
            <Reveal key={p.name} delay={0.1}>
              <ProductCard {...p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Material Philosophy */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={woodTexture}
          alt="Sheesham wood grain"
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="relative z-10 h-full flex items-center section-padding">
          <Reveal className="max-w-2xl">
            <p className="type-caption text-brass mb-4">Material Philosophy</p>
            <h2 className="type-headline text-ivory mb-6">
              Sheesham. Teak. Cane. Brass.
            </h2>
            <p className="type-body text-ivory/65 mb-8">
              Four materials that define the Indian maker's tradition. We source sustainably,
              work unhurriedly, and finish by hand. No veneers. No shortcuts.
            </p>
            <Link
              to="/atelier"
              className="type-nav text-brass border-b border-brass pb-1 hover:opacity-70 transition-opacity"
            >
              Learn About Our Process →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Atelier Teaser */}
      <section className="section-padding py-24 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={atelierHero}
                alt="Indian craftsman at work"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="type-caption text-brass mb-4">Atelier</p>
            <h2 className="type-headline text-charcoal mb-6">
              Made in a workshop that smells of wood shavings.
            </h2>
            <p className="type-body text-muted-foreground mb-8">
              Our atelier in Mumbai is where form becomes physical. Each piece moves through the hands 
              of master craftspeople before reaching your home. This is not production—it is practice.
            </p>
            <Link
              to="/atelier"
              className="type-nav text-charcoal border-b border-charcoal pb-1 hover:text-brass hover:border-brass transition-all duration-300"
            >
              Visit the Atelier →
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
