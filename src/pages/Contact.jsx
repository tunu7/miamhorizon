// Contact.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Phone,
  Mail,
  MapPin,
  Send,
  Sparkles,
  Check,
} from "lucide-react";

import { useState } from "react";

import { Helmet } from "react-helmet-async";


<Helmet>
  <title>
    Contact MIAM Horizons | Billboard Advertising Agency
  </title>

  <meta
    name="description"
    content="Contact MIAM Horizons for premium digital billboard advertising, LED display campaigns, outdoor promotions, and media advertising services in Arunachal Pradesh."
  />

  <meta
    name="keywords"
    content="contact MIAM Horizons, outdoor advertising contact, LED billboard company contact"
  />

  <meta
    property="og:title"
    content="Contact MIAM Horizons"
  />

  <meta
    property="og:description"
    content="Get in touch for premium billboard advertising solutions."
  />

  <link
    rel="canonical"
    href="https://yourdomain.com/contact"
  />
</Helmet>

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    campaignType: "",
    adType: "",
    budget: "",
    duration: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const campaignOptions = [
    "Brand Awareness",
    "Product Launch",
    "Government Campaign",
    "Festival Promotion",
    "Event Promotion",
  ];

  const adTypes = [
    "2D Standard",
    "3D Anamorphic",
    "Full Day Feature",
    "Premium Campaign",
  ];

  const budgetOptions = [
    "₹10K - ₹25K",
    "₹25K - ₹50K",
    "₹50K - ₹1L",
    "₹1L+",
  ];

  const durationOptions = [
    "1 Week",
    "2 Weeks",
    "1 Month",
    "3 Months",
  ];

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleOptionSelect = (field, value) => {

    setFormData({
      ...formData,
      [field]: value,
    });

  };

  const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    setLoading(true);

    await fetch(
      "https://script.google.com/macros/s/AKfycbzw8xR8YbKfEgE3-IFZWU3qQNVawwv4OV8SCNrR8xtcVze1yXN-G0qRLRKjmgKjZ2-S/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    setSuccess(true);

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      campaignType: "",
      adType: "",
      budget: "",
      duration: "",
      message: "",
    });

  } catch (error) {

    console.log(error);

    alert("Something went wrong");

  } finally {

    setLoading(false);

  }

};

  return (
    <div className="bg-black text-white overflow-hidden min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="relative pt-36 pb-28 overflow-hidden">

        {/* BG */}
        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-500/20 blur-[140px] rounded-full" />

          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-400/10 blur-[140px] rounded-full" />

        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-3 border border-white/10 bg-zinc-900 rounded-full px-5 py-2 mb-8">

              <Sparkles
                size={16}
                className="text-green-400"
              />

              <p className="text-sm uppercase tracking-[0.2em] text-green-400">
                Contact MIAM Horizons
              </p>

            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[0.95]">

              Launch Your
              <span className="block text-green-400">
                Advertising Campaign
              </span>

            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mt-8 max-w-2xl">

              Tell us about your campaign goals and our team will help you
              create a premium outdoor advertising experience tailored to your
              audience and business objectives.

            </p>

            {/* CONTACT INFO */}
            <div className="space-y-6 mt-14">

              <div className="flex items-center gap-5">

                <div className="w-14 h-14 rounded-2xl bg-green-400/10 border border-green-400/20 flex items-center justify-center text-green-400">

                  <Phone />

                </div>

                <div>

                  <p className="text-gray-500 text-sm">
                    Phone
                  </p>

                  <h3 className="text-xl font-bold">
                    +91 96126 12290
                  </h3>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="w-14 h-14 rounded-2xl bg-green-400/10 border border-green-400/20 flex items-center justify-center text-green-400">

                  <Mail />

                </div>

                <div>

                  <p className="text-gray-500 text-sm">
                    Email
                  </p>

                  <h3 className="text-xl font-bold">
                    miampvt@gmail.com
                  </h3>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="w-14 h-14 rounded-2xl bg-green-400/10 border border-green-400/20 flex items-center justify-center text-green-400">

                  <MapPin />

                </div>

                <div>

                  <p className="text-gray-500 text-sm">
                    Location
                  </p>

                  <h3 className="text-xl font-bold">
                    Itanagar, Arunachal Pradesh
                  </h3>

                </div>

              </div>

            </div>

          </div>

          {/* FORM */}
          <div className="relative">

            <div className="absolute inset-0 bg-green-400/10 blur-[120px]" />

            <form
              onSubmit={handleSubmit}
              className="relative bg-zinc-900/80 backdrop-blur border border-white/10 rounded-[2rem] p-8 lg:p-10 space-y-8"
            >

              {/* NAME */}
              <div>

                <label className="text-sm text-gray-400">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full mt-3 bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-green-400"
                />

              </div>

              {/* COMPANY */}
              <div>

                <label className="text-sm text-gray-400">
                  Company Name
                </label>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company"
                  className="w-full mt-3 bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-green-400"
                />

              </div>

              {/* EMAIL + PHONE */}
              <div className="grid md:grid-cols-2 gap-6">

                <div>

                  <label className="text-sm text-gray-400">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    required
                    className="w-full mt-3 bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-green-400"
                  />

                </div>

                <div>

                  <label className="text-sm text-gray-400">
                    Phone
                  </label>

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    required
                    className="w-full mt-3 bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-green-400"
                  />

                </div>

              </div>

              {/* CAMPAIGN TYPE */}
              <div>

                <label className="text-sm text-gray-400">
                  Campaign Type
                </label>

                <div className="flex flex-wrap gap-4 mt-4">

                  {campaignOptions.map((option, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() =>
                        handleOptionSelect("campaignType", option)
                      }
                      className={`px-5 py-3 rounded-full border transition ${
                        formData.campaignType === option
                          ? "bg-green-400 text-black border-green-400"
                          : "border-white/10 bg-black hover:border-green-400/40"
                      }`}
                    >

                      {option}

                    </button>
                  ))}

                </div>

              </div>

              {/* AD TYPE */}
              <div>

                <label className="text-sm text-gray-400">
                  Advertising Type
                </label>

                <div className="flex flex-wrap gap-4 mt-4">

                  {adTypes.map((option, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() =>
                        handleOptionSelect("adType", option)
                      }
                      className={`px-5 py-3 rounded-full border transition ${
                        formData.adType === option
                          ? "bg-green-400 text-black border-green-400"
                          : "border-white/10 bg-black hover:border-green-400/40"
                      }`}
                    >

                      {option}

                    </button>
                  ))}

                </div>

              </div>

              {/* BUDGET */}
              <div>

                <label className="text-sm text-gray-400">
                  Budget Range
                </label>

                <div className="flex flex-wrap gap-4 mt-4">

                  {budgetOptions.map((option, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() =>
                        handleOptionSelect("budget", option)
                      }
                      className={`px-5 py-3 rounded-full border transition ${
                        formData.budget === option
                          ? "bg-green-400 text-black border-green-400"
                          : "border-white/10 bg-black hover:border-green-400/40"
                      }`}
                    >

                      {option}

                    </button>
                  ))}

                </div>

              </div>

              {/* DURATION */}
              <div>

                <label className="text-sm text-gray-400">
                  Campaign Duration
                </label>

                <div className="flex flex-wrap gap-4 mt-4">

                  {durationOptions.map((option, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() =>
                        handleOptionSelect("duration", option)
                      }
                      className={`px-5 py-3 rounded-full border transition ${
                        formData.duration === option
                          ? "bg-green-400 text-black border-green-400"
                          : "border-white/10 bg-black hover:border-green-400/40"
                      }`}
                    >

                      {option}

                    </button>
                  ))}

                </div>

              </div>

              {/* MESSAGE */}
              <div>

                <label className="text-sm text-gray-400">
                  Additional Details
                </label>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your campaign..."
                  className="w-full mt-3 bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-green-400"
                />

              </div>

              {/* SUCCESS */}
              {success && (
                <div className="bg-green-400/10 border border-green-400/30 rounded-2xl p-5 flex items-center gap-4 text-green-400">

                  <Check />

                  Lead submitted successfully.

                </div>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-400 text-black py-5 rounded-full font-black text-lg hover:scale-[1.02] transition duration-300 flex items-center justify-center gap-3"
              >

                <Send size={20} />

                {loading
                  ? "Submitting..."
                  : "Submit Campaign Inquiry"
                }

              </button>

            </form>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Contact;