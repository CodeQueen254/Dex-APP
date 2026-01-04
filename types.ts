
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface SocialLinks {
  linkedin: string;
  instagram: string;
  whatsapp: string;
  twitter: string;
}

export interface ProfileInfo {
  profilePic: string;
  aboutText: string;
}

export type View = 'home' | 'about' | 'projects' | 'contact';
