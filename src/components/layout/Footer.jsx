import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Twitter, Linkedin, Globe, ShieldCheck } from 'lucide-react';

const footerLinks = {
  platform: [
    { name: 'Features', href: '/features' },
    { name: 'Rewards', href: '/rewards' },
    { name: 'Premium', href: '/premium' },
    { name: 'Guide', href: '/guide' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Download App', href: '/download' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Delete Account', href: '/delete-account' },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f8f9fa] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-[#0a0a0f] rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-[#00ff88] font-black text-xl">B</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-[#0a0a0f]">
                BearBull<span className="text-[#00ff88]">.</span>
              </span>
            </Link>
            <p className="text-[#64748b] text-base leading-relaxed max-w-sm mb-8">
              The world's most sophisticated crypto simulator. Practice trading with real-time market data and master the art of risk management without capital risk.
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:support@bearbullmarket.in" className="flex items-center gap-2 text-sm font-medium text-[#0a0a0f] hover:text-[#00ff88] transition-colors">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                support@bearbullmarket.in
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-[#0a0a0f] mb-6">Platform</h4>
            <ul className="space-y-4">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-[#64748b] hover:text-[#00ff88] transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#0a0a0f] mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-[#64748b] hover:text-[#00ff88] transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#0a0a0f] mb-6">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-[#64748b] hover:text-[#00ff88] transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200/60 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-sm text-[#64748b]">
            <ShieldCheck className="w-4 h-4 text-[#00ff88]" />
            <span>&copy; {currentYear} BearBull Crypto Simulator. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#64748b] hover:text-[#0a0a0f] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#64748b] hover:text-[#0a0a0f] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#64748b] hover:text-[#0a0a0f] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <div className="h-4 w-[1px] bg-gray-300 mx-2 hidden md:block"></div>
            <div className="flex items-center gap-1.5 text-sm font-medium text-[#0a0a0f]">
              <Globe className="w-4 h-4" />
              <span>English (US)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
