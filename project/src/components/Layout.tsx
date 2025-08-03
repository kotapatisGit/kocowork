import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const noNavFooterRoutes = ['/contact'];

  const showNavAndFooter = !noNavFooterRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-founders-fire text-focus-black font-darker">
      {showNavAndFooter && <Navbar />}
      <main>{children}</main>
      {showNavAndFooter && <Footer />}
    </div>
  );
};

export default Layout;
