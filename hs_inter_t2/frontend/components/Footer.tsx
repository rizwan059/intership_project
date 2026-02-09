import Link from "next/link";
import {
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
    <footer className="bg-gradient-to-br from-black via-black to-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-6">

        {/* TOP Divider */}
        <div className="relative my-6 h-0.5 mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />
        </div>

        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-2xl tracking-tight font-semibold">
              H&amp;S Solutions
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white">
              Empowering businesses with intelligent, scalable, and
              future-ready digital solutions.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              {[
                { icon: <FaInstagram />, href :"https://www.instagram.com/hns.solutions?igsh=MWpremdpNWt0ejZtbQ==",  color: "hover:text-[#0D3B66]" },
                { icon: <FaLinkedin />, href :"https://www.linkedin.com/company/h-s-solutions-biz/", color: "hover:text-[#0D3B66]" },
                { icon: <FaGithub />, href :"https://github.com/azwadev04",  color: "hover:text-[#0D3B66] " },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Social link"
                  className={`text-white hover:[#0D3B66] transition ${item.color}`}
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
                    className="text-whitetransition hover:text-cyan-300"
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
              <li>Email: hssolutions.bizz@gmail.com</li>
              <li>Phone: +92 328 4429947</li>
              <li>Location: 235-1125 Dundas Street East Mississauga ON L4Y 2C4, Mississauga, CA</li>
            </ul>
          </div>

        </div>

        {/* Bottom Divider */}
        <div className="relative my-8 h-0.5 mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row text-sm text-white">
          <p>
            © {new Date().getFullYear()} H&amp;S Solutions. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
