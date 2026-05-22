// Navbar.jsx

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-3"
          : "py-5"
      }`}
    >

      <div className="max-w-7xl mx-auto px-6">

        <div
          className={`relative flex items-center justify-between rounded-full border transition-all duration-500 ${
            scrolled
              ? "bg-black/85 border-white/10 backdrop-blur-2xl shadow-[0_10px_50px_rgba(0,0,0,0.5)] px-6 py-4"
              : "bg-black/40 border-white/5 backdrop-blur-xl px-6 py-5"
          }`}
        >

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >

            {/* LOGO ICON */}
            <div className="relative w-10 h-10 rounded-2xl bg-green-400/10 border border-green-400/20 flex items-center justify-center overflow-hidden">

              <div className="absolute inset-0 bg-green-400/20 blur-xl" />

              <div className="relative w-3 h-3 bg-green-400 rounded-full" />

            </div>

            {/* LOGO TEXT */}
            <div>

              <h1 className="text-xl md:text-2xl font-black tracking-tight text-white">
                MIAM Horizons
              </h1>

              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
                Digital Outdoor Media
              </p>

            </div>

          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-2">

            {navLinks.map((link, index) => {

              const active = location.pathname === link.path;

              return (
                <Link
                  key={index}
                  to={link.path}
                  className={`relative px-5 py-3 rounded-full text-sm font-medium transition duration-300 ${
                    active
                      ? "text-black bg-green-400"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >

                  {link.name}

                </Link>
              );
            })}

          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* CTA */}
            <Link
              to="/contact"
              className="hidden lg:flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
            >

              Book Now

              <ArrowUpRight size={18} />

            </Link>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white"
            >

              {menuOpen
                ? <X size={26} />
                : <Menu size={26} />
              }

            </button>

          </div>

        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            menuOpen
              ? "max-h-screen opacity-100 mt-4"
              : "max-h-0 opacity-0"
          }`}
        >

          <div className="bg-black/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 shadow-2xl">

            <div className="flex flex-col gap-3">

              {navLinks.map((link, index) => {

                const active = location.pathname === link.path;

                return (
                  <Link
                    key={index}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`px-5 py-4 rounded-2xl transition duration-300 ${
                      active
                        ? "bg-green-400 text-black font-bold"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >

                    {link.name}

                  </Link>
                );
              })}

              {/* MOBILE CTA */}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 bg-white text-black rounded-2xl py-4 font-bold text-center flex items-center justify-center gap-2"
              >

                Book Advertising

                <ArrowUpRight size={18} />

              </Link>

            </div>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;