
import React, { useState, useEffect, useCallback } from 'react';
import { View, Project, SocialLinks, ProfileInfo } from './types';
import { INITIAL_PROJECTS, INITIAL_SOCIALS, INITIAL_PROFILE } from './constants';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminModal from './components/AdminModal';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const [socials, setSocials] = useState<SocialLinks>(INITIAL_SOCIALS);
  const [profile, setProfile] = useState<ProfileInfo>(INITIAL_PROFILE);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  // Initialize data from localStorage
  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolio_projects');
    const savedSocials = localStorage.getItem('portfolio_socials');
    const savedTheme = localStorage.getItem('portfolio_theme');
    const savedProfile = localStorage.getItem('portfolio_profile');

    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      setProjects(INITIAL_PROJECTS);
    }

    if (savedSocials) {
      setSocials(JSON.parse(savedSocials));
    }

    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }

    if (savedTheme !== null) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Sync theme to body class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('portfolio_theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

  const handleUpdateProjects = (newProjects: Project[]) => {
    setProjects(newProjects);
    localStorage.setItem('portfolio_projects', JSON.stringify(newProjects));
  };

  const handleUpdateSocials = (newSocials: SocialLinks) => {
    setSocials(newSocials);
    localStorage.setItem('portfolio_socials', JSON.stringify(newSocials));
  };

  const handleUpdateProfile = (newProfile: ProfileInfo) => {
    setProfile(newProfile);
    localStorage.setItem('portfolio_profile', JSON.stringify(newProfile));
  };

  const handleAdminAuth = (password: string) => {
    if (password === 'divine2025') {
      setIsAdmin(true);
      // We don't close the modal here anymore, AdminModal internal state handles the view transition
      return true;
    }
    return false;
  };

  const renderView = () => {
    switch (currentView) {
      case 'home': return <Home socials={socials} setView={setCurrentView} profile={profile} />;
      case 'about': return <About profile={profile} />;
      case 'projects': return (
        <Projects 
          projects={projects} 
          isAdmin={isAdmin} 
          onUpdate={handleUpdateProjects} 
        />
      );
      case 'contact': return <Contact socials={socials} />;
      default: return <Home socials={socials} setView={setCurrentView} profile={profile} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navbar 
        currentView={currentView} 
        setView={setCurrentView} 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        onAdminClick={() => isAdmin ? setIsAdmin(false) : setShowAdminLogin(true)}
        isAdmin={isAdmin}
      />
      
      <main className="flex-grow pt-20">
        {renderView()}
      </main>

      <Footer setView={setCurrentView} socials={socials} />

      {showAdminLogin && (
        <AdminModal 
          onClose={() => setShowAdminLogin(false)} 
          onSubmit={handleAdminAuth}
          socials={socials}
          onUpdateSocials={handleUpdateSocials}
          profile={profile}
          onUpdateProfile={handleUpdateProfile}
        />
      )}
    </div>
  );
};

export default App;
