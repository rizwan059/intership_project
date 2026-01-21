import Link from "next/link";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Collaborators / Partners", href: "/partner" },
  { name: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-[#050B14] via-[#0A1A2F] to-[#050B14] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">

        {/*  TOP DIVIDER — SAME STYLE */}
        {/* <div className="mb-12 h-0.5 bg-linear-to-r from-cyan-200 to-blue-400" /> */}

        {/* TOP Neural Divider */}
        <div className="relative mb-20 my-12 h-0.5 mx-auto">
          <div className="h-px bg-linear-to-r from-transparent via-cyan-400/40 to-transparent" />
          <div className="absolute left-1/2 -top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_18px_5px_rgba(34,211,238,0.5)] animate-pulse" />
        </div>

        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-3 ">

          {/* Brand */}
          <div>
            {/* Logo */}
            <h2 className="text-2xl tracking-tight">

              <span className="ml-2 text-white  font-machine">
                H&amp;S Solutions
              </span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white">
              Empowering businesses with intelligent, scalable, and
              future-ready digital solutions.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              {[
                { icon: <FaTwitter />, color: "hover:text-cyan-400" },
                { icon: <FaInstagram />, color: "hover:text-pink-500" },
                { icon: <FaLinkedin />, color: "hover:text-blue-500" },
                { icon: <FaGithub />, color: "hover:text-gray-200" },
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label="Social link"
                  className={`text-white transition ${item.color}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white">
              QUICK LINKS
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition hover:text-cyan-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white">
              CONTACT
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white">
              <li>Email: info@hssolutions.com</li>
              <li>Phone: +92 300 0000000</li>
              <li>Location: Pakistan</li>
            </ul>
          </div>

        </div>

        {/* Bottom Divider */}
        {/* <div className="my-12 h-0.5 mx-auto bg-linear-to-r from-cyan-200 to-blue-400" /> */}

        {/* Neural Divider */}
        <div className="relative mb-20 my-12 h-0.5 mx-auto">
          <div className="h-px bg-linear-to-r from-transparent via-cyan-400/40 to-transparent" />
          <div className="absolute left-1/2 -top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_18px_5px_rgba(34,211,238,0.5)] animate-pulse" />
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} H&amp;S Solutions. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
