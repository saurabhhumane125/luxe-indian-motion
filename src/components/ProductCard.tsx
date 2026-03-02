import { Link } from "react-router-dom";

interface ProductCardProps {
  image: string;
  name: string;
  material: string;
  price: string;
  dimensions?: string;
  href?: string;
}

const ProductCard = ({
  image,
  name,
  material,
  price,
  dimensions,
  href = "#",
}: ProductCardProps) => {
  return (
    <Link to={href} className="block group">
      <div className="product-card bg-linen">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/5]">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Info */}
        <div className="p-5 border-t border-border">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="type-caption text-muted-foreground mb-1">{material}</p>
              <h3
                className="font-['Cormorant_Garamond'] text-xl font-normal leading-tight text-charcoal group-hover:text-brass transition-colors duration-300"
              >
                {name}
              </h3>
              {dimensions && (
                <p className="type-caption text-muted-foreground mt-1">{dimensions}</p>
              )}
            </div>
            <div className="text-right flex-shrink-0">
              <p className="type-price text-charcoal">{price}</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1 text-brass">
            <span className="type-caption">View Details</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
