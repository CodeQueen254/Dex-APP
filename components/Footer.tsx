
import React from 'react';
import { View, SocialLinks } from '../types';

interface FooterProps {
  setView: (view: View) => void;
  socials: SocialLinks;
}

const Footer: React.FC<FooterProps> = ({ setView, socials }) => {
  return (
    <footer className="bg-gradient-to-r from-[#440D15] via-[#2F1E33] to-[#111A31] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-extralight tracking-widest uppercase">Let's Work Together</h2>
          <p className="text-gray-400 text-lg">Have a project in mind? Let's create something amazing together</p>
          <button 
            onClick={() => setView('contact')}
            className="mt-6 gradient-bg px-10 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition-transform"
          >
            Contact Me
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs font-medium uppercase tracking-widest">
          <span className="bg-white/10 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm">
            Available for Freelance
          </span>
          <span className="bg-white/10 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm">
            Open to Full-time
          </span>
          <span className="bg-white/10 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm">
            Remote Friendly
          </span>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">© 2025 Divine Obute. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href={socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
