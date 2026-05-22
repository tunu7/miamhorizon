// About.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Zap,
  Globe,
  Eye,
  Building2,
  ArrowRight,
} from "lucide-react";

function About() {

  const aboutImages = [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  ];

  return (
    <div className="bg-black text-white overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative pt-36 pb-32 overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-500/20 blur-[140px] rounded-full" />

          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-400/10 blur-[140px] rounded-full" />

          {/* GRID */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />

        </div>

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="max-w-5xl mx-auto text-center">

            <div className="inline-flex items-center gap-3 bg-zinc-900 border border-white/10 rounded-full px-5 py-2 mb-8">

              <Sparkles
                size={16}
                className="text-green-400"
              />

              <p className="text-sm uppercase tracking-[0.2em] text-green-400">
                About MIAM Horizons
              </p>

            </div>

            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black leading-[0.95]">

              Redefining
              <span className="block text-green-400">
                Outdoor Advertising
              </span>

              In Northeast India

            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mt-10 max-w-3xl mx-auto">

              MIAM Horizons is building the next generation of premium digital
              outdoor advertising infrastructure through high-impact LED
              billboards, immersive 3D advertising experiences, and modern
              roadside media solutions.

            </p>

          </div>

        </div>

      </section>

      {/* STORY */}
      <section className="pb-28">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGES */}
          <div className="grid gap-8">

            {aboutImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-[2rem] border border-white/10"
              >

                <img
                  src={image}
                  alt="about"
                  className="w-full h-[320px] object-cover hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              </div>
            ))}

          </div>

          {/* CONTENT */}
          <div>

            <p className="text-green-400 uppercase tracking-[0.3em]">
              Our Vision
            </p>

            <h2 className="text-4xl lg:text-6xl font-black mt-6 leading-tight">

              Building Modern
              <span className="block text-green-400">
                Media Infrastructure
              </span>

            </h2>

            <p className="text-gray-400 mt-8 text-lg leading-relaxed">

              We aim to transform how brands, government organizations,
              creators, and businesses communicate with audiences through
              premium outdoor digital advertising experiences.

            </p>

            <p className="text-gray-400 mt-6 text-lg leading-relaxed">

              Our mission is to combine visibility, technology, creativity,
              and audience attention into a powerful modern media platform for
              the Northeast region.

            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6 mt-12">

              <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6">

                <h3 className="text-4xl font-black text-green-400">
                  25K+
                </h3>

                <p className="text-gray-500 mt-3">
                  Daily Impressions
                </p>

              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6">

                <h3 className="text-4xl font-black text-green-400">
                  240
                </h3>

                <p className="text-gray-500 mt-3">
                  Sq. Ft LED
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* VALUES */}
      <section className="py-28 bg-zinc-950 border-y border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto">

            <p className="text-green-400 uppercase tracking-[0.3em]">
              Why MIAM Horizons
            </p>

            <h2 className="text-4xl lg:text-6xl font-black mt-6">

              Built For
              <span className="block text-green-400">
                Modern Brands
              </span>

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

            {[
              {
                icon: <Eye />,
                title: "Premium Visibility",
                desc: "High-exposure roadside digital media infrastructure.",
              },
              {
                icon: <Zap />,
                title: "3D Technology",
                desc: "Modern LED and anamorphic advertising capabilities.",
              },
              {
                icon: <Building2 />,
                title: "Strong Presence",
                desc: "Deep understanding of Northeast audiences and markets.",
              },
              {
                icon: <Globe />,
                title: "Modern Advertising",
                desc: "Premium media solutions built for future-focused brands.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-black border border-white/10 rounded-[2rem] p-8 hover:border-green-400/30 transition duration-300 hover:-translate-y-2"
              >

                <div className="w-14 h-14 rounded-2xl bg-green-400/10 border border-green-400/20 flex items-center justify-center mb-6 text-green-400">

                  {item.icon}

                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-5 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-28">

        <div className="max-w-5xl mx-auto px-6">

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 p-12 lg:p-20 text-center">

            <div className="absolute inset-0 bg-green-400/10 blur-[120px]" />

            <div className="relative">

              <p className="text-green-400 uppercase tracking-[0.3em]">
                Start Advertising
              </p>

              <h2 className="text-4xl lg:text-6xl font-black mt-6 leading-tight">

                Ready To
                <span className="block text-green-400">
                  Capture Attention?
                </span>

              </h2>

              <p className="text-gray-400 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">

                Launch your campaign on premium LED billboards designed for
                modern businesses and high-impact advertising.

              </p>

              <Link to="/contact" className="group mt-10 bg-green-400 text-black px-8 py-4 rounded-full font-bold inline-flex items-center gap-3 hover:scale-105 transition duration-300">

                Contact MIAM Horizons

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />

              </Link>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default About;