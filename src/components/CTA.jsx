import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="py-24">

      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-zinc-900 rounded-3xl p-12 text-center">

          <h2 className="text-4xl font-black">
            Ready To Advertise?
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Launch your campaign on premium digital billboards today.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-8 bg-green-400 text-black px-8 py-4 rounded-full font-bold"
          >
            Contact Sales
          </Link>

        </div>

      </div>

    </section>
  );
}

export default CTA;