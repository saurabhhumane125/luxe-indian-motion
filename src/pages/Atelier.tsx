import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ParallaxHero from "@/components/ParallaxHero";
import { Link } from "react-router-dom";
import atelierHero from "@/assets/atelier-hero.jpg";
import woodTexture from "@/assets/wood-texture.jpg";
import sofaHero from "@/assets/sofa-hero.jpg";
import bedHero from "@/assets/bed-hero.jpg";
import lightingHero from "@/assets/lighting-hero.jpg";

const principles = [
  {
    num: "01",
    title: "Material Honesty",
    desc: "We never use veneers or laminates. What you see is what the piece is made of — solid Sheesham, solid Teak, actual Brass.",
  },
  {
    num: "02",
    title: "Craft Heritage",
    desc: "Our craftspeople come from families that have worked wood and brass for three or four generations. The knowledge is in their hands.",
  },
  {
    num: "03",
    title: "Indian Proportion",
    desc: "Our furniture is sized for the Indian room — lower seat heights, considered scale, proportions that feel native to Indian architecture.",
  },
  {
    num: "04",
    title: "Slow Making",
    desc: "Nothing is made to stock. Each piece is made to order, taking 6–10 weeks from confirmation to delivery.",
  },
];

const collections = [
  { label: "Sofas & Seating", href: "/sofas", image: sofaHero, count: "12 Pieces" },
  { label: "Solid Wood Beds", href: "/beds", image: bedHero, count: "8 Pieces" },
  { label: "Accent Lighting", href: "/lighting", image: lightingHero, count: "15 Pieces" },
];

const Atelier = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <ParallaxHero image={atelierHero} alt="Indian craftsman at work" className="h-[80vh] min-h-[500px]">
        <div className="h-full flex items-end section-padding pb-16">
          <div>
            <p className="type-caption text-ivory/60 mb-2">About</p>
            <h1 className="type-display text-ivory leading-none">
              The<br />
              <span className="italic font-light">Atelier</span>
            </h1>
          </div>
        </div>
      </ParallaxHero>

      {/* Studio intro — concise, no founder bio */}
      <section className="section-padding py-24 md:py-36">
        <Reveal className="max-w-4xl">
          <p className="type-caption text-brass mb-6">Our Practice</p>
          <h2 className="type-headline text-charcoal mb-8">
            Architectural furniture made by hand in India.
          </h2>
          <p className="type-body text-muted-foreground max-w-2xl">
            Kaashvaad is a Mumbai-based studio making furniture and lighting for the contemporary Indian home.
            Every piece is produced to order by a permanent atelier of craftspeople — woodworkers, cane weavers,
            and metal finishers — working across Mumbai, Moradabad, and West Bengal.
          </p>
          <p className="type-body text-muted-foreground max-w-2xl mt-4">
            We work with four materials: Sheesham, Teak, Natural Cane, and Brass. These are the materials
            of the Indian maker's tradition. Nothing is substituted, nothing is veneered.
          </p>
        </Reveal>
      </section>

      {/* Principles */}
      <section className="section-padding pb-24 bg-linen border-t border-border">
        <Reveal className="pt-24 mb-16">
          <h2 className="type-headline text-charcoal">Principles of Practice</h2>
        </Reveal>
        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-8" stagger>
          {principles.map((v) => (
            <div key={v.num} className="border-t border-border pt-8">
              <p className="type-caption text-brass mb-4">{v.num}</p>
              <h3 className="font-['Cormorant_Garamond'] text-2xl text-charcoal mb-3">{v.title}</h3>
              <p className="type-body text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Wood quote */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={woodTexture} alt="Wood grain close up" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="relative z-10 h-full flex items-center justify-center text-center section-padding">
          <Reveal>
            <p className="type-subheadline text-ivory/90 max-w-2xl">
              "The grain of Sheesham is unlike any other wood — warm, complex, alive. We build around it, not over it."
            </p>
            <p className="type-caption text-brass mt-6">— Kaashvaad Studio</p>
          </Reveal>
        </div>
      </section>

      {/* Collections showcase */}
      <section className="section-padding py-24">
        <Reveal className="mb-12">
          <p className="type-caption text-muted-foreground mb-2">Explore</p>
          <h2 className="type-headline text-charcoal">The Collections</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {collections.map((col) => (
            <Link key={col.href} to={col.href} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-linen">
                <img src={col.image} alt={col.label} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="type-caption text-ivory/60 mb-1">{col.count}</p>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-normal text-ivory">{col.label}</h3>
                  <p className="type-caption text-brass mt-2 group-hover:opacity-100 opacity-0 transition-opacity duration-300">Explore →</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="section-padding py-24 bg-charcoal">
        <Reveal className="max-w-2xl">
          <p className="type-caption text-brass mb-4">Commission</p>
          <h2 className="type-headline text-ivory mb-6">Commission a piece.</h2>
          <p className="type-body text-ivory/60 mb-8">
            All work is made to order. Write to us with your brief — dimensions, material preference,
            room context — and we will respond within 48 hours with a proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:studio@kaashvaad.in"
              className="type-nav text-charcoal bg-ivory px-8 py-4 hover:bg-brass hover:text-ivory transition-all duration-300 text-center"
            >
              studio@kaashvaad.in
            </a>
            <a
              href="tel:+919876543210"
              className="type-nav text-ivory border border-ivory/30 px-8 py-4 hover:border-brass hover:text-brass transition-all duration-300 text-center"
            >
              +91 98765 43210
            </a>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
};

export default Atelier;
