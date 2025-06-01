import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Find Your Plan', href: '/#pricing' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    const [route, hash] = href.split('#');
    
    if (route === '/') {
      navigate(route);
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(`#${hash}`);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }, 500); // Increased timeout to ensure page load
      } else {
        window.scrollTo(0, 0);
      }
    } else if (route) {
      navigate(route);
      window.scrollTo(0, 0);
    } else if (hash) {
      const element = document.querySelector(`#${hash}`);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex">
      {/* Logo Section - First Quarter */}
      <div 
        onClick={handleLogoClick}
        className="w-1/4 bg-founders-fire px-6 py-1 flex items-center justify-center cursor-pointer hover:bg-founders-fire-dark transition-colors duration-200"
      >
        <Logo 
          width={70} 
          height={70} 
          color="#FFF5EE"
          className="transition-colors duration-200"
        />
        <span className="ml-2 text-4xl font-bold text-blank-slate">KOCOwork</span>
      </div>

      {/* Navigation Items - Remaining Three Quarters */}
      <div className="hidden md:flex w-3/4">
        <a
          href="/#pricing"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation('/#pricing');
          }}
          className="w-1/3 bg-blank-slate text-founders-fire font-medium text-2xl flex items-center justify-center transition-all duration-200 transform hover:translate-y-[6px] hover:shadow-inner"
        >
          Find Your Plan
        </a>
        <a
          href="/about"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation('/about');
          }}
          className="w-1/3 bg-blank-slate text-founders-fire font-medium text-2xl flex items-center justify-center transition-all duration-200 transform hover:translate-y-[6px] hover:shadow-inner"
        >
          About Us
        </a>
        <a
          href="/#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation('/#contact');
          }}
          className="w-1/3 bg-founders-fire text-blank-slate font-medium text-2xl flex items-center justify-center transition-all duration-200 transform hover:translate-y-[6px] hover:shadow-inner"
        >
          Contact Us
        </a>
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
                handleNavigation(link.href);
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