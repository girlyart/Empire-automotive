import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-[#393928] bg-background-dark py-10 px-4 md:px-10">
      <div className="layout-content-container max-w-[960px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-white">
              <div className="size-6 text-primary">
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.236l7.388 4.063L12 12.362 4.612 8.299 12 4.236zM5 9.83v8.34l7 3.889v-8.34L5 9.83zm14 0l-7 3.889v8.34l7-3.889V9.83z"></path>
                </svg>
              </div>
              <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Empire Automotive</h2>
            </div>
            <p className="text-sm">Your trusted partner for all automotive needs. Quality service, guaranteed.</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>123 Auto Lane, Mechanicville, USA</li>
              <li>(555) 123-4567</li>
              <li>service@empireauto.com</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold">Operating Hours</h3>
            <ul className="space-y-2 text-sm">
              <li>Mon - Fri: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 3:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-[#393928] flex flex-col md:flex-row justify-between items-center gap-4 text-center text-sm text-white/60">
          <p>© 2024 Empire Automotive. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;