import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Media() {
  return (
    <div className="bg-black text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-32">

        <p className="text-green-400 uppercase tracking-widest">
          Media Showcase
        </p>

        <h1 className="text-5xl font-black mt-4 mb-16">
          Attention In Motion
        </h1>

        <div className="grid lg:grid-cols-2 gap-10">

          <video
            controls
            className="rounded-3xl"
          >
            <source src="/billboard.mp4" />
          </video>

          <video
            controls
            className="rounded-3xl"
          >
            <source src="/billboard2.mp4" />
          </video>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Media;