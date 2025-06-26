import React from 'react';
import Link from 'next/link';

const Header = () => {
  const navLinks = [
    { href: '/floor-plans', label: 'Floor Plans' },
    { href: '/team', label: 'Team' },
    { href: '/transparency', label: 'Transparency' },
    { href: '/updates', label: 'Updates' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold text-gray-800">
          <span className="text-sky-blue">G</span>
          <span className="text-blush-pink">Z</span>
          <span className="text-mint-green">.</span>
          <span className="text-butter-yellow">Homes</span>
        </Link>
        <ul className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-600 font-semibold transition hover:text-sky-blue"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="hidden md:block rounded-full bg-lavender px-6 py-2 font-bold text-white transition hover:scale-105">
          Get in Touch
        </button>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl">
          {/* Placeholder for a fun, rounded menu icon */}
          <span>☰</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
