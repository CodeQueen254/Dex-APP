import React, { useState } from 'react';
import { SocialLinks } from '../types';

interface ContactProps {
  socials: SocialLinks;
}

const Contact: React.FC<ContactProps> = ({ socials }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (formData.name.length < 2) newErrors.name = 'Please enter your full name (at least 2 characters).';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address.';
    if (formData.subject.length < 3) newErrors.subject = 'Please enter a subject (at least 3 characters).';
    if (formData.message.length < 10) newErrors.message = 'Please enter a message (at least 10 characters).';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    
    try {
      // Integration with Formspree to send emails without a backend.
      const response = await fetch('https://formspree.io/f/deraia264@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-5xl font-extralight tracking-widest uppercase">Get In Touch</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/2 space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-light">Let's Talk</h2>
            <p className="text-gray-500 leading-relaxed">
              I'm currently available for freelance work and full-time opportunities. If you have a project that you want to get started, think you need my help with something, or just fancy saying hey, then get in touch.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 flex-shrink-0 gradient-bg text-white rounded-xl flex items-center justify-center text-xl">
                <i className="far fa-envelope"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-500 uppercase text-xs tracking-widest mb-1">Email</h4>
                <p className="text-lg">deraia264@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 flex-shrink-0 gradient-bg text-white rounded-xl flex items-center justify-center text-xl">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-500 uppercase text-xs tracking-widest mb-1">Phone</h4>
                <p className="text-lg">+234 8039127643</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 flex-shrink-0 gradient-bg text-white rounded-xl flex items-center justify-center text-xl">
                <i className="fas fa-location-dot"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-500 uppercase text-xs tracking-widest mb-1">Location</h4>
                <p className="text-lg">Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-light">Follow Me</h4>
            <div className="flex space-x-4">
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 gradient-bg text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 gradient-bg text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href={socials.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 gradient-bg text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 gradient-bg text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-zinc-900 p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100 dark:border-gray-800 space-y-6">
            <h3 className="text-2xl font-light mb-8">Send Message</h3>
            
            {status === 'success' && (
              <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-4 rounded-xl text-center font-medium animate-fade-in">
                Your message has been sent, thanks for reaching out! :)
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-4 rounded-xl text-center font-medium animate-fade-in">
                Oops! There was an error sending your message. Please try again.
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2">Your Name</label>
              <input 
                type="text" 
                name="name"
                placeholder="John Doe"
                className={`w-full bg-white dark:bg-black border ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-pink-500 transition-all`}
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Your Email</label>
              <input 
                type="email" 
                name="email"
                placeholder="doe@example.com"
                className={`w-full bg-white dark:bg-black border ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-pink-500 transition-all`}
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input 
                type="text" 
                name="subject"
                placeholder="Project Inquiry"
                className={`w-full bg-white dark:bg-black border ${errors.subject ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-pink-500 transition-all`}
                value={formData.subject}
                onChange={e => setFormData({...formData, subject: e.target.value})}
              />
              {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                name="message"
                placeholder="Tell me about your project"
                className={`w-full bg-white dark:bg-black border ${errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-pink-500 transition-all min-h-[150px]`}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="w-full gradient-bg text-white py-5 rounded-2xl font-bold shadow-lg glow-button transition-all disabled:opacity-50"
            >
              {status === 'sending' ? <i className="fas fa-spinner fa-spin"></i> : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;