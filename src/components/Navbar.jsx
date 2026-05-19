import { Link } from "react-router-dom"
import { useState } from "react"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-cyan-400">
          MIAM Horizons
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-white font-medium">

          <Link
            to="/"
            className="hover:text-cyan-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-cyan-400 transition duration-300"
          >
            About
          </Link>

          <Link
            to="/gallery"
            className="hover:text-cyan-400 transition duration-300"
          >
            Gallery
          </Link>


        </div>

        {/* BUTTON */}
        <button className="hidden md:block bg-cyan-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition">
          Book Slot
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-cyan-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-2xl leading-none">{menuOpen ? "X" : "|||"}</span>
        </button>

      </div>

      {/* MOBILE MENU */}
      {
        menuOpen && (
          <div className="md:hidden bg-[#0b1120] border-t border-cyan-500/20 px-6 py-6 flex flex-col gap-6 text-white">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              About
            </Link>

            <Link
              to="/gallery"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              Gallery
            </Link>


            <button className="bg-cyan-400 text-black px-5 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition">
              Book Slot
            </button>

          </div>
        )
      }

    </nav>
  )
}

export default Navbar
