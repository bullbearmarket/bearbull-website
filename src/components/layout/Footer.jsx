import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github, 
  ArrowUpRight, 
  Mail, 
  Globe,
  ShieldCheck
} from 'lucide-react';
import { cn } from '../../lib/utils';

const footerLinks = {
  platform: [
    { name: 'Home', href: '/' },
    { name: 'Market Data', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Rewards', href: '/rewards' },
    { name: 'Premium Pro', href: '/premium' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Trading Guide', href: '/guide' },
    { name: 'Contact Support', href: '/contact' },
    { name: 'Download App', href: '/download' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/privacy' },
    { name: 'Account Deletion', href: '/delete-account' },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-brand-border mt-20">
      {/* Top Section: Newsletter / CTA */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 border-b border-brand-border">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-3xl font-black text-brand-dark tracking-tighter mb-4">
              Master the market with <span className="text-neon">BearBull.</span>
            </h3>
            <p className="text-brand-gray font-medium">
              Join our global community of traders and start your risk-free journey today. 
              Get the latest updates and trading insights delivered to your inbox.
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-6 py-4 rounded-2xl bg-brand-lightGray border border-transparent focus:border-neon focus:bg-white outline-none w-full sm:w-80 font-bold text-sm transition-all"
              />
              <button className="btn-primary !rounded-2xl whitespace-nowrap">
                Get Updates
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Middle Section: Links Grid */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 bg-brand-dark rounded-xl flex items-center justify-center transition-all group-hover:shadow-neon-glow">
                <span className="text-neon font-black text-xl italic tracking-tighter">B</span>
              </div>
              <span className="text-xl font-black tracking-tighter text-brand-dark">
                BearBull<span className="text-neon">.</span>
              </span>
            </Link>
            <p className="text-brand-gray font-medium max-w-sm mb-8 leading-relaxed">
              Institutional-grade crypto simulation for the next generation of global traders. 
              Practice with real-time data, compete for rewards, and master your technical analysis.
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:support@bearbullmarket.in" className="text-sm font-bold text-brand-dark flex items-center gap-2 hover:text-neon transition-colors">
                <Mail className="w-4 h-4" />
                support@bearbullmarket.in
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-[10px] font-black text-brand-dark uppercase tracking-[0.2em] mb-8">Platform</h4>
            <ul className="space-y-4">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm font-bold text-brand-gray hover:text-brand-dark transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-[10px] font-black text-brand-dark uppercase tracking-[0.2em] mb-8">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm font-bold text-brand-gray hover:text-brand-dark transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="text-[10px] font-black text-brand-dark uppercase tracking-[0.2em] mb-8">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm font-bold text-brand-gray hover:text-brand-dark transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright & Social */}
      <div className="bg-brand-lightGray/50 border-t border-brand-border">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <p className="text-[11px] font-bold text-brand-gray uppercase tracking-widest">
                &copy; {currentYear} BearBull Simulator. All rights reserved.
              </p>
              <div className="h-4 w-px bg-brand-border hidden md:block" />
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-neon" />
                <span className="text-[10px] font-black text-brand-dark uppercase tracking-widest">Secure Trading</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 pr-6 border-r border-brand-border">
                <a href="#" className="text-brand-gray hover:text-brand-dark transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-brand-gray hover:text-brand-dark transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="text-brand-gray hover:text-brand-dark transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="text-brand-gray hover:text-brand-dark transition-colors"><Github className="w-5 h-5" /></a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-gray" />
                <span className="text-xs font-bold text-brand-dark">EN-US</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
