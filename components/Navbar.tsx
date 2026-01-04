
import React, { useState } from 'react';
import { View } from '../types';

interface NavbarProps {
  currentView: View;
  setView: (view: View) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  onAdminClick: () => void;
  isAdmin: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ 
  currentView, 
  setView, 
  isDarkMode, 
  toggleTheme,
  onAdminClick,
  isAdmin
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { label: string; value: View }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Projects', value: 'projects' },
    { label: 'About', value: 'about' },
    { label: 'Contact', value: 'contact' },
  ];

  const handleNavClick = (view: View) => {
    setView(view);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-3xl font-bold gradient-text"
            >
              dex
            </button>
            {isAdmin && (
              <span className="text-[10px] bg-green-500 text-white px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">
                Admin Mode
              </span>
            )}
          </div>

          {/* Desktop Navigation - Pill Design */}
          <div className="hidden md:flex items-center space-x-1 px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  currentView === item.value 
                    ? 'gradient-bg text-white shadow-md' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title="Toggle Theme"
            >
              {isDarkMode ? <i className="fas fa-sun text-yellow-400"></i> : <i className="fas fa-moon text-indigo-600"></i>}
            </button>
            <button 
              onClick={onAdminClick}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title="Admin Login"
            >
              <i className={`fas ${isAdmin ? 'fa-unlock' : 'fa-lock'} text-gray-500`}></i>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button onClick={toggleTheme} className="p-2">
               {isDarkMode ? <i className="fas fa-sun text-yellow-400"></i> : <i className="fas fa-moon text-indigo-600"></i>}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 slide-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium ${
                  currentView === item.value 
                    ? 'gradient-text font-bold' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={onAdminClick}
              className="block w-full text-left px-3 py-4 text-gray-700 dark:text-gray-300 border-t border-gray-100 dark:border-gray-900"
            >
              <i className="fas fa-lock mr-2"></i> {isAdmin ? 'Exit Admin' : 'Admin Login'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
