import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ParallaxHero from "@/components/ParallaxHero";
import ProductDetailModal, { ProductDetail } from "@/components/ProductDetailModal";
import sofaHero from "@/assets/sofa-hero.jpg";
import sofaTerracotta from "@/assets/product-sofa-terracotta.jpg";
import caneChair from "@/assets/product-cane-chair.jpg";
import daybedNavy from "@/assets/product-daybed-navy.jpg";
import ottomanRust from "@/assets/product-ottoman-rust.jpg";

const products: ProductDetail[] = [
  {
    image: sofaHero,
    name: "Aranya 3-Seater",
    material: "Forest Green Velvet · Teak",
    price: "₹1,24,000",
    dimensions: "220 × 85 × 72 cm",
    category: "Sofas",
    leadTime: "6–8 weeks",
    description: "The Aranya is a deep, low-slung sofa built on a solid Teak frame. Its generous seat depth and forest green velvet upholstery make it suited to large drawing rooms. Proportions are calibrated for Indian room heights.",
    features: ["Solid Teak frame — no plywood", "ISI-certified foam core, 180mm depth", "Handwoven Velvet, colour-fast", "Removable cushion covers", "Optional custom upholstery"],
  },
  {
    image: sofaTerracotta,
    name: "Madhya Sofa",
    material: "Terracotta Velvet · Sheesham",
    price: "₹1,08,000",
    dimensions: "210 × 82 × 70 cm",
    category: "Sofas",
    leadTime: "6–8 weeks",
    description: "The Madhya draws from classical Indian proportions — lower seat, wider arms. The terracotta velvet references the warm clay tones of traditional Indian architecture.",
    features: ["Solid Sheesham (Indian Rosewood) frame", "Medium-density foam with feather topper", "Terracotta velvet, handwoven in Gujarat", "Brass leg caps", "Available in 2 or 3 seater"],
  },
  {
    image: caneChair,
    name: "Vayam Armchair",
    material: "Natural Cane · Teak · Linen",
    price: "₹48,500",
    dimensions: "78 × 74 × 82 cm",
    category: "Chairs",
    leadTime: "4–6 weeks",
    description: "A sculptural armchair that balances traditional cane weaving with a contemporary Teak frame. Light enough to move, sturdy enough to last a generation. The linen cushion is removable.",
    features: ["Hand-woven natural cane by West Bengal artisans", "Solid Teak frame, oiled finish", "Linen seat cushion, removable", "Lightweight: 8.2 kg", "Indoor use only"],
  },
  {
    image: daybedNavy,
    name: "Nila Daybed",
    material: "Navy Linen · Sheesham",
    price: "₹88,000",
    dimensions: "190 × 90 × 45 cm",
    category: "Daybeds",
    leadTime: "6–8 weeks",
    description: "The Nila is a reading daybed built for the Indian afternoon. Navy linen over a solid Sheesham base, with bolster cushions. Low and generous — it sits close to the floor as a daybed should.",
    features: ["Solid Sheesham base", "Navy linen upholstery", "2 included bolster cushions", "Flush-to-floor profile: 45 cm", "Optional trundle storage"],
  },
  {
    image: caneChair,
    name: "Tula Side Chair",
    material: "Handwoven Cane · Teak",
    price: "₹28,000",
    dimensions: "58 × 60 × 80 cm",
    category: "Chairs",
    leadTime: "4–6 weeks",
    description: "A refined side chair built for dining rooms and studies. The full cane back creates a light, airy silhouette — beautiful against a whitewashed wall.",
    features: ["Full hand-woven cane back", "Solid Teak legs", "Weight: 5.5 kg", "Dining height: 45 cm seat", "Set of 2 or 4 available"],
  },
  {
    image: ottomanRust,
    name: "Agni Ottoman",
    material: "Rust Leather · Brass Studs",
    price: "₹32,000",
    dimensions: "90 × 60 × 42 cm",
    category: "Ottomans",
    leadTime: "4–5 weeks",
    description: "A compact footstool finished in hand-cut rust leather with brass stud detailing along the base. Pairs well with the Aranya and Madhya sofas.",
    features: ["Full-grain vegetable-tanned leather", "Brass studs, hand-nailed", "Solid Sheesham internal frame", "Firm high-density foam", "Can be used as a seat or table"],
  },
];

const filters = ["All", "Sofas", "Chairs", "Daybeds", "Ottomans"];

const Sofas = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState<ProductDetail | null>(null);

  const filtered = activeFilter === "All" ? products : products.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navigation />

      <ParallaxHero image={sofaHero} alt="Sofas collection" className="h-[70vh] min-h-[500px]">
        <div className="h-full flex items-end section-padding pb-16">
          <div>
            <p className="type-caption text-ivory/60 mb-2">Collection</p>
            <h1 className="type-display text-ivory leading-none">
              Sofas &amp;<br />
              <span className="italic font-light">Seating</span>
            </h1>
          </div>
        </div>
      </ParallaxHero>

      {/* Intro */}
      <section className="section-padding py-16 md:py-20">
        <Reveal className="max-w-3xl">
          <p className="type-caption text-brass mb-4">6 Pieces · Handcrafted</p>
          <h2 className="type-headline text-charcoal mb-4">Seating as architecture.</h2>
          <p className="type-body text-muted-foreground">
            Every sofa and chair in this collection is built on a solid wood frame — Sheesham or Teak — and
            upholstered in fabrics sourced within India. Tap any piece to view full details and enquire.
          </p>
        </Reveal>
      </section>

      {/* Filter Bar */}
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

      {/* Materials */}
      <section className="section-padding py-20 bg-linen border-t border-border">
        <Reveal className="mb-12">
          <h2 className="type-headline text-charcoal">Materials Used</h2>
        </Reveal>
        <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-8" stagger>
          {[
            { name: "Sheesham", desc: "Indian Rosewood. Dense, durable, warm grain." },
            { name: "Teak", desc: "Plantation teak. Weather-resistant, classic warmth." },
            { name: "Natural Cane", desc: "Hand-woven by artisans in West Bengal." },
            { name: "Hand-beaten Brass", desc: "Accent hardware, hand-finished in Moradabad." },
          ].map((m) => (
            <div key={m.name} className="border-t border-border pt-6">
              <h3 className="font-['Cormorant_Garamond'] text-xl text-charcoal mb-2">{m.name}</h3>
              <p className="type-body text-muted-foreground text-sm">{m.desc}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <Footer />
      <ProductDetailModal product={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default Sofas;
