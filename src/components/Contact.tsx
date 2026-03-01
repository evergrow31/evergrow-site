import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-evergrow-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-medium tracking-wider text-sm uppercase mb-4 block">Get In Touch</span>
          <h2 className="text-4xl lg:text-5xl font-semibold mb-6">
            Start Your <span className="text-green-500">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Support starts with a simple conversation. Connect with us today to explore options for you or your loved one — and discover personalised support designed around your goals, preferences, and evolving needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-evergrow-card border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-yellow-900/20 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
              <p className="text-gray-400 text-sm">Gold Coast, Queensland<br />Australia</p>
            </div>

            <a href="tel:+61402961486" className="p-8 rounded-2xl bg-evergrow-card border border-white/5 hover:border-yellow-500/50 transition-colors cursor-pointer block">
              <div className="w-12 h-12 rounded-xl bg-yellow-900/20 flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-400 text-sm">0402 961 486</p>
            </a>

            <a href="mailto:info@evergrowsupportgroup.com" className="p-8 rounded-2xl bg-evergrow-card border border-white/5 hover:border-yellow-500/50 transition-colors cursor-pointer block">
              <div className="w-12 h-12 rounded-xl bg-yellow-900/20 flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400 text-[11px] sm:text-sm whitespace-nowrap">info@evergrowsupportgroup.com</p>
            </a>

            <div className="p-8 rounded-2xl bg-evergrow-card border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-yellow-900/20 flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Hours</h3>
              <p className="text-gray-400 text-sm">24/7 Support Available</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 lg:p-10 rounded-2xl bg-evergrow-card border border-white/5">
            <h3 className="text-2xl font-semibold text-white mb-8">Send us a message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Your name</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-evergrow-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-500 transition-colors"
                    placeholder="Ever Grow"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Email address</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-evergrow-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-500 transition-colors"
                    placeholder="evergrow@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Phone number</label>
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-evergrow-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="0400 000 000"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Tell us about your support needs...</label>
                <textarea 
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-evergrow-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 disabled:opacity-70 disabled:cursor-not-allowed text-black font-bold rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-900/20 cursor-pointer"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'} <Send className="w-5 h-5" />
              </button>
              
              {status === 'success' && (
                <p className="text-green-500 text-center">Message sent successfully</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
