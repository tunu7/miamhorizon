// Billboard.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  MapPin,
  Monitor,
  Eye,
  Zap,
  BarChart3,
  Clock3,
  Layers3,
  ScreenShare,
} from "lucide-react";

function Billboard() {

  const billboardImages = [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop",
  ];

  return (
    <div className="bg-black text-white overflow-hidden min-h-screen">

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

          {/* TOP */}
          <div className="max-w-5xl">

            <p className="text-green-400 uppercase tracking-[0.3em]">
              Billboard Infrastructure
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black leading-[0.95] mt-6">

              Premium
              <span className="block text-green-400">
                Digital Billboard
              </span>

              Built For Maximum Visibility

            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mt-8 max-w-3xl">

              High-impact LED outdoor advertising infrastructure engineered
              for premium roadside visibility, immersive 3D anamorphic
              experiences, and large-scale audience engagement in Arunachal
              Pradesh.

            </p>

          </div>

          {/* HERO IMAGE */}
          <div className="relative mt-20">

            <div className="absolute inset-0 bg-green-400/10 blur-[120px]" />

            <div className="relative transform-gpu hover:rotate-y-3 hover:-rotate-x-2 transition duration-700">

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                alt="Billboard"
                className="rounded-[2rem] border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.8)] w-full object-cover max-h-[750px]"
              />

            </div>

            {/* FLOATING STATS */}
            <div className="absolute top-8 left-8 bg-zinc-900/90 backdrop-blur border border-white/10 rounded-3xl p-6">

              <p className="text-gray-500 text-sm uppercase">
                Daily Reach
              </p>

              <h3 className="text-3xl font-black text-green-400 mt-2">
                25K+
              </h3>

            </div>

            <div className="absolute bottom-8 right-8 bg-zinc-900/90 backdrop-blur border border-white/10 rounded-3xl p-6">

              <p className="text-gray-500 text-sm uppercase">
                Display Type
              </p>

              <h3 className="text-3xl font-black text-green-400 mt-2">
                2D + 3D
              </h3>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="py-28 border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto">

            <p className="text-green-400 uppercase tracking-[0.3em]">
              Billboard Advantages
            </p>

            <h2 className="text-4xl lg:text-6xl font-black mt-6">

              Designed For
              <span className="block text-green-400">
                Real Attention
              </span>

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

            {[
              {
                icon: <MapPin />,
                title: "Prime Location",
                desc: "Strategically positioned in high-traffic areas for maximum roadside visibility.",
              },
              {
                icon: <Zap />,
                title: "3D Anamorphic",
                desc: "Immersive billboard experiences engineered for modern campaigns.",
              },
              {
                icon: <Eye />,
                title: "Massive Reach",
                desc: "15,000–25,000 daily audience impressions across key routes.",
              },
              {
                icon: <Monitor />,
                title: "Modern LED Display",
                desc: "High-brightness premium LED display optimized for all conditions.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-zinc-900/70 backdrop-blur border border-white/10 rounded-[2rem] p-8 hover:border-green-400/30 transition duration-300 hover:-translate-y-2"
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

      {/* GALLERY */}
      <section className="py-28 bg-zinc-950 border-y border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="text-green-400 uppercase tracking-[0.3em]">
              Billboard Showcase
            </p>

            <h2 className="text-4xl lg:text-6xl font-black mt-6">

              Real Outdoor
              <span className="block text-green-400">
                Advertising Impact
              </span>

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-20">

            {billboardImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10"
              >

                <img
                  src={image}
                  alt="Billboard"
                  className="w-full h-[450px] object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* LIVE VIDEO */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="text-green-400 uppercase tracking-[0.3em]">
              Billboard Media
            </p>

            <h2 className="text-4xl lg:text-6xl font-black mt-6">

              Advertising
              <span className="block text-green-400">
                In Motion
              </span>

            </h2>

          </div>

          <div className="relative mt-20">

            <div className="absolute inset-0 bg-green-400/10 blur-[120px]" />

            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="relative rounded-[2rem] border border-white/10 w-full"
            >

              <source
                src="https://player.vimeo.com/external/434045526.sd.mp4?s=2f4d9f5e89a7bb58f7e6b3f1e3cfdcb8b3df3a71&profile_id=139&oauth2_token_id=57447761"
                type="video/mp4"
              />

            </video>

          </div>

        </div>

      </section>

      {/* TECHNICAL INFO */}
      <section className="py-28 bg-zinc-950 border-y border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="text-green-400 uppercase tracking-[0.3em]">
              Technical Specifications
            </p>

            <h2 className="text-4xl lg:text-6xl font-black mt-6">

              Billboard
              <span className="block text-green-400">
                Information
              </span>

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                icon: <ScreenShare />,
                label: "Screen Size",
                value: "240 Sq. Ft.",
              },
              {
                icon: <Clock3 />,
                label: "Runtime",
                value: "18 Hours",
              },
              {
                icon: <BarChart3 />,
                label: "Daily Plays",
                value: "~1,080",
              },
              {
                icon: <Layers3 />,
                label: "Format",
                value: "2D + 3D",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 rounded-[2rem] p-8"
              >

                <div className="w-14 h-14 rounded-2xl bg-green-400/10 border border-green-400/20 flex items-center justify-center text-green-400 mb-6">

                  {item.icon}

                </div>

                <p className="text-gray-500 uppercase text-sm">
                  {item.label}
                </p>

                <h3 className="text-3xl font-black text-green-400 mt-4">
                  {item.value}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Billboard;