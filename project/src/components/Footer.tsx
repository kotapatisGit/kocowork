import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-focus-black text-blank-slate">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Logo width={28} height={28} color="#FFF5EE" />
              <span className="ml-2 text-2xl font-bold text-blank-slate font-darker">KOCOwork</span>
            </div>
            <p className="mb-4 text-blank-slate opacity-80">
              Premium flexible workspaces designed for professionals, entrepreneurs, and growing businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blank-slate opacity-80 hover:text-founders-fire transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blank-slate opacity-80 hover:text-founders-fire transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blank-slate opacity-80 hover:text-founders-fire transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-blank-slate opacity-80 hover:text-founders-fire transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-blank-slate mb-4 font-darker">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Workspace Plans', href: '#workspace' },
                { name: 'Virtual Office', href: '#virtual' },
                { name: 'Contact Us', href: '#contact' },
                { name: 'Terms & Conditions', href: '#' },
                { name: 'Privacy Policy', href: '#' },
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-blank-slate opacity-80 hover:text-founders-fire transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-blank-slate mb-4 font-darker">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-founders-fire mr-3 mt-1" />
                <span className="text-blank-slate opacity-80">123 Business Avenue, Financial District, San Francisco, CA 94111</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-founders-fire mr-3" />
                <span className="text-blank-slate opacity-80">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-founders-fire mr-3" />
                <span className="text-blank-slate opacity-80">info@kocowork.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-blank-slate mb-4 font-darker">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-founders-fire mr-3 mt-1" />
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p className="text-blank-slate opacity-80">7:00 AM - 9:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-founders-fire mr-3 mt-1" />
                <div>
                  <p className="font-medium">Saturday</p>
                  <p className="text-blank-slate opacity-80">9:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-founders-fire mr-3 mt-1" />
                <div>
                  <p className="font-medium">Sunday</p>
                  <p className="text-blank-slate opacity-80">Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-blank-slate opacity-80">
          <p>© {new Date().getFullYear()} KOCOwork. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;