import React from 'react';

const Footer = () => {
  return (
    <footer className="relative w-full border-t border-red-500/20 bg-black py-10 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_100%,rgba(239,68,68,0.15),transparent_40%)]" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="text-sm text-gray-300">
          © {new Date().getFullYear()} Neon Momentum — Social Media Marketing Agency
        </div>
        <nav className="flex items-center gap-6 text-sm text-gray-300">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
