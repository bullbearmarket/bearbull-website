import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ChevronRight } from 'lucide-react';
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
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-500',
        scrolled 
          ? 'py-3 bg-white/80 backdrop-blur-xl border-b border-brand-border/50 shadow-premium-sm' 
          : 'py-6 bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group relative z-[110]">
          <div className="relative w-10 h-10 bg-brand-dark rounded-[12px] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-neon-glow overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-neon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             <span className="text-neon font-black text-xl italic tracking-tighter">B</span>
          </div>
          <span className="text-xl font-black tracking-tighter text-brand-dark flex items-center">
            BearBull<span className="text-neon">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "nav-link",
                location.pathname === link.href && "nav-link-active"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-6 relative z-[110]">
          <Link
            to="/download"
            className="btn-primary group !py-2.5 !rounded-full overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Download App
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-[110] p-2 text-brand-dark"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="w-7 h-7" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Menu className="w-7 h-7" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-[105] lg:hidden"
          >
            <div className="h-full flex flex-col pt-32 px-6 pb-12 bg-white relative overflow-hidden">
              {/* Background Accents */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-neon/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="flex flex-col gap-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className={cn(
                        "flex items-center justify-between text-3xl font-black py-4 border-b border-brand-lightGray transition-colors",
                        location.pathname === link.href ? "text-neon" : "text-brand-dark"
                      )}
                    >
                      {link.name}
                      <ChevronRight className={cn("w-6 h-6", location.pathname === link.href ? "text-neon" : "text-brand-border")} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-auto"
              >
                <Link
                  to="/download"
                  className="w-full btn-neon !py-5 !text-lg !rounded-3xl shadow-xl shadow-neon/20 flex items-center justify-center gap-3"
                >
                  Download the App
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
                <p className="text-center text-brand-gray text-sm mt-6 font-medium">
                  Join 50k+ traders worldwide.
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
