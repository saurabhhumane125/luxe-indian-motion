import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ParallaxHero from "@/components/ParallaxHero";
import ProductDetailModal, { ProductDetail } from "@/components/ProductDetailModal";
import bedHero from "@/assets/bed-hero.jpg";
import platformBed from "@/assets/product-platform-bed.jpg";

const products: ProductDetail[] = [
  {
    image: bedHero,
    name: "Vanam Bed",
    material: "Sheesham · Brass Hardware",
    price: "₹98,000",
    dimensions: "King 200 × 200 cm · H 110 cm",
    category: "King",
    leadTime: "8–10 weeks",
    description: "The Vanam is a statement bed built from solid Sheesham with hand-cast brass hardware. Its tall headboard creates a focal point in the bedroom while maintaining structural simplicity.",
    features: ["100% solid Sheesham — no plywood or MDF", "Mortise and tenon joinery throughout", "Hand-cast brass hardware from Moradabad", "Natural oil finish, 3 coats", "Fits standard King mattress 200 × 200 cm"],
  },
  {
    image: platformBed,
    name: "Sthira Platform Bed",
    material: "Teak · Satin Finish",
    price: "₹84,000",
    dimensions: "Queen 160 × 200 cm · H 35 cm",
    category: "Queen",
    leadTime: "8–10 weeks",
    description: "A platform bed conceived for the contemporary Indian bedroom. Low profile, clean lines, no hardware. The Sthira sits 35 cm off the ground — lower than Western beds, grounded, composed.",
    features: ["Solid plantation Teak frame", "Satin oil finish — no synthetic lacquer", "Platform height 35 cm", "No hardware, pure joinery", "Fits Queen mattress 160 × 200 cm"],
  },
  {
    image: bedHero,
    name: "Akasha Bed",
    material: "Sheesham · Cane Headboard",
    price: "₹1,12,000",
    dimensions: "King 200 × 200 cm · H 120 cm",
    category: "King",
    leadTime: "8–10 weeks",
    description: "The Akasha combines solid Sheesham with a full-height hand-woven cane headboard. The cane panel is woven by artisans in West Bengal — each one slightly unique.",
    features: ["Solid Sheesham frame", "Full-height cane headboard, hand-woven", "Cane woven by West Bengal artisans", "Under-bed storage drawers available", "Fits King mattress 200 × 200 cm"],
  },
  {
    image: platformBed,
    name: "Dharti Low Bed",
    material: "Teak · Brass Inlay",
    price: "₹76,000",
    dimensions: "Queen 160 × 200 cm · H 30 cm",
    category: "Queen",
    leadTime: "8–10 weeks",
    description: "Our most minimal bed. The Dharti sits 30 cm from the floor — almost a Japanese-influenced zabuton height. Fine brass inlay lines trace the headboard frame.",
    features: ["Solid Teak throughout", "Hand-applied Brass inlay detailing", "Ultra-low platform at 30 cm", "Natural beeswax finish option", "Fits Queen mattress 160 × 200 cm"],
  },
];

const filters = ["All Sizes", "King (200 cm)", "Queen (160 cm)"];

const Beds = () => {
  const [activeFilter, setActiveFilter] = useState("All Sizes");
  const [selected, setSelected] = useState<ProductDetail | null>(null);

  const filtered = activeFilter === "All Sizes" ? products : products.filter((p) => {
    if (activeFilter === "King (200 cm)") return p.category === "King";
    if (activeFilter === "Queen (160 cm)") return p.category === "Queen";
    return true;
  });

  return (
    <div className="min-h-screen">
      <Navigation />

      <ParallaxHero image={bedHero} alt="Solid wood beds collection" className="h-[70vh] min-h-[500px]">
        <div className="h-full flex items-end section-padding pb-16">
          <div>
            <p className="type-caption text-ivory/60 mb-2">Collection</p>
            <h1 className="type-display text-ivory leading-none">
              Solid<br />
              <span className="italic font-light">Wood Beds</span>
            </h1>
          </div>
        </div>
      </ParallaxHero>

      {/* Intro */}
      <section className="section-padding py-16 md:py-20">
        <Reveal className="max-w-3xl">
          <p className="type-caption text-brass mb-4">4 Pieces · Solid Wood</p>
          <h2 className="type-headline text-charcoal mb-4">Sleep on something real.</h2>
          <p className="type-body text-muted-foreground">
            Each bed is hewn from a single species of solid wood — no plywood, no MDF.
            Tap any piece to explore specifications and enquire.
          </p>
        </Reveal>
      </section>

      {/* Size Filter */}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {filtered.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <button onClick={() => setSelected(p)} className="block w-full text-left group">
                <div className="product-card bg-linen">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5 border-t border-border">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="type-caption text-muted-foreground mb-1">{p.material}</p>
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

      {/* Construction Details */}
      <section className="section-padding py-20 bg-charcoal">
        <Reveal className="mb-14">
          <p className="type-caption text-brass mb-2">Construction</p>
          <h2 className="type-headline text-ivory">How we build.</h2>
        </Reveal>
        <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-10" stagger>
          {[
            { num: "01", title: "Solid Joinery", desc: "Mortise and tenon joints, no metal brackets. Traditional Indian woodworking techniques." },
            { num: "02", title: "Hand Finishing", desc: "Three coats of natural oil finish, hand-rubbed between each coat. No synthetic lacquer." },
            { num: "03", title: "Brass Details", desc: "Hardware cast and hand-finished in Moradabad, India's brass capital, to order." },
          ].map((item) => (
            <div key={item.num} className="border-t border-ivory/10 pt-6">
              <p className="type-caption text-brass mb-3">{item.num}</p>
              <h3 className="font-['Cormorant_Garamond'] text-2xl text-ivory mb-3">{item.title}</h3>
              <p className="type-body text-ivory/50">{item.desc}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <Footer />
      <ProductDetailModal product={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default Beds;
