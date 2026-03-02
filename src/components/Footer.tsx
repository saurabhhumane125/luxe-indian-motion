import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-ivory section-padding py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <h2
            className="font-['Cormorant_Garamond'] text-4xl font-light text-ivory mb-4"
          >
            Kaashvaad
          </h2>
          <p className="type-body text-ivory/60 max-w-xs leading-relaxed">
            Architectural furniture and lighting, handcrafted in India from Sheesham, 
            Teak, Cane, and Brass. Material authenticity, refined form.
          </p>
          <p className="type-caption text-brass mt-6">Crafted in India · Est. 2014</p>
        </div>

        <div>
          <p className="type-caption text-ivory/40 mb-6">Collections</p>
          <div className="flex flex-col gap-3">
            {[
              { label: "Sofas & Seating", href: "/sofas" },
              { label: "Solid Wood Beds", href: "/beds" },
              { label: "Accent Lighting", href: "/lighting" },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="type-body text-ivory/70 hover:text-brass transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="type-caption text-ivory/40 mb-6">Studio</p>
          <div className="flex flex-col gap-3">
            <Link to="/atelier" className="type-body text-ivory/70 hover:text-brass transition-colors duration-300">
              Our Atelier
            </Link>
            <a href="#" className="type-body text-ivory/70 hover:text-brass transition-colors duration-300">
              Enquire
            </a>
            <a href="#" className="type-body text-ivory/70 hover:text-brass transition-colors duration-300">
              Visit Showroom
            </a>
          </div>
          <div className="mt-8">
            <p className="type-caption text-ivory/40 mb-2">Mumbai, Maharashtra</p>
            <a href="mailto:studio@kaashvaad.in" className="type-body text-brass hover:opacity-70 transition-opacity duration-300">
              studio@kaashvaad.in
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row justify-between gap-4">
        <p className="type-caption text-ivory/30">© 2024 Kaashvaad. All rights reserved.</p>
        <p className="type-caption text-ivory/30">Handcrafted in India with love and restraint.</p>
      </div>
    </footer>
  );
};

export default Footer;
