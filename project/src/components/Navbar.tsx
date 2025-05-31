import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Find Your Plan', href: '#workspace' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex">
      {/* Logo Section */}
      <div className="bg-founders-fire px-6 py-4 flex items-center min-w-[200px]">
        <Logo 
          width={40} 
          height={40} 
          color="#FFF5EE"
          className="transition-colors duration-200"
        />
        <span className="ml-2 text-2xl font-bold text-blank-slate">KOCOwork</span>
      </div>

      {/* Navigation Items */}
      <div className="hidden md:flex flex-1">
        {navLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(link.href);
            }}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-blank-slate font-medium text-lg flex items-center justify-center transition-all duration-200 transform hover:translate-y-[2px] hover:shadow-inner"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 bg-founders-fire"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-blank-slate" />
          ) : (
            <Menu className="h-6 w-6 text-blank-slate" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-blue-500 transition-transform duration-300 transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-blank-slate hover:bg-blue-600 transition-all duration-200 py-4 px-6 text-center text-lg font-medium transform hover:translate-y-[2px] hover:shadow-inner"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;