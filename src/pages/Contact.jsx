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
  MapPin,
  ArrowRight,
  HelpCircle,
  Trophy,
  BookOpen,
  Smartphone,
  FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';

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

const QuickLinkCard = ({ icon: Icon, title, desc, linkTo, linkText }) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-100 hover:border-[#00ff88]/50 transition-all hover:shadow-xl group flex flex-col h-full">
    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#00ff88]/10 transition-colors">
      <Icon className="w-6 h-6 text-[#0a0a0f] group-hover:text-[#00ff88] transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-[#0a0a0f] mb-2">{title}</h3>
    <p className="text-[#64748b] text-sm leading-relaxed mb-6 flex-grow">{desc}</p>
    <Link to={linkTo} className="text-[#00ff88] font-bold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
      {linkText} <ArrowRight className="w-4 h-4" />
    </Link>
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
      {/* 1. Header Section */}
      <section className="section-padding !pb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#00ff8810_0%,transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff88]/10 text-[#00ff88] text-sm font-bold mb-8 border border-[#00ff88]/20 tracking-widest uppercase">
              <MessageSquare className="w-4 h-4" />
              24/7 Global Support
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-[#0a0a0f] mb-8 leading-tight">
              We're here to help <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-emerald-600">you succeed.</span>
            </h1>
            <p className="text-xl text-[#64748b] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Have questions about the simulator, need help withdrawing your cash rewards, or facing technical issues? 
              Our team is available round the clock.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Quick Links / Interlinking Section (NEW) */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-2xl lg:text-3xl font-black text-[#0a0a0f] flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-[#00ff88]" />
              Quick Answers
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <QuickLinkCard 
              icon={Trophy} 
              title="Reward Rules" 
              desc="Learn how our $500 monthly cash tournament works and how to withdraw." 
              linkTo="/rewards" 
              linkText="View Rewards" 
            />
            <QuickLinkCard 
              icon={BookOpen} 
              title="Trading Guide" 
              desc="New to crypto? Read our comprehensive guide to mastering the simulator." 
              linkTo="/guide" 
              linkText="Read Guide" 
            />
            <QuickLinkCard 
              icon={Smartphone} 
              title="Download App" 
              desc="Get the Android app directly from Google Play to start trading." 
              linkTo="/download" 
              linkText="Get App" 
            />
            <QuickLinkCard 
              icon={FileText} 
              title="Legal & Terms" 
              desc="Review our Terms of Service, Privacy Policy, and KYC rules for withdrawals." 
              linkTo="/terms" 
              linkText="Read Terms" 
            />
          </div>
        </div>
      </section>

      {/* 3. Main Form & Direct Contact Section */}
      <section className="section-padding !pt-0 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16">
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[3rem] border border-gray-200 p-8 lg:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,255,136,0.05)] transition-all">
              <h3 className="text-3xl font-black text-[#0a0a0f] mb-8">Send a Message</h3>
              
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-[#00ff88]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-[#00ff88]" />
                  </div>
                  <h2 className="text-3xl font-black text-[#0a0a0f] mb-4">Message Received!</h2>
                  <p className="text-[#64748b] mb-8 text-lg">Thank you! Our support team will get back to your email within 2-4 hours.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="bg-gray-100 text-[#0a0a0f] px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 transition-colors"
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
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-[#00ff88] focus:bg-white focus:ring-4 focus:ring-[#00ff88]/10 outline-none transition-all font-medium"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#0a0a0f] ml-1">Account Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-[#00ff88] focus:bg-white focus:ring-4 focus:ring-[#00ff88]/10 outline-none transition-all font-medium"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0a0a0f] ml-1">What do you need help with?</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-[#00ff88] focus:bg-white focus:ring-4 focus:ring-[#00ff88]/10 outline-none transition-all appearance-none font-medium cursor-pointer">
                      <option>Reward Withdrawal (UPI / Crypto)</option>
                      <option>Account & Login Issues</option>
                      <option>Leaderboard Rankings</option>
                      <option>Report a Bug / App Issue</option>
                      <option>Business Partnership</option>
                      <option>Other General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0a0a0f] ml-1">Message Details</label>
                    <textarea 
                      required
                      rows="6"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-[#00ff88] focus:bg-white focus:ring-4 focus:ring-[#00ff88]/10 outline-none transition-all resize-none font-medium"
                      placeholder="Please provide as much detail as possible so we can help you faster..."
                    ></textarea>
                  </div>

                  <button 
                    disabled={formState === 'sending'}
                    className="w-full bg-[#0a0a0f] text-white flex items-center justify-center gap-3 text-lg py-5 rounded-2xl font-black hover:bg-[#2d2d39] hover:-translate-y-1 transition-all shadow-xl disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {formState === 'sending' ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Send Message Now
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
              subContent="Best for account & withdrawal issues."
            />
            <ContactInfo 
              icon={Clock}
              title="Support Hours"
              content="24 / 7 Live Monitoring"
              subContent="Global coverage. Average response < 4 hrs."
            />
            <ContactInfo 
              icon={MapPin}
              title="Global Operations"
              content="BearBull Digital Hub"
              subContent="Operating worldwide. No physical boundaries."
            />

            <div className="p-8 rounded-[2.5rem] bg-[#0a0a0f] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff88]/20 blur-3xl rounded-full pointer-events-none" />
              <h4 className="text-xl font-bold mb-6 relative z-10">Join the Community</h4>
              <div className="flex gap-4 relative z-10">
                {[
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Globe, href: "#" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href}
                    className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#00ff88] hover:text-[#0a0a0f] hover:scale-110 transition-all border border-white/5"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-8 leading-relaxed relative z-10">
                Follow us on social media for daily market insights, trading tips, app updates, and leaderboard announcements!
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 4. Bottom CTA (Interlinking to App/Home) */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-black text-[#0a0a0f] mb-6">Ready to test your skills?</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://play.google.com/store/apps/details?id=com.bearbull.cryptosimulator" target="_blank" rel="noopener noreferrer" className="bg-[#00ff88] text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2">
            Download App Now <ArrowRight className="w-4 h-4" />
          </a>
          <Link to="/" className="bg-gray-100 text-[#0a0a0f] px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors">
            Return to Home
          </Link>
        </div>
      </section>

    </motion.div>
  );
};

export default Contact;
