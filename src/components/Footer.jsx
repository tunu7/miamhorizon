// Footer.jsx

import { Link } from "react-router-dom";

import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {

  const quickLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Billboard",
      path: "/billboard",
    },
    {
      name: "Media",
      path: "/media",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const socialLinks = [
    {
      icon: <FaInstagram />,
      link: "https://instagram.com",
    },
    {
      icon: <FaFacebookF />,
      link: "https://facebook.com",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://linkedin.com",
    },
    {
      icon: <FaYoutube />,
      link: "https://youtube.com",
    },
  ];

  return (
    <footer className="relative border-t border-white/10 overflow-hidden bg-black">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-green-500/10 blur-[140px] rounded-full" />

        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-green-400/10 blur-[140px] rounded-full" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        {/* TOP */}
        <div className="grid lg:grid-cols-4 gap-16">

          {/* BRAND */}
          <div className="lg:col-span-2">

            <div className="flex items-center gap-4">

              {/* LOGO */}
              <div className="w-14 h-14 rounded-2xl bg-green-400/10 border border-green-400/20 flex items-center justify-center">

                <div className="w-4 h-4 bg-green-400 rounded-full" />

              </div>

              <div>

                <h2 className="text-3xl font-black tracking-tight text-white">
                  MIAM Horizons
                </h2>

                <p className="text-gray-500 text-sm uppercase tracking-[0.3em] mt-1">
                  Digital Outdoor Media
                </p>

              </div>

            </div>

            <p className="text-gray-400 text-lg leading-relaxed mt-8 max-w-xl">

              Premium LED billboard advertising solutions designed for modern
              brands, businesses, events, and campaigns seeking high-visibility
              outdoor advertising experiences.

            </p>

            {/* CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-10 bg-green-400 text-black px-7 py-4 rounded-full font-bold hover:scale-105 transition duration-300"
            >

              Start Advertising

              <ArrowUpRight size={18} />

            </Link>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-white text-xl font-bold mb-8">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-gray-400 hover:text-green-400 transition duration-300"
                >

                  {link.name}

                </Link>
              ))}

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-white text-xl font-bold mb-8">
              Contact
            </h3>

            <div className="space-y-6">

              {/* PHONE */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-green-400">

                  <Phone size={18} />

                </div>

                <div>

                  <p className="text-gray-500 text-sm">
                    Phone
                  </p>

                  <p className="text-white font-medium mt-1">
                    +91 96126 12290
                  </p>

                </div>

              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-green-400">

                  <Mail size={18} />

                </div>

                <div>

                  <p className="text-gray-500 text-sm">
                    Email
                  </p>

                  <p className="text-white font-medium mt-1">
                    miampvt@gmail.com
                  </p>

                </div>

              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-green-400">

                  <MapPin size={18} />

                </div>

                <div>

                  <p className="text-gray-500 text-sm">
                    Location
                  </p>

                  <p className="text-white font-medium mt-1">
                    Itanagar, Arunachal Pradesh
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-20 pt-10 flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* COPYRIGHT */}
          <p className="text-gray-500 text-sm text-center lg:text-left">

            © 2026 MIAM Horizons. All rights reserved.

          </p>

          {/* SOCIALS */}
          <div className="flex items-center gap-4">

            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-400/30 transition duration-300 text-lg"
              >

                {item.icon}

              </a>
            ))}

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;