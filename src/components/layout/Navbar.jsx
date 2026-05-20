import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Rewards', href: '/rewards' },
  { name: 'Premium', href: '/premium' },
  { name: 'Guide', href: '/guide' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled 
          ? 'bg-white/80 backdrop-blur-md border-gray-100 py-3 shadow-sm' 
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#0a0a0f] rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="text-[#00ff88] font-black text-xl">B</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#0a0a0f]">
            BearBull<span className="text-[#00ff88]">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#00ff88]",
                location.pathname === link.href ? "text-[#00ff88]" : "text-[#64748b]"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/download"
            className="group flex items-center gap-2 bg-[#0a0a0f] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:bg-[#2d2d39] active:scale-95"
          >
            Download App
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-[#0a0a0f]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 shadow-xl lg:hidden"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-lg font-medium py-2 transition-colors",
                    location.pathname === link.href ? "text-[#00ff88]" : "text-[#0a0a0f]"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-gray-100" />
              <Link
                to="/download"
                className="w-full bg-[#00ff88] text-[#0a0a0f] py-4 rounded-2xl text-center font-bold shadow-lg shadow-[#00ff88]/20"
              >
                Download App
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
