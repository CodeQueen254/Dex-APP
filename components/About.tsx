
import React from 'react';
import { ProfileInfo } from '../types';

interface AboutProps {
  profile: ProfileInfo;
}

const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 space-y-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 space-y-6 order-2 md:order-1">
          <h2 className="text-5xl font-extralight tracking-widest">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
            {profile.aboutText}
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 gradient-bg text-white px-8 py-4 rounded-2xl font-medium shadow-lg hover:scale-105 transition-transform glow-button"
          >
            Download Resume <i className="fas fa-download ml-2"></i>
          </a>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-800 shadow-2xl">
              <img 
                src={profile.profilePic} 
                alt="Divine Obute" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-6 py-3 rounded-full shadow-xl text-xs md:text-sm font-bold text-center leading-tight">
              Available for<br />Freelance Work
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <h2 className="text-4xl font-extralight text-center tracking-widest uppercase">Education and Certification</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-3xl hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-colors">
            <h3 className="text-2xl font-light mb-2">Mathematics</h3>
            <p className="text-pink-500 font-medium">University Of Lagos (UNILAG)</p>
            <p className="text-gray-500 text-sm mt-4">October 2024 - Present</p>
          </div>

          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-3xl hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-colors">
            <h3 className="text-2xl font-light mb-2">Web Development</h3>
            <p className="text-pink-500 font-medium">Ladies In Tech Africa (Incubator Hub)</p>
            <p className="text-gray-500 text-sm mt-4">August - December 2024</p>
          </div>

          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-3xl hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-colors">
            <h3 className="text-2xl font-light mb-2">Certification</h3>
            <p className="text-pink-500 font-medium">LITA Web Development</p>
            <p className="text-gray-500 text-sm mt-4">Completed 2024</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-zinc-900/40 p-12 rounded-[3rem] border border-gray-100 dark:border-gray-800 text-center space-y-8">
        <h2 className="text-4xl font-extralight tracking-widest uppercase">Goals</h2>
        <ul className="max-w-3xl mx-auto space-y-6 text-gray-500 dark:text-gray-400 text-lg leading-relaxed list-none">
          <li>
            <i className="fas fa-check-circle text-pink-500 mr-2"></i>
            Become an AI enthusiast and a skilled frontend developer, leveraging mathematics to solve real-world problems.
          </li>
          <li>
            <i className="fas fa-check-circle text-pink-500 mr-2"></i>
            Integrate mathematical knowledge with technology to create data-driven, accessible, and performant interfaces.
          </li>
          <li>
            <i className="fas fa-check-circle text-pink-500 mr-2"></i>
            Contribute meaningfully to the tech space through innovative projects, open-source work, and ongoing learning.
          </li>
        </ul>
      </div>

      <div className="space-y-12">
        <h2 className="text-4xl font-extralight text-center tracking-widest uppercase">Technologies I work with</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {['React', 'Tailwind CSS', 'Javascript', 'HTML', 'CSS', 'Git', 'Wordpress'].map(tech => (
            <div key={tech} className="bg-gray-100/50 dark:bg-white/5 p-4 rounded-xl text-center font-light border border-gray-200/50 dark:border-white/5 hover:border-pink-500/50 transition-colors">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
