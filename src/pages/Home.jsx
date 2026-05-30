import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Play,
  Sparkles,
  Monitor,
  Eye,
  Building2,
  Zap,
} from "lucide-react";
import { Helmet } from "react-helmet-async";


function Home() {

  const galleryImages = [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop",
  ];

  return (
    <>
    

<Helmet>
  <title>
    MIAM Horizons | Premium Digital Billboard Advertising
  </title>

  <meta
    name="description"
    content="Premium LED billboard advertising solutions in Arunachal Pradesh delivering high-visibility outdoor advertising campaigns for businesses, brands, events, and government projects."
  />

  <meta
    name="keywords"
    content="LED billboard Arunachal Pradesh, outdoor advertising, digital billboard, 3D billboard advertising"
  />

  <link
    rel="canonical"
    href="https://miamhorizon.com/"
  />

  <meta
    property="og:title"
    content="MIAM Horizons"
  />

  <meta
    property="og:description"
    content="Premium outdoor LED advertising solutions in Arunachal Pradesh."
  />

  <meta
    property="og:image"
    content="https://miamhorizon.com/og-image.jpg"
  />

  <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "AdvertisingAgency",
  "name": "MIAM Horizons",
  "url": "https://miamhorizon.com",
  "logo": "https://miamhorizon.com/miamhorizonlogo.jpeg",
  "description": "Premium digital billboard advertising solutions in Arunachal Pradesh",
  "areaServed": "Arunachal Pradesh"
})}
</script>
</Helmet>
   
    <div className="bg-black text-white overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">

        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">

          {/* GLOW */}
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-500/20 blur-[140px] rounded-full animate-pulse" />

          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-400/10 blur-[140px] rounded-full animate-pulse" />

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

        <div className="relative max-w-7xl mx-auto px-6 pt-32 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            {/* TAG */}
            <div className="inline-flex items-center gap-3 border border-white/10 bg-zinc-900/80 backdrop-blur rounded-full px-5 py-2 mb-8">

              <Sparkles
                size={16}
                className="text-green-400"
              />

              <p className="text-green-400 uppercase tracking-[0.35em] text-sm font-semibold">
                Premium Outdoor Advertising
              </p>

            </div>

            {/* TITLE */}
            <h1 className="text-5xl md:text-6xl lg:text-[7rem] font-extrabold leading-[0.9] tracking-[-0.04em]">

              Digital
              <span className="block text-green-400">
                Billboard
              </span>

              Advertising
              <span className="block">
                That Commands Attention
              </span>

            </h1>

            {/* DESC */}
            <p className="text-zinc-400 text-xl leading-[1.9] mt-8 max-w-2xl font-light tracking-wide">

              Premium LED outdoor advertising solutions in Arunachal Pradesh
              delivering high-visibility 2D and immersive 3D anamorphic
              campaigns for brands, businesses, government projects, creators,
              and events.

            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/contact"
                className="group bg-green-400 text-black px-8 py-4 rounded-full font-semibold tracking-wide flex items-center gap-3 hover:scale-105 transition duration-300"
              >

                Book Advertising

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />

              </Link>

              <Link
                to="/media"
                className="border border-white/10 bg-zinc-900/80 backdrop-blur px-8 py-4 rounded-full flex items-center gap-3 hover:border-green-400/30 transition font-medium tracking-wide"
              >

                <Play size={18} />

                Watch Showcase

              </Link>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">

              {[
                {
                  value: "25K+",
                  label: "Daily Impressions",
                },
                {
                  value: "240",
                  label: "Sq. Ft LED",
                },
                {
                  value: "18 Hrs",
                  label: "Daily Runtime",
                },
                {
                  value: "1080+",
                  label: "Ad Plays/Day",
                },
              ].map((item, index) => (
                <div key={index}>

                  <h3 className="text-4xl lg:text-5xl font-extrabold text-green-400 tracking-tight">
                    {item.value}
                  </h3>

                  <p className="text-zinc-500 text-sm mt-3 uppercase tracking-[0.18em]">
                    {item.label}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative perspective-[1200px]">

            {/* GLOW */}
            <div className="absolute inset-0 bg-green-400/20 blur-[120px] rounded-full" />

            {/* IMAGE */}
            <div className="relative transform-gpu hover:rotate-y-6 hover:-rotate-x-2 transition duration-700">

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                alt="Billboard"
                className="rounded-[2rem] border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.8)] object-cover"
              />

            </div>

            {/* FLOATING CARD */}
            <div className="absolute top-10 -left-10 bg-zinc-900/90 backdrop-blur border border-white/10 rounded-3xl p-6 shadow-2xl">

              <p className="text-zinc-500 text-sm uppercase tracking-[0.18em]">
                Location
              </p>

              <h3 className="text-2xl font-bold mt-2 tracking-tight">
                Itanagar, AP
              </h3>

            </div>

            {/* FLOATING CARD */}
            <div className="absolute bottom-[-20px] right-[-20px] bg-zinc-900/90 backdrop-blur border border-white/10 rounded-3xl p-6 shadow-2xl">

              <p className="text-zinc-500 text-sm uppercase tracking-[0.18em]">
                Display Type
              </p>

              <h3 className="text-2xl font-bold mt-2 tracking-tight text-green-400">
                2D + 3D LED
              </h3>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="py-28 border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto">

            <p className="text-green-400 uppercase tracking-[0.35em] text-sm font-semibold">
              Why Advertise With Us
            </p>

            <h2 className="text-4xl lg:text-6xl font-extrabold mt-6 leading-[1] tracking-[-0.03em]">

              Built For
              <span className="block text-green-400">
                Maximum Visibility
              </span>

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

            {[
              {
                icon: <Eye />,
                title: "Prime Visibility",
                desc: "Strategically positioned for high traffic exposure and attention.",
              },
              {
                icon: <Zap />,
                title: "3D Anamorphic",
                desc: "Immersive next-generation outdoor advertising experiences.",
              },
              {
                icon: <Building2 />,
                title: "Premium Audience",
                desc: "Reach consumers, businesses, tourists, and decision makers.",
              },
              {
                icon: <Monitor />,
                title: "Modern LED Display",
                desc: "High-brightness display optimized for day and night viewing.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-zinc-900/70 backdrop-blur border border-white/10 rounded-[2rem] p-8 hover:border-green-400/30 transition duration-300 hover:-translate-y-2"
              >

                <div className="w-14 h-14 rounded-2xl bg-green-400/10 border border-green-400/20 flex items-center justify-center mb-6 text-green-400">

                  {item.icon}

                </div>

                <h3 className="text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>

                <p className="text-zinc-400 mt-5 leading-8 font-light">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* LIVE VIDEO */}
      <section className="py-28 bg-zinc-950 border-y border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="text-green-400 uppercase tracking-[0.35em] text-sm font-semibold">
              Media Showcase
            </p>

            <h2 className="text-4xl lg:text-6xl font-extrabold mt-6 leading-[1] tracking-[-0.03em]">

              Advertising
              <span className="block text-green-400">
                In Motion
              </span>

            </h2>

          </div>

          <div className="mt-20 relative">

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

      {/* GALLERY */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="text-green-400 uppercase tracking-[0.35em] text-sm font-semibold">
              Billboard Gallery
            </p>

            <h2 className="text-4xl lg:text-6xl font-extrabold mt-6 leading-[1] tracking-[-0.03em]">

              Real-World
              <span className="block text-green-400">
                Advertising Impact
              </span>

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900"
              >

                <img
                  src={image}
                  alt=""
                  className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* INFO SECTION */}
      <section className="py-28 bg-zinc-950 border-y border-white/10">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            <p className="text-green-400 uppercase tracking-[0.35em] text-sm font-semibold">
              Billboard Information
            </p>

            <h2 className="text-4xl lg:text-6xl font-extrabold mt-6 leading-[1] tracking-[-0.03em]">

              Built For
              <span className="block text-green-400">
                Serious Brand Visibility
              </span>

            </h2>

            <p className="text-zinc-400 text-xl leading-[1.9] mt-8 font-light tracking-wide">

              Designed for modern advertising campaigns with premium roadside
              visibility, immersive digital experiences, and continuous
              audience engagement.

            </p>

          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-6">

            {[
              {
                value: "6",
                label: "Slots Per Loop",
              },
              {
                value: "60s",
                label: "Loop Duration",
              },
              {
                value: "2D/3D",
                label: "Display Type",
              },
              {
                value: "APR 2026",
                label: "Rate Card",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 rounded-[2rem] p-8"
              >

                <h3 className="text-4xl font-extrabold text-green-400 tracking-tight">
                  {item.value}
                </h3>

                <p className="text-zinc-500 mt-3 uppercase tracking-[0.18em] text-sm">
                  {item.label}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      <CTA />
      <Footer />

    </div>

     </>

  );
}

export default Home;