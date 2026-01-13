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
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-lg font-semibold font-sans text-gray-900">
              H&S Solutions
            </h2>

            <p className="mt-4 max-w-sm text-sm font-sans text-gray-900">
              Empowering businesses with intelligent, scalable, and
              future-ready digital solutions.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-900 transition hover:text-blue-600"
              >
                <FaTwitter size={20} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-900 transition hover:text-pink-500"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-900 transition hover:text-blue-700"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="#"
                aria-label="GitHub"
                className="text-gray-900 transition hover:text-gray-900"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide font-sans text-gray-900">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm font-sans">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-900 font-sans transition hover:text-blue-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide font-sans text-gray-900">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm font-sans text-gray-900">
              <li>Email: info@hssolutions.com</li>
              <li>Phone: +92 300 0000000</li>
              <li>Location: Pakistan</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gray-200" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm font-sans text-gray-900">
            © {new Date().getFullYear()} H&S Solutions. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
