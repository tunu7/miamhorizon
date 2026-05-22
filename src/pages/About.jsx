import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="bg-black text-white">

      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-32">

        <p className="text-green-400 uppercase tracking-widest">
          About Us
        </p>

        <h1 className="text-5xl font-black mt-4">
          Building Modern Outdoor Advertising
        </h1>

        <p className="text-gray-400 text-lg mt-8 leading-relaxed">
          Miam Horizon is focused on bringing modern digital outdoor advertising
          experiences to Arunachal Pradesh through premium high-visibility LED
          billboard solutions.
        </p>

        <p className="text-gray-400 text-lg mt-6 leading-relaxed">
          We help brands, businesses, events, and campaigns capture public
          attention through strategic roadside digital advertising.
        </p>

      </div>

      <Footer />

    </div>
  );
}

export default About;