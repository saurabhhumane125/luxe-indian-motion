import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ParallaxHero from "@/components/ParallaxHero";
import ProductDetailModal, { ProductDetail } from "@/components/ProductDetailModal";
import lightingHero from "@/assets/lighting-hero.jpg";
import wallSconce from "@/assets/product-wall-sconce.jpg";
import chandelierBrass from "@/assets/product-chandelier-brass.jpg";
import tableLamp from "@/assets/product-table-lamp.jpg";
import trackLight from "@/assets/product-track-light.jpg";
import sconcePair from "@/assets/product-sconce-pair.jpg";

const products: ProductDetail[] = [
  {
    image: lightingHero,
    name: "Tamba Pendant",
    material: "Hand-spun Brass",
    price: "₹18,500",
    dimensions: "Ø 46 cm · E27 · Custom drop",
    category: "Pendants",
    leadTime: "4–6 weeks",
    description: "The Tamba is hand-spun on a lathe in our Moradabad workshop. The shade throws a warm, diffused pool of light — dramatic in double-height spaces, intimate in dining rooms.",
    features: ["Hand-spun brass shade", "E27 socket, 25W LED compatible", "ISI-certified 3-core cotton braided cord", "Custom drop length at no extra charge", "Available in Antique, Polished, or Matte Brass"],
  },
  {
    image: wallSconce,
    name: "Jali Wall Sconce",
    material: "Cast Brass · Perforated",
    price: "₹12,000",
    dimensions: "22 × 18 × 32 cm",
    category: "Wall Sconces",
    leadTime: "4–6 weeks",
    description: "The Jali sconce is cast in brass and perforated by hand — each hole made individually, creating a pattern of warm dappled light on the wall. Inspired by the stone jali screens of Rajasthan.",
    features: ["Sand-cast brass body", "Hand-perforated jali pattern", "E14 socket, 7W LED compatible", "Hardwired wall mount", "Pairs sold as set of 2"],
  },
  {
    image: chandelierBrass,
    name: "Gol Chandelier",
    material: "Forged Brass · Set of 3",
    price: "₹54,000",
    dimensions: "Ø 90 cm · Custom drop",
    category: "Chandeliers",
    leadTime: "6–8 weeks",
    description: "Three forged brass rings of decreasing diameter, suspended concentrically. The Gol works best at 3–4 metre ceiling heights, where the staggered rings create an architectural composition from below.",
    features: ["Three concentric forged brass rings", "Canopy: ∅ 20 cm steel plate, brass finish", "9 × E27 sockets, 10W LED compatible", "Minimum ceiling height: 3.5 m recommended", "Custom drop available"],
  },
  {
    image: tableLamp,
    name: "Prarthana Table Lamp",
    material: "Brass · Handmade Shade",
    price: "₹9,800",
    dimensions: "Ø 28 cm · H 52 cm",
    category: "Table Lamps",
    leadTime: "3–4 weeks",
    description: "A reading lamp conceived for the bedside or study. The Prarthana has a cast brass body and a handmade linen shade — warm, directional light without harshness.",
    features: ["Cast brass base and stem", "Handmade linen shade (off-white)", "E27 socket, 10W LED compatible", "ISI-certified textile cord", "On/off switch on cord"],
  },
  {
    image: trackLight,
    name: "Aakash Track Light",
    material: "Matte Brass · Adjustable",
    price: "₹24,000",
    dimensions: "3-point · 90 cm bar",
    category: "Pendants",
    leadTime: "4–6 weeks",
    description: "A 3-point track system in matte brass for accent and artwork lighting. Each head rotates 350° and tilts 90°. Clean, precise, architectural.",
    features: ["3-point adjustable spotlights", "90 cm matte brass bar", "GU10 sockets, 7W LED compatible", "Full 350° rotation per head", "Hardwired ceiling mount"],
  },
  {
    image: sconcePair,
    name: "Sangam Sconce Pair",
    material: "Antique Brass",
    price: "₹21,000",
    dimensions: "Set of 2 · 18 cm arm",
    category: "Wall Sconces",
    leadTime: "4–6 weeks",
    description: "Two matching wall sconces in antique brass — designed to flank a mirror, headboard, or artwork. The Sangam pair creates a balanced, symmetrical composition on any wall.",
    features: ["Sold as matched pair", "Antique brass finish, hand-applied", "18 cm projection arm", "E14 socket, 7W LED compatible", "Hardwired installation"],
  },
];

const filters = ["All", "Pendants", "Wall Sconces", "Table Lamps", "Chandeliers"];

const Lighting = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState<ProductDetail | null>(null);

  const filtered = activeFilter === "All" ? products : products.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navigation />

      <ParallaxHero image={lightingHero} alt="Accent lighting collection" className="h-[70vh] min-h-[500px]">
        <div className="h-full flex items-end section-padding pb-16">
          <div>
            <p className="type-caption text-ivory/60 mb-2">Collection</p>
            <h1 className="type-display text-ivory leading-none">
              Accent<br />
              <span className="italic font-light">Lighting</span>
            </h1>
          </div>
        </div>
      </ParallaxHero>

      {/* Intro */}
      <section className="section-padding py-16 md:py-20">
        <Reveal className="max-w-3xl">
          <p className="type-caption text-brass mb-4">6 Pieces · Hand-Finished Brass</p>
          <h2 className="type-headline text-charcoal mb-4">Light as material.</h2>
          <p className="type-body text-muted-foreground">
            Each piece is formed from hand-spun or cast brass, finished in our Moradabad workshop.
            Tap any piece to explore full specifications and enquire directly.
          </p>
        </Reveal>
      </section>

      {/* Filter */}
      <section className="section-padding border-t border-border border-b py-4 mb-10">
        <div className="flex items-center gap-4 md:gap-6 overflow-x-auto pb-1">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`type-caption whitespace-nowrap transition-colors duration-300 ${
                f === activeFilter ? "text-brass" : "text-muted-foreground hover:text-charcoal"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <button onClick={() => setSelected(p)} className="block w-full text-left group">
                <div className="product-card bg-linen">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5 border-t border-border">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="type-caption text-muted-foreground mb-1 truncate">{p.material}</p>
                        <h3 className="font-['Cormorant_Garamond'] text-xl font-normal leading-tight text-charcoal group-hover:text-brass transition-colors duration-300">{p.name}</h3>
                        {p.dimensions && <p className="type-caption text-muted-foreground mt-1">{p.dimensions}</p>}
                      </div>
                      <p className="type-price text-charcoal flex-shrink-0">{p.price}</p>
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-brass">
                      <span className="type-caption">View Details</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">→</span>
                    </div>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Technical Notes */}
      <section className="section-padding py-20 bg-linen border-t border-border">
        <Reveal className="max-w-3xl">
          <p className="type-caption text-muted-foreground mb-8">Technical Specifications</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Wiring", value: "ISI-certified, 3-core cotton braided cord" },
              { label: "Bulb Type", value: "E27 / B22 · 10–25W LED compatible" },
              { label: "Finish", value: "Antique Brass, Polished Brass, Matte Brass" },
              { label: "Lead Time", value: "4–6 weeks from confirmation" },
              { label: "Custom Drop", value: "Available on request, no extra charge" },
              { label: "Origin", value: "Moradabad, Uttar Pradesh, India" },
            ].map((spec) => (
              <div key={spec.label} className="flex gap-4 border-t border-border pt-4">
                <span className="type-caption text-muted-foreground w-28 flex-shrink-0 pt-0.5">{spec.label}</span>
                <span className="type-body text-charcoal">{spec.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <Footer />
      <ProductDetailModal product={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default Lighting;
