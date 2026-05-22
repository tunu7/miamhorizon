import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

function Home() {
  return (
    <div className="bg-black text-white">

      <Navbar />

      <section className="min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-green-400 uppercase tracking-widest mb-4">
              Premium Outdoor Advertising
            </p>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              High-Visibility
              <span className="block text-green-400">
                Digital Billboard Advertising
              </span>
              in Arunachal Pradesh
            </h1>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              Premium 2D & 3D outdoor advertising solutions for modern brands,
              businesses, events, and campaigns.
            </p>

          </div>

          <div>

            <img
              src="/hero.jpg"
              alt="billboard"
              className="rounded-3xl"
            />

          </div>

        </div>

      </section>

      <CTA />
      <Footer />

    </div>
  );
}

export default Home;