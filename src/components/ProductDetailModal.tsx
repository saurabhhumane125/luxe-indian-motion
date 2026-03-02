import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone } from "lucide-react";

export interface ProductDetail {
  image: string;
  name: string;
  material: string;
  price: string;
  dimensions?: string;
  description?: string;
  features?: string[];
  leadTime?: string;
  category?: string;
}

interface ProductDetailModalProps {
  product: ProductDetail | null;
  onClose: () => void;
}

const ProductDetailModal = ({ product, onClose }: ProductDetailModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [product]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          ref={overlayRef}
          className="fixed inset-0 z-[200] flex items-end md:items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="relative z-10 bg-background w-full md:max-w-4xl max-h-[92vh] md:max-h-[88vh] overflow-y-auto md:mx-6 md:rounded-none shadow-2xl"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-background/90 border border-border text-muted-foreground hover:text-charcoal hover:border-charcoal transition-all duration-200"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 min-h-0">
              {/* Image */}
              <div className="relative bg-linen" style={{ minHeight: "280px" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  style={{ maxHeight: "480px", minHeight: "280px" }}
                />
                {product.category && (
                  <div className="absolute top-4 left-4">
                    <span className="type-caption text-ivory/90 bg-charcoal/60 px-3 py-1.5">
                      {product.category}
                    </span>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="flex flex-col">
                {/* Header */}
                <div className="p-6 md:p-8 border-b border-border">
                  <p className="type-caption text-brass mb-2">{product.material}</p>
                  <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-normal text-charcoal leading-tight mb-2">
                    {product.name}
                  </h2>
                  <p className="font-['Cormorant_Garamond'] text-2xl text-charcoal font-medium">
                    {product.price}
                  </p>
                </div>

                {/* Specs */}
                <div className="p-6 md:p-8 space-y-0 flex-1 overflow-y-auto">
                  {product.dimensions && (
                    <div className="flex gap-4 border-b border-border pb-4 mb-4">
                      <span className="type-caption text-muted-foreground w-24 flex-shrink-0 pt-0.5">Dimensions</span>
                      <span className="type-body text-charcoal">{product.dimensions}</span>
                    </div>
                  )}

                  {product.leadTime && (
                    <div className="flex gap-4 border-b border-border pb-4 mb-4">
                      <span className="type-caption text-muted-foreground w-24 flex-shrink-0 pt-0.5">Lead Time</span>
                      <span className="type-body text-charcoal">{product.leadTime}</span>
                    </div>
                  )}

                  {product.description && (
                    <div className="border-b border-border pb-4 mb-4">
                      <p className="type-body text-muted-foreground leading-relaxed">{product.description}</p>
                    </div>
                  )}

                  {product.features && product.features.length > 0 && (
                    <div className="mb-2">
                      <p className="type-caption text-muted-foreground mb-3">Features</p>
                      <ul className="space-y-2">
                        {product.features.map((f) => (
                          <li key={f} className="type-body text-charcoal flex items-start gap-2.5">
                            <span className="text-brass flex-shrink-0 mt-0.5 leading-none">—</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="p-6 md:p-8 border-t border-border bg-linen/50 space-y-3">
                  <p className="type-caption text-muted-foreground mb-4">
                    All pieces are made to order. Write to us with your requirements.
                  </p>
                  <a
                    href={`mailto:studio@kaashvaad.in?subject=Enquiry: ${encodeURIComponent(product.name)}&body=Hi,%0A%0AI am interested in the ${encodeURIComponent(product.name)} (${encodeURIComponent(product.price)}).%0A%0APlease share availability, customisation options, and delivery details.%0A%0AThank you.`}
                    className="flex items-center justify-center gap-2.5 w-full type-nav text-ivory bg-charcoal border border-charcoal px-6 py-3.5 hover:bg-brass hover:border-brass transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    Enquire via Email
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="flex items-center justify-center gap-2.5 w-full type-nav text-charcoal border border-border px-6 py-3.5 hover:border-charcoal hover:bg-background transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductDetailModal;
