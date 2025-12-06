import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-white font-bold' : 'text-white/80 hover:text-white font-medium';
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#393928] bg-background-dark/90 px-4 py-3 backdrop-blur-md md:px-10">
      <div className="flex items-center gap-4 text-white cursor-pointer" onClick={() => navigate('/')}>
        <div className="size-6 text-primary">
          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.236l7.388 4.063L12 12.362 4.612 8.299 12 4.236zM5 9.83v8.34l7 3.889v-8.34L5 9.83zm14 0l-7 3.889v8.34l7-3.889V9.83z"></path>
          </svg>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Empire Automotive</h2>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm leading-normal transition-colors ${isActive(link.path)}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button 
          onClick={() => navigate('/contact')}
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
        >
          <span className="truncate">Schedule Service</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background-dark border-b border-[#393928] flex flex-col p-4 gap-4 md:hidden">
           {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-sm leading-normal ${isActive(link.path)}`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => {
              navigate('/contact');
              setIsMobileMenuOpen(false);
            }}
            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Schedule Service</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;