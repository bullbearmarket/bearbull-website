import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github, 
  Mail, 
  Globe,
  ShieldCheck,
  PlayCircle
} from 'lucide-react';

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
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 mt-20">
      {/* Top Section: CTA for App Download */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 border-b border-gray-100">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-[#0a0a0f] rounded-3xl p-8 lg:p-12 shadow-2xl">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-3xl font-black text-white tracking-tighter mb-4">
              Start Your Journey with <span className="text-[#00ff88]">BearBull.</span>
            </h3>
            <p className="text-gray-400 font-medium">
              Join thousands of global traders. Practice risk-free and win up to $500 monthly. Withdraw your rewards directly!
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <a 
              href="https://play.google.com/store/apps/details?id=com.bearbull.cryptosimulator" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#00ff88] hover:bg-emerald-400 text-black px-8 py-4 rounded-2xl font-black text-lg transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,255,136,0.3)] w-full"
            >
              <PlayCircle className="w-6 h-6" />
              Download App Now
            </a>
          </div>
        </div>
      </div>

      {/* Middle Section: Links Grid */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-[#0a0a0f] rounded-xl flex items-center justify-center overflow-hidden p-1">
                 <img src="/logo.png" alt="BearBull" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-black tracking-tighter text-[#0a0a0f]">
                BearBull<span className="text-[#00ff88]">.</span>
              </span>
            </Link>
            <p className="text-gray-500 font-medium max-w-sm mb-6 leading-relaxed">
              Institutional-grade crypto simulation for the next generation of global traders. Practice with real-time data and earn huge rewards.
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:moneymaker.earnmoney@gmail.com" className="text-sm font-bold text-[#0a0a0f] flex items-center gap-2 hover:text-[#00ff88] transition-colors">
                <Mail className="w-5 h-5 text-gray-400" />
                moneymaker.earnmoney@gmail.com
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-[10px] font-black text-[#0a0a0f] uppercase tracking-[0.2em] mb-8">Platform</h4>
            <ul className="space-y-4">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm font-bold text-gray-500 hover:text-[#0a0a0f] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-[10px] font-black text-[#0a0a0f] uppercase tracking-[0.2em] mb-8">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm font-bold text-gray-500 hover:text-[#0a0a0f] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="text-[10px] font-black text-[#0a0a0f] uppercase tracking-[0.2em] mb-8">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm font-bold text-gray-500 hover:text-[#0a0a0f] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright & Social */}
      <div className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                &copy; {currentYear} BearBull Simulator. All rights reserved.
              </p>
              <div className="h-4 w-px bg-gray-300 hidden md:block" />
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00ff88]" />
                <span className="text-[10px] font-black text-[#0a0a0f] uppercase tracking-widest">100% Risk Free Trading</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 pr-6 border-r border-gray-200">
                <a href="#" className="text-gray-400 hover:text-[#0a0a0f] transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-[#0a0a0f] transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-[#0a0a0f] transition-colors"><Linkedin className="w-5 h-5" /></a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gray-400" />
                <span className="text-xs font-bold text-[#0a0a0f]">EN-US</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
