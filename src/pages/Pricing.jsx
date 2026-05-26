import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

<Helmet>
  <title>
    Billboard Advertising Pricing | MIAM Horizons
  </title>

  <meta
    name="description"
    content="Get affordable and premium pricing for LED billboard advertising, outdoor campaigns, and digital media promotions in Arunachal Pradesh."
  />

  <meta
    name="keywords"
    content="billboard pricing, LED advertising cost, outdoor advertising pricing, digital billboard rates"
  />

  <meta
    property="og:title"
    content="Advertising Pricing | MIAM Horizons"
  />

  <meta
    property="og:description"
    content="Affordable premium outdoor billboard advertising solutions."
  />

  <link
    rel="canonical"
    href="https://yourdomain.com/pricing"
  />
</Helmet>

function Pricing() {
  const standardRates = [
    {
      slot: "Peak Prime Time",
      hours: "10 Hrs",
      rate: "₹65/sec",
      day10: "₹650",
      day30: "₹1,950",
      monthly10: "₹14,000",
      monthly30: "₹42,000",
    },
    {
      slot: "Standard Daytime",
      hours: "6 Hrs",
      rate: "₹40/sec",
      day10: "₹400",
      day30: "₹1,200",
      monthly10: "₹8,000",
      monthly30: "₹24,000",
    },
    {
      slot: "Late Evening",
      hours: "2 Hrs",
      rate: "₹25/sec",
      day10: "₹250",
      day30: "₹750",
      monthly10: "₹5,500",
      monthly30: "₹16,500",
    },
    {
      slot: "Full Day",
      hours: "18 Hrs",
      rate: "₹55 avg",
      day10: "₹1,200",
      day30: "₹3,600",
      monthly10: "₹18,000",
      monthly30: "₹54,000",
    },
  ];

  const anamorphicRates = [
    {
      mode: "Standard Loop Integration",
      slot: "Peak Prime Time",
      rate: "₹200/sec",
      day15: "₹3,000",
      day30: "₹6,000",
      monthly15: "₹55,000",
      monthly30: "₹90,000",
    },
    {
      mode: "Standard Loop Integration",
      slot: "Full Day",
      rate: "₹165 avg",
      day15: "₹5,500",
      day30: "₹10,500",
      monthly15: "₹75,000",
      monthly30: "₹1,20,000",
    },
    {
      mode: "Feature Showcase",
      slot: "Peak Prime Feature",
      rate: "₹300/sec",
      day15: "₹4,500",
      day30: "₹9,000",
      monthly15: "₹90,000",
      monthly30: "₹1,50,000",
    },
    {
      mode: "Feature Showcase",
      slot: "Full Day Feature",
      rate: "₹250 avg",
      day15: "₹8,000",
      day30: "₹16,000",
      monthly15: "₹1,20,000",
      monthly30: "₹2,00,000",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="pt-36 pb-20 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <p className="text-green-400 uppercase tracking-[0.3em] mb-4">
            Master Rate Card — April 2026
          </p>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight">
            Digital Billboard
            <span className="block text-green-400">
              Advertising Pricing
            </span>
          </h1>

          <p className="text-gray-400 text-lg mt-8 max-w-3xl leading-relaxed">
            Premium 240 Sq. Ft. Full-Color LED outdoor screen located in
            Itanagar, Arunachal Pradesh delivering approximately
            15,000–25,000 daily impressions.
          </p>

          {/* STATS */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">

            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6">
              <p className="text-gray-500 text-sm uppercase">
                Screen Size
              </p>

              <h3 className="text-2xl font-bold mt-3">
                240 Sq. Ft.
              </h3>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6">
              <p className="text-gray-500 text-sm uppercase">
                Daily Audience
              </p>

              <h3 className="text-2xl font-bold mt-3">
                15K–25K
              </h3>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6">
              <p className="text-gray-500 text-sm uppercase">
                Ad Loop
              </p>

              <h3 className="text-2xl font-bold mt-3">
                6 × 10-sec
              </h3>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6">
              <p className="text-gray-500 text-sm uppercase">
                Daily Plays
              </p>

              <h3 className="text-2xl font-bold mt-3">
                ~1,080
              </h3>
            </div>

          </div>

        </div>

      </section>

      {/* 2D PRICING */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-12">

            <p className="text-green-400 uppercase tracking-[0.3em]">
              2D Standard Advertising
            </p>

            <h2 className="text-4xl lg:text-5xl font-black mt-4">
              Standard LED Advertising Rates
            </h2>

          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/10">

            <table className="w-full min-w-[1000px]">

              <thead className="bg-zinc-900">
                <tr className="text-left">

                  <th className="p-6">Time Slot</th>
                  <th className="p-6">Hours</th>
                  <th className="p-6">Rate/Sec</th>
                  <th className="p-6">10-sec/Day</th>
                  <th className="p-6">30-sec/Day</th>
                  <th className="p-6">Monthly 10-sec</th>
                  <th className="p-6">Monthly 30-sec</th>

                </tr>
              </thead>

              <tbody>

                {standardRates.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-white/10"
                  >

                    <td className="p-6 font-semibold">
                      {item.slot}
                    </td>

                    <td className="p-6 text-gray-400">
                      {item.hours}
                    </td>

                    <td className="p-6 text-green-400">
                      {item.rate}
                    </td>

                    <td className="p-6">
                      {item.day10}
                    </td>

                    <td className="p-6">
                      {item.day30}
                    </td>

                    <td className="p-6">
                      {item.monthly10}
                    </td>

                    <td className="p-6 font-bold">
                      {item.monthly30}
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* 3D PRICING */}
      <section className="py-24 bg-zinc-950">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-12">

            <p className="text-green-400 uppercase tracking-[0.3em]">
              3D Anamorphic Advertising
            </p>

            <h2 className="text-4xl lg:text-5xl font-black mt-4">
              First 3D Billboard In Arunachal Pradesh
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {anamorphicRates.map((item, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 rounded-3xl p-8"
              >

                <p className="text-green-400 uppercase text-sm tracking-widest">
                  {item.mode}
                </p>

                <h3 className="text-3xl font-bold mt-4">
                  {item.slot}
                </h3>

                <p className="text-gray-400 mt-4">
                  Premium immersive 3D advertising experience.
                </p>

                <div className="space-y-4 mt-8">

                  <div className="flex justify-between">
                    <span className="text-gray-500">
                      Rate / Sec
                    </span>

                    <span className="font-bold">
                      {item.rate}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">
                      15-sec / Day
                    </span>

                    <span>
                      {item.day15}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">
                      30-sec / Day
                    </span>

                    <span>
                      {item.day30}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">
                      Monthly 15-sec
                    </span>

                    <span>
                      {item.monthly15}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">
                      Monthly 30-sec
                    </span>

                    <span className="text-green-400 font-bold">
                      {item.monthly30}
                    </span>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* SPECIAL RATES */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-12">

            <p className="text-green-400 uppercase tracking-[0.3em]">
              Special Campaigns
            </p>

            <h2 className="text-4xl lg:text-5xl font-black mt-4">
              Events & Partner Opportunities
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold">
                Festival Campaigns
              </h3>

              <p className="text-green-400 mt-4">
                ₹1,500–₹2,000/day
              </p>

              <p className="text-gray-400 mt-4">
                Diwali, Christmas, New Year campaigns.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold">
                Election Campaigns
              </h3>

              <p className="text-green-400 mt-4">
                ₹3,000–₹5,000/day
              </p>

              <p className="text-gray-400 mt-4">
                State and national political advertising.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold">
                Product Launches
              </h3>

              <p className="text-green-400 mt-4">
                ₹15K–₹25K/day
              </p>

              <p className="text-gray-400 mt-4">
                Dedicated launch visibility campaigns.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold">
                Government Awareness
              </h3>

              <p className="text-green-400 mt-4">
                ₹10K–₹20K/week
              </p>

              <p className="text-gray-400 mt-4">
                Public health and awareness drives.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold">
                Creator Partner
              </h3>

              <p className="text-green-400 mt-4">
                ₹5K–₹60K/project
              </p>

              <p className="text-gray-400 mt-4">
                Production fees + booking commissions.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold">
                Studio Partner
              </h3>

              <p className="text-green-400 mt-4">
                ₹10K–₹1.5L/project
              </p>

              <p className="text-gray-400 mt-4">
                Production + screen bundled campaigns.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CONTENT PRODUCTION */}
      <section className="py-24 bg-zinc-950">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="text-green-400 uppercase tracking-[0.3em]">
            3D Content Production
          </p>

          <h2 className="text-4xl lg:text-6xl font-black mt-4 leading-tight">
            Need Ad Creative Production?
          </h2>

          <p className="text-gray-400 text-lg mt-8 leading-relaxed">
            We also help brands create premium billboard creatives and
            anamorphic 3D advertising content.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-black border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold">
                Basic 2D
              </h3>

              <p className="text-green-400 text-3xl font-black mt-4">
                ₹5K–₹30K
              </p>
            </div>

            <div className="bg-black border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold">
                Animated 3D
              </h3>

              <p className="text-green-400 text-3xl font-black mt-4">
                ₹35K–₹60K
              </p>
            </div>

            <div className="bg-black border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold">
                CGI 3D
              </h3>

              <p className="text-green-400 text-3xl font-black mt-4">
                ₹80K–₹1.5L
              </p>
            </div>

          </div>
          <Link
          to="/contact"
             className="mt-16 bg-green-400 text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition">
            Book Your Slot 
          </Link>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Pricing;