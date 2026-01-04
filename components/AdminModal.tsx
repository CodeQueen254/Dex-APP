
import React, { useState } from 'react';
import { SocialLinks, ProfileInfo } from '../types';

interface AdminModalProps {
  onClose: () => void;
  onSubmit: (password: string) => boolean;
  socials: SocialLinks;
  onUpdateSocials: (socials: SocialLinks) => void;
  profile: ProfileInfo;
  onUpdateProfile: (profile: ProfileInfo) => void;
}

const AdminModal: React.FC<AdminModalProps> = ({ 
  onClose, 
  onSubmit, 
  socials, 
  onUpdateSocials, 
  profile, 
  onUpdateProfile 
}) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [tempSocials, setTempSocials] = useState<SocialLinks>(socials);
  const [tempProfile, setTempProfile] = useState<ProfileInfo>(profile);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit(password)) {
      setIsAuth(true);
    } else {
      setError('Invalid password');
    }
  };

  const handleSaveAll = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateSocials(tempSocials);
    onUpdateProfile(tempProfile);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-zinc-900 w-full max-w-lg rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        {!isAuth ? (
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Admin Login</h2>
              <p className="text-gray-500 text-sm mt-2">Enter your password to access content management</p>
            </div>
            
            <div>
              <input 
                type="password" 
                placeholder="Enter Password"
                required
                autoFocus
                className="w-full bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-500"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
            </div>

            <div className="flex gap-4">
              <button 
                type="button" 
                onClick={onClose}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 font-medium"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="flex-1 gradient-bg text-white px-4 py-3 rounded-xl font-bold"
              >
                Login
              </button>
            </div>
            
            <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest">
              Hint: divine2025
            </p>
          </form>
        ) : (
          <form onSubmit={handleSaveAll} className="space-y-6">
            <div className="text-center border-b border-gray-100 dark:border-gray-800 pb-4">
              <h2 className="text-2xl font-bold">Content Management</h2>
              <p className="text-gray-500 text-sm mt-2">Update your site details here</p>
            </div>

            <div className="space-y-6">
              {/* Profile Section */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-pink-500 uppercase tracking-widest">Profile Identity</h3>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">Profile Picture URL</label>
                  <input 
                    type="url" 
                    className="w-full bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-2 mt-1"
                    value={tempProfile.profilePic}
                    onChange={e => setTempProfile({...tempProfile, profilePic: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">About Me Writeup</label>
                  <textarea 
                    className="w-full bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-2 mt-1 min-h-[120px]"
                    value={tempProfile.aboutText}
                    onChange={e => setTempProfile({...tempProfile, aboutText: e.target.value})}
                  />
                </div>
              </div>

              {/* Social Links Section */}
              <div className="space-y-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                <h3 className="text-sm font-bold text-pink-500 uppercase tracking-widest">Social Presence</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase">LinkedIn</label>
                    <input 
                      type="url" 
                      className="w-full bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-2 mt-1"
                      value={tempSocials.linkedin}
                      onChange={e => setTempSocials({...tempSocials, linkedin: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase">Instagram</label>
                    <input 
                      type="url" 
                      className="w-full bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-2 mt-1"
                      value={tempSocials.instagram}
                      onChange={e => setTempSocials({...tempSocials, instagram: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase">WhatsApp</label>
                    <input 
                      type="url" 
                      className="w-full bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-2 mt-1"
                      value={tempSocials.whatsapp}
                      onChange={e => setTempSocials({...tempSocials, whatsapp: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase">Twitter / X</label>
                    <input 
                      type="url" 
                      className="w-full bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-2 mt-1"
                      value={tempSocials.twitter}
                      onChange={e => setTempSocials({...tempSocials, twitter: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button 
                type="button" 
                onClick={onClose}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 font-medium"
              >
                Close
              </button>
              <button 
                type="submit" 
                className="flex-1 gradient-bg text-white px-4 py-3 rounded-xl font-bold"
              >
                Save All
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminModal;
