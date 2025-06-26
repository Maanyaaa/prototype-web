import React from 'react';
import Link from 'next/link';
import { FiTwitter, FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { icon: <FiTwitter />, href: '#' },
    { icon: <FiInstagram />, href: '#' },
    { icon: <FiFacebook />, href: '#' },
    { icon: <FiYoutube />, href: '#' },
  ];

  const footerLinks = [
    { href: '/floor-plans', label: 'Floor Plans' },
    { href: '/team', label: 'Team' },
    { href: '/transparency', label: 'Transparency' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo and Branding */}
          <div>
            <Link href="/" className="text-2xl font-bold text-gray-800">
              <span className="text-sky-blue">G</span>
              <span className="text-blush-pink">Z</span>
              <span className="text-mint-green">.</span>
              <span className="text-butter-yellow">Homes</span>
            </Link>
            <p className="mt-2 text-gray-500">
              Building the future, together. ✨
            </p>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="font-bold text-gray-700 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 hover:text-sky-blue">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-gray-700 mb-4">Join the Convo</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-500 hover:text-white hover:bg-sky-blue p-2 rounded-full transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} GZ.Homes. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
