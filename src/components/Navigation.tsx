import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Sofas & Seating", href: "/sofas" },
  { label: "Solid Wood Beds", href: "/beds" },
  { label: "Accent Lighting", href: "/lighting" },
  { label: "Atelier", href: "/atelier" },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-ivory/95 backdrop-blur-sm border-b border-border"
            : "bg-gradient-to-b from-charcoal/40 to-transparent"
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 1.6 }}
      >
        <div className="section-padding flex items-center justify-between h-16 md:h-20">
          {/* Wordmark */}
          <Link to="/" className="group z-10 flex items-center gap-2.5">
            <span
              className={`font-['Cormorant_Garamond'] text-[1.35rem] md:text-[1.5rem] tracking-[0.1em] font-medium transition-colors duration-300 ${
                scrolled ? "text-charcoal" : "text-ivory drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
              }`}
            >
              Kaashvaad
            </span>
            <span
              className={`type-caption text-[0.55rem] tracking-[0.18em] transition-colors duration-300 hidden sm:block ${
                scrolled ? "text-brass" : "text-brass drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
              }`}
            >
              ✦ Crafted in India
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`type-nav relative group transition-colors duration-300 ${
                  location.pathname === link.href
                    ? "text-brass"
                    : scrolled
                    ? "text-charcoal hover:text-brass"
                    : "text-ivory/90 hover:text-brass"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-brass transition-all duration-300 ${
                    location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Enquire CTA — desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="mailto:studio@kaashvaad.in?subject=Enquiry from Website&body=Hi, I'd like to enquire about your furniture collection."
              className={`type-nav border px-5 py-2 transition-all duration-300 hover:bg-brass hover:text-ivory hover:border-brass ${
                scrolled ? "text-charcoal border-charcoal/30" : "text-ivory border-ivory/50"
              }`}
            >
              Enquire
            </a>
          </div>

          {/* Hamburger — mobile */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 z-10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className={`block w-6 h-px origin-center transition-colors duration-300 ${scrolled ? "bg-charcoal" : "bg-ivory"}`}
              animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className={`block w-6 h-px transition-colors duration-300 ${scrolled ? "bg-charcoal" : "bg-ivory"}`}
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className={`block w-6 h-px origin-center transition-colors duration-300 ${scrolled ? "bg-charcoal" : "bg-ivory"}`}
              animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[99] bg-ivory flex flex-col"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="section-padding flex items-center h-16 border-b border-border">
              <span className="font-['Cormorant_Garamond'] text-xl tracking-[0.06em] text-charcoal">
                Kaashvaad
              </span>
            </div>
            <div className="flex-1 flex flex-col justify-center section-padding gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  <Link
                    to={link.href}
                    className={`font-['Cormorant_Garamond'] block text-4xl font-normal ${
                      location.pathname === link.href ? "text-brass" : "text-charcoal"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.07, duration: 0.4 }}
              >
                <a
                  href="mailto:studio@kaashvaad.in?subject=Enquiry from Website&body=Hi, I'd like to enquire about your furniture collection."
                  className="type-nav text-charcoal border border-charcoal/40 inline-block px-6 py-3 mt-2 hover:bg-brass hover:text-ivory hover:border-brass transition-all duration-300"
                >
                  Enquire Now
                </a>
              </motion.div>
            </div>
            <div className="section-padding pb-10 border-t border-border pt-5">
              <p className="type-caption text-muted-foreground">Crafted in India · Est. 2014</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
