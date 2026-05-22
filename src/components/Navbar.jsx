import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Billboard",
      path: "/billboard",
    },
    {
      name: "Media",
      path: "/media",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-black text-white"
        >
          Miam Horizon
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-white">

          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="hover:text-green-400 transition"
            >
              {link.name}
            </Link>
          ))}

        </div>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden lg:flex bg-green-400 text-black px-5 py-2 rounded-full font-bold hover:scale-105 transition"
        >
          Book Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen
            ? "max-h-screen border-t border-white/10"
            : "max-h-0"
        }`}
      >

        <div className="px-6 py-6 flex flex-col gap-6 bg-black text-white">

          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-green-400 transition"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-green-400 text-black py-3 rounded-full text-center font-bold"
          >
            Book Now
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;