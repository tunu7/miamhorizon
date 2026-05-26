// Media.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Play,
  Monitor,
  Eye,
  Video,
} from "lucide-react";
import { Helmet } from "react-helmet-async";


<Helmet>
  <title>
    Billboard Campaign Gallery | MIAM Horizons
  </title>

  <meta
    name="description"
    content="View premium LED billboard campaigns, digital outdoor advertising projects, and creative media displays by MIAM Horizons."
  />

  <meta
    name="keywords"
    content="billboard gallery, advertising campaigns, outdoor media projects, LED display gallery"
  />

  <meta
    property="og:title"
    content="Campaign Gallery | MIAM Horizons"
  />

  <meta
    property="og:description"
    content="Explore our premium billboard advertising campaigns and digital displays."
  />

  <link
    rel="canonical"
    href="https://yourdomain.com/media"
  />
</Helmet>

function Media() {

  const mediaImages = [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
  ];

  const videos = [
    "https://player.vimeo.com/external/434045526.sd.mp4?s=2f4d9f5e89a7bb58f7e6b3f1e3cfdcb8b3df3a71&profile_id=139&oauth2_token_id=57447761",

    "https://player.vimeo.com/external/371433846.sd.mp4?s=2366f9c179f1dc93b4bc1d651d81d77ec2a3f8b4&profile_id=139&oauth2_token_id=57447761",
  ];

  return (
    <div className="bg-black text-white overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative pt-36 pb-32 overflow-hidden">

        {/* BG */}
        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-500/20 blur-[140px] rounded-full" />

          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-400/10 blur-[140px] rounded-full" />

        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">

          <p className="text-green-400 uppercase tracking-[0.3em]">
            Media Showcase
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mt-6 leading-[0.95]">

            Advertising
            <span className="block text-green-400">
              In Motion
            </span>

          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mt-10 max-w-3xl mx-auto">

            Explore premium billboard visuals, live advertising footage,
            immersive 3D media experiences, and real-world digital campaign
            impact.

          </p>

        </div>

      </section>

      {/* VIDEOS */}
      <section className="pb-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-10">

            {videos.map((video, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900"
              >

                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                >

                  <source
                    src={video}
                    type="video/mp4"
                  />

                </video>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="py-28 bg-zinc-950 border-y border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                icon: <Monitor />,
                value: "240",
                label: "Sq. Ft Display",
              },
              {
                icon: <Eye />,
                value: "25K+",
                label: "Daily Reach",
              },
              {
                icon: <Video />,
                value: "2D/3D",
                label: "Content Type",
              },
              {
                icon: <Play />,
                value: "1080+",
                label: "Daily Plays",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 rounded-[2rem] p-8"
              >

                <div className="w-14 h-14 rounded-2xl bg-green-400/10 border border-green-400/20 flex items-center justify-center text-green-400 mb-6">

                  {item.icon}

                </div>

                <h3 className="text-4xl font-black text-green-400">
                  {item.value}
                </h3>

                <p className="text-gray-500 mt-3">
                  {item.label}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* GALLERY */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="text-green-400 uppercase tracking-[0.3em]">
              Media Gallery
            </p>

            <h2 className="text-4xl lg:text-6xl font-black mt-6">

              Real Campaign
              <span className="block text-green-400">
                Visibility
              </span>

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            {mediaImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10"
              >

                <img
                  src={image}
                  alt="media"
                  className="w-full h-[400px] object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              </div>
            ))}

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Media;