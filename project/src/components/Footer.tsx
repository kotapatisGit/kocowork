import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Twitter, Linkedin, Facebook, Youtube } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-focus-black text-blank-slate">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
          {/* Company Info Section */}
          <div className="space-y-6 md:flex-1">
            <div className="flex items-center">
              <Logo color="#FFF5EE" />
              <span className="ml-3 text-2xl lg:text-3xl xl:text-4xl font-bold text-blank-slate font-darker tracking-tight">KOCOwork</span>
            </div>
            <p className="text-blank-slate/80 text-md lg:text-xl xl:text-2xl leading-relaxed max-w-sm">
              Premium flexible workspaces designed for professionals, entrepreneurs, and growing businesses.
            </p>
            <div className="flex items-center space-x-5 pt-2">
              <a href="https://www.facebook.com/share/1b2ZCrEVHn/?mibextid=wwXIfr" 
                className="text-blank-slate/70 hover:text-founders-fire transform hover:scale-110 transition-all duration-300">
                <Facebook className="h-5 w-5 lg:h-8 lg:w-8 xl:h-10 xl:w-10" />
              </a>
              <a href="https://x.com/kocowork?s=21&t=tCseW9jkqBflh_N3ZOrvxA" 
                className="text-blank-slate/70 hover:text-founders-fire transform hover:scale-110 transition-all duration-300">
                <Twitter className="h-5 w-5 lg:h-8 lg:w-8 xl:h-10 xl:w-10" />
              </a>
              <a href="https://www.instagram.com/kocowork.in?igsh=cm1rZnd6cmJncWRx" 
                className="text-blank-slate/70 hover:text-founders-fire transform hover:scale-110 transition-all duration-300">
                <Instagram className="h-5 w-5 lg:h-8 lg:w-8 xl:h-10 xl:w-10" />
              </a>
              <a href="https://www.linkedin.com/company/106527623/admin/dashboard" 
                className="text-blank-slate/70 hover:text-founders-fire transform hover:scale-110 transition-all duration-300">
                <Linkedin className="h-5 w-5 lg:h-8 lg:w-8 xl:h-10 xl:w-10" />
              </a>
              <a href="https://www.youtube.com/@kocowork" 
                className="text-blank-slate/70 hover:text-founders-fire transform hover:scale-110 transition-all duration-300">
                <Youtube className="h-5 w-5 lg:h-8 lg:w-8 xl:h-10 xl:w-10" />
              </a>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-6 md:flex-1 md:flex md:flex-col md:items-center">
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin className="h-5 w-5 lg:h-8 lg:w-8 xl:h-10 xl:w-10 text-founders-fire mr-3 mt-1 flex-shrink-0 group-hover:text-founders-fire/80 transition-colors duration-300" />
                <span className="text-blank-slate/80 text-md lg:text-lg xl:text-xl leading-relaxed">Plot No. 2, Champapet Rd, Nagarjuna Colony, Hyderabad, Telangana 500079</span>
              </li>
              <li className="flex items-center group">
                <Phone className="h-5 w-5 lg:h-8 lg:w-8 xl:h-10 xl:w-10 text-founders-fire mr-3 flex-shrink-0 group-hover:text-founders-fire/80 transition-colors duration-300" />
                <span className="text-blank-slate/80 text-md lg:text-lg xl:text-xl hover:text-blank-slate transition-colors duration-300">
                +91 9100109420, 9100109421
                </span>
              </li>
              <li className="flex items-center group">
                <Mail className="h-5 w-5 lg:h-8 lg:w-8 xl:h-10 xl:w-10 text-founders-fire mr-3 flex-shrink-0 group-hover:text-founders-fire/80 transition-colors duration-300" />
                <span className="text-blank-slate/80 text-md lg:text-lg xl:text-xl hover:text-blank-slate transition-colors duration-300">
                  hello@kocowork.in
                </span>
              </li>
            </ul>
          </div>

          {/* Opening Hours Section */}
          <div className="space-y-6 md:flex-1 md:flex md:flex-col md:items-end">
            <div className="bg-focus-black/30 p-8 rounded-lg backdrop-blur-sm w-full md:w-[80%] border-2 border-founders-fire/50">
              <div className="flex items-center space-x-4">
                <Clock className="h-8 w-8 text-founders-fire" />
                <div>
                  <p className="font-medium text-blank-slate text-lg lg:text-xl xl:text-2xl">Open 24/7</p>
                  <p className="text-blank-slate/70 text-md lg:text-lg xl:text-xl">Always available for our members</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-16 pt-8 text-center">
          <p className="text-blank-slate/60 text-sm lg:text-lg xl:text-xl">
            © {new Date().getFullYear()} KOCOwork. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;