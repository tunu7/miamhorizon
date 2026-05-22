import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="bg-black text-white">

      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-32">

        <p className="text-green-400 uppercase tracking-widest">
          Contact
        </p>

        <h1 className="text-5xl font-black mt-4 mb-12">
          Start Your Campaign
        </h1>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 rounded-xl bg-zinc-900"
          />

          <input
            type="text"
            placeholder="Company"
            className="w-full p-4 rounded-xl bg-zinc-900"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-xl bg-zinc-900"
          />

          <input
            type="text"
            placeholder="Phone"
            className="w-full p-4 rounded-xl bg-zinc-900"
          />

          <textarea
            rows="5"
            placeholder="Campaign Goal"
            className="w-full p-4 rounded-xl bg-zinc-900"
          />

          <button className="w-full bg-green-400 text-black py-4 rounded-full font-bold">
            Submit Lead
          </button>

        </form>

      </div>

      <Footer />

    </div>
  );
}

export default Contact;