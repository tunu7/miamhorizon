import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Billboard() {
  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-32">

        <p className="text-green-400 uppercase tracking-widest">
          Billboard Inventory
        </p>

        <h1 className="text-5xl font-black mt-4">
          Premium Digital Billboard
        </h1>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          <img
            src="/showcase1.jpg"
            alt=""
            className="rounded-3xl"
          />

          <div className="space-y-6">

            <div className="bg-zinc-900 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-2">
                Location
              </h3>

              <p className="text-gray-400">
                Prime roadside visibility with heavy traffic exposure.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-2">
                Display Type
              </h3>

              <p className="text-gray-400">
                Supports premium 2D and immersive 3D creatives.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-2">
                Visibility
              </h3>

              <p className="text-gray-400">
                Visible during both day and night for maximum impressions.
              </p>
            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Billboard;