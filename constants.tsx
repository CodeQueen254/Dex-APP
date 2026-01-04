
import { Project, SocialLinks, ProfileInfo } from './types';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Intro-section form with validation',
    description: 'A responsive form with real-time validation and accessible labels.',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  {
    id: '2',
    title: 'Social Networks Page',
    description: 'A compact social hub layout with cards, avatars, and interactions.',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  {
    id: '3',
    title: 'Bento Grid',
    description: 'A page containing a design of different cards using modern layout techniques.',
    imageUrl: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800',
    link: '#'
  }
];

export const INITIAL_SOCIALS: SocialLinks = {
  linkedin: 'https://www.linkedin.com/in/divine-obute-b3205228a',
  instagram: 'https://www.instagram.com/neri_a224',
  whatsapp: 'https://wa.me/message/HYBHA6ZNRDXSG1',
  twitter: 'https://www.x.com/Divine739586362'
};

export const INITIAL_PROFILE: ProfileInfo = {
  profilePic: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800',
  aboutText: "Hey! I'm Divine, a Math student at UNILAG and a passionate Frontend Developer. I started my tech journey in 2024 through the LITA bootcamp. I love building clean, responsive interfaces and solving complex problems with code. Always learning, always building!"
};

export const THEME_GRADIENT = 'linear-gradient(45deg, hsl(3,43%,57%), hsl(306,18%,68%), hsl(221,74%,43%))';
