import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MessageSquare, 
  Send, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Globe, 
  CheckCircle2,
  Clock,
  MapPin
} from 'lucide-react';

const ContactInfo = ({ icon: Icon, title, content, subContent }) => (
  <div className="flex gap-6 p-8 rounded-[2rem] bg-white border border-gray-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-300">
    <div className="flex-shrink-0 w-12 h-12 bg-[#00ff88]/10 rounded-xl flex items-center justify-center">
      <Icon className="w-6 h-6 text-[#0a0a0f]" />
    </div>
    <div>
      <h4 className="text-lg font-bold text-[#0a0a0f] mb-1">{title}</h4>
      <p className="text-[#0a0a0f] font-medium">{content}</p>
      {subContent && <p className="text-[#64748b] text-sm mt-1">{subContent}</p>}
    </div>
  </div>
);

const Contact = () => {
  const [formState, setFormState] = useState('idle'); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-[#fcfcfd]"
    >
      <section className="section-padding !pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff88]/10 text-[#00ff88] text-sm font-bold mb-8 border border-[#00ff88]/20">
              <MessageSquare className="w-4 h-4" />
              GET IN TOUCH
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-[#0a0a0f] mb-8 leading-tight">
              We're here to help <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-emerald-600">you succeed.</span>
            </h1>
            <p className="text-xl text-[#64748b] leading-relaxed max-w-2xl">
              Have questions about the simulator, rewards, or direct withdrawals? 
              Our support team is available around the clock to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding !pt-0 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16">
          
          {/* Contact Form Column */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[3rem] border border-gray-100 p-8 lg:p-12 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all">
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-[#00ff88]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-[#00ff88]" />
                  </div>
                  <h2 className="text-3xl font-black text-[#0a0a0f] mb-4">Message Sent!</h2>
                  <p className="text-[#64748b] mb-8">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="bg-gray-100 text-[#0a0a0f] px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#0a0a0f] ml-1">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-[#f8f9fa] border border-transparent focus:border-[#00ff88] focus:bg-white outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#0a0a0f] ml-1">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-[#f8f9fa] border border-transparent focus:border-[#00ff88] focus:bg-white outline-none transition-all"
                        placeholder="moneymaker@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0a0a0f] ml-1">Subject</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-[#f8f9fa] border border-transparent focus:border-[#00ff88] focus:bg-white outline-none transition-all appearance-none">
                      <option>Reward Withdrawal & Payments</option>
                      <option>General Inquiry</option>
                      <option>Technical Support</option>
                      <option>Partnership</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0a0a0f] ml-1">Message</label>
                    <textarea 
                      required
                      rows="6"
                      className="w-full px-6 py-4 rounded-2xl bg-[#f8f9fa] border border-transparent focus:border-[#00ff88] focus:bg-white outline-none transition-all resize-none"
                      placeholder="How can we help you win today?"
                    ></textarea>
                  </div>

                  <button 
                    disabled={formState === 'sending'}
                    className="w-full bg-[#0a0a0f] text-white flex items-center justify-center gap-3 text-lg py-5 rounded-2xl font-bold hover:bg-[#2d2d39] transition-all"
                  >
                    {formState === 'sending' ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="lg:col-span-2 space-y-6">
            <ContactInfo 
              icon={Mail}
              title="Direct Email Support"
              content="moneymaker.earnmoney@gmail.com"
              subContent="Our average response time is < 2 hours."
            />
            <ContactInfo 
              icon={Clock}
              title="Support Hours"
              content="24 / 7 Live Support"
              subContent="Global coverage, 365 days a year."
            />
            <ContactInfo 
              icon={MapPin}
              title="Global Operations"
              content="BearBull Digital Hub"
              subContent="Digital-first worldwide."
            />

            <div className="p-8 rounded-[2.5rem] bg-[#0a0a0f] text-white">
              <h4 className="text-xl font-bold mb-6">Join the Community</h4>
              <div className="flex gap-4">
                {[
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Globe, href: "#" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href}
                    className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#00ff88] hover:text-[#0a0a0f] transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-8 leading-relaxed">
                Follow us for daily market insights, trading tips, and reward announcements!
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
