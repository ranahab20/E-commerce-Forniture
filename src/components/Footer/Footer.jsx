import { useState } from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    console.log("Subscribe email:", email);
    setEmail("");
  };

  const footerLinks = [
    {
      title: "About Us",
      links: ["FAQ", "Contact", "Returns", "Blog", "Shipping"],
    },
    {
      title: "Customer Support",
      links: [
        "Affiliates",
        "Apple Pay Payments",
        "Returns",
        "Returns Policy",
        "Returns",
      ],
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: FiFacebook },
    { name: "Instagram", icon: FiInstagram },
    { name: "Twitter", icon: FiTwitter },
    { name: "LinkedIn", icon: FiLinkedin },
  ];

  return (
    <footer className="relative mt-20 overflow-hidden bg-background px-5 pb-6 pt-12 sm:px-8 lg:px-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-fuchsia-400/30 blur-[80px]" />

      <div className="relative z-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_0.8fr] lg:gap-12">
        {/* Newsletter */}
        <div>
          <a
            href="/"
            aria-label="Home"
            className="mb-5 inline-block text-3xl font-bold text-fuchsia-600"
          >
            ↻
          </a>

          <p className="mb-5 max-w-sm text-xs leading-5 text-gray-500">
            Join our newsletter to stay up to date on features and releases.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex max-w-md flex-wrap gap-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="min-w-0 flex-1 rounded-sm border border-gray-400 bg-transparent px-3 py-2 text-xs outline-none focus:border-fuchsia-500"
            />

            <button
              type="submit"
              className="rounded-full border border-gray-400 px-4 py-2 text-xs transition hover:border-fuchsia-500 hover:text-fuchsia-600"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-3 max-w-sm text-[10px] leading-4 text-gray-400">
            By subscribing, you agree to our Privacy Policy and provide consent
            to receive updates from our company.
          </p>
        </div>

        {/* Footer navigation */}
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h3 className="mb-4 text-xs font-bold">{section.title}</h3>

            <ul className="flex flex-col gap-3">
              {section.links.map((link, index) => (
                <li key={`${link}-${index}`}>
                  <a
                    href="#"
                    className="text-xs text-gray-500 transition hover:text-fuchsia-600"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social media */}
        <div>
          <h3 className="mb-4 text-xs font-bold">Follow Us</h3>

          <ul className="flex flex-col gap-3">
            {socialLinks.map(({ name, icon: Icon }) => (
              <li key={name}>
                <a
                  href="#"
                  aria-label={name}
                  className="flex items-center gap-3 text-xs text-gray-500 transition hover:text-fuchsia-600"
                >
                  <Icon size={14} />
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 mt-10 flex flex-col gap-4 border-t border-gray-200 pt-5 text-[10px] text-gray-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Furniture. All rights reserved.</p>

        <div className="flex flex-wrap gap-5">
          <a href="#" className="hover:text-black">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-black">
            Terms of Service
          </a>
          <a href="#" className="hover:text-black">
            Cookies Settings
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
