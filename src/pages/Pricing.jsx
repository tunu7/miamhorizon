import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Pricing() {

  const plans = [
    {
      title: "Starter",
      duration: "1 Week",
    },
    {
      title: "Business",
      duration: "1 Month",
    },
    {
      title: "Premium",
      duration: "Custom Campaign",
    },
  ];

  return (
    <div className="bg-black text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-32">

        <p className="text-green-400 uppercase tracking-widest">
          Pricing
        </p>

        <h1 className="text-5xl font-black mt-4 mb-16">
          Flexible Campaign Plans
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-3xl p-8 border border-white/10"
            >
              <h2 className="text-3xl font-bold">
                {plan.title}
              </h2>

              <p className="text-gray-400 mt-4">
                {plan.duration}
              </p>

              <button className="mt-8 w-full bg-green-400 text-black py-3 rounded-full font-bold">
                Enquire
              </button>

            </div>
          ))}

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Pricing;