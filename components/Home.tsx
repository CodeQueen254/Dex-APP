
import React from 'react';
import { SocialLinks, View, ProfileInfo } from '../types';

interface HomeProps {
  socials: SocialLinks;
  setView: (view: View) => void;
  profile: ProfileInfo;
}

const Home: React.FC<HomeProps> = ({ socials, setView, profile }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 overflow-x-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 space-y-6 z-10 relative">
          <h1 className="text-4xl md:text-6xl font-extralight tracking-tight leading-tight">
            Hi There, I am <span className="font-bold">Divine</span>
          </h1>
          <div className="h-8 md:h-12 flex items-center">
            <h2 className="text-xl md:text-3xl font-medium gradient-text typewriter">
              Frontend developer
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-lg">
            I create beautiful websites for businesses and organisations.
            I do not just create websites, I create websites to add value to businesses,
            making organisations recognisable and accessible to users.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => setView('projects')}
              className="gradient-bg text-white px-8 py-4 rounded-2xl font-medium shadow-lg hover:scale-105 transition-transform glow-button"
            >
              Check out my work
            </button>
            <button 
              onClick={() => setView('contact')}
              className="bg-gray-100 dark:bg-white text-pink-600 px-8 py-4 rounded-2xl font-medium shadow-md hover:bg-gray-200 dark:hover:bg-gray-100 transition-colors"
            >
              Contact me
            </button>
          </div>

          <div className="flex items-center space-x-6 pt-8">
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl gradient-text hover:scale-110 transition-transform">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-2xl gradient-text hover:scale-110 transition-transform">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href={socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-2xl gradient-text hover:scale-110 transition-transform">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-2xl gradient-text hover:scale-110 transition-transform">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center relative z-0 mt-8 md:mt-0">
          <div className="relative group">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-800 shadow-2xl transition-all duration-500 group-hover:scale-105">
              <img 
                src={profile.profilePic} 
                alt="Divine Obute" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-6 py-3 rounded-full shadow-xl text-[10px] md:text-sm font-bold text-center leading-tight">
              Available for<br />Freelance Work
            </div>
          </div>
        </div>
      </div>

      {/* Skills Teaser Section */}
      <div className="mt-32 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extralight tracking-widest">What I Do</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Transforming ideas into digital reality with cutting edge technology and creative design</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-indigo-950/20 dark:bg-[#120E30] p-12 rounded-3xl border border-indigo-500/20 group hover:border-indigo-500/40 transition-all">
            <div className="w-12 h-12 bg-indigo-500 rounded-xl mb-6 flex items-center justify-center text-white text-xl">
              <i className="fas fa-code"></i>
            </div>
            <h3 className="text-2xl font-light mb-4">Web Development</h3>
            <p className="text-gray-400 leading-relaxed">
              Building responsive, performant websites using modern frameworks like React and WordPress. 
              I focus on creating seamless experiences that drive user engagement.
            </p>
          </div>

          <div className="bg-amber-950/20 dark:bg-[#312611] p-12 rounded-3xl border border-amber-500/20 group hover:border-amber-500/40 transition-all">
            <div className="w-12 h-12 bg-amber-500 rounded-xl mb-6 flex items-center justify-center text-white text-xl">
              <i className="fas fa-rocket"></i>
            </div>
            <h3 className="text-2xl font-light mb-4">Performance Optimization</h3>
            <p className="text-gray-400 leading-relaxed">
              Ensuring your website loads fast and runs smoothly. Optimized for speed, SEO, and the 
              best user experience possible across all device types.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
