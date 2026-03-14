'use client';

import Image from 'next/image';
import Link from 'next/link';

const footerLinks = [
  {
    title: 'Brand',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/journal', label: 'Journal' },
      { href: '/partnerships', label: 'Partnerships' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { href: '/shop', label: 'Shop' },
      { href: '/locations', label: 'Locations' },
    ],
  },
  {
    title: 'Products',
    links: [
      { href: '/shop/ethiopian-yirgacheffe', label: 'Ethiopian Yirgacheffe' },
      { href: '/shop/colombian-supremo', label: 'Colombian Supremo' },
      { href: '/shop/sumatra-mandheling', label: 'Sumatra Mandheling' },
      { href: '/shop/guatemala-antigua', label: 'Guatemala Antigua' },
      { href: '/shop/brazilian-santos', label: 'Brazilian Santos' },
      { href: '/shop/kenyan-aa', label: 'Kenyan AA' },
    ],
  },
];

const socialLinks = [
  { href: 'https://instagram.com/doubledosecoffee', label: 'Instagram' },
  { href: 'https://facebook.com/doubledosecoffee', label: 'Facebook' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {/* Brand Column */}
          <div>
            <div className="mb-5">
              <Image
                src="/double-dose-logo.png"
                alt="Double Dose Coffee"
                width={140}
                height={48}
                className="h-8 w-auto invert"
              />
            </div>
            <p className="text-sm leading-relaxed text-stone-500 mb-5">
              Crafting exceptional coffee experiences since 2024. Each bean tells a story of origin,
              passion, and dedication to the art of coffee.
            </p>
            <div className="flex gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-stone-500 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links Columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-serif text-sm uppercase tracking-widest text-stone-300 mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone-500 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-stone-800 pt-10 mb-10">
          <h3 className="font-serif text-xl text-white mb-2">Stay Updated</h3>
          <p className="text-sm text-stone-500 mb-5">New roasts, brewing tips, and exclusive offers.</p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
            <label htmlFor="newsletter-email-footer" className="sr-only">Email address</label>
            <input
              id="newsletter-email-footer"
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-stone-800 border border-stone-700 rounded px-4 py-2.5 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-accent transition-colors duration-200"
              required
            />
            <button
              type="submit"
              className="bg-accent text-white px-6 py-2.5 text-sm font-medium rounded hover:bg-accent-light transition-colors duration-200 cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Copyright */}
        <div className="border-t border-stone-800 pt-8 text-center">
          <p className="text-xs text-stone-600 tracking-wide">
            &copy; {currentYear} Double Dose Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
