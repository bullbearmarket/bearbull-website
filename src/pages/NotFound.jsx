import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, TrendingDown, PlayCircle } from 'lucide-react';

const NotFound = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center pt-20 px-6 bg-[#0a0a0f] relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_center,_#ff005510_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none mix-blend-overlay" />

      <div className="max-w-xl w-full text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative inline-block"
        >
          {/* Huge 404 Text */}
          <div className="text-[12rem] font-black text-white leading-none opacity-5 select-none">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-28 h-28 bg-red-500/10 rounded-[2rem] flex items-center justify-center border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
              <TrendingDown className="w-14 h-14 text-red-500" />
            </div>
          </div>
        </motion.div>

        <h1 className="text-5xl font-black text-white mb-4 tracking-tight">Position <span className="text-red-500">Liquidated!</span></h1>
        <p className="text-gray-400 text-xl mb-12 leading-relaxed max-w-lg mx-auto">
          Oops! The page you're looking for doesn't exist. It looks like the bear market completely wiped it off the charts.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link 
            to="/" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
          >
            <Home className="w-5 h-5" />
            Return to Safety
          </Link>
          <a 
            href="https://play.google.com/store/apps/details?id=com.bearbull.cryptosimulator" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#00ff88] text-black px-8 py-4 rounded-full font-black hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,255,136,0.3)]"
          >
            <PlayCircle className="w-5 h-5" />
            Download App Instead
          </a>
        </div>

        {/* Quick Links */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-8 text-center max-w-sm mx-auto">
          <div>
            <h4 className="font-bold text-gray-300 mb-4 text-sm uppercase tracking-widest">Helpful Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/guide" className="text-gray-500 hover:text-[#00ff88] transition-colors font-medium">Trading Guide</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-[#00ff88] transition-colors font-medium">Contact Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-300 mb-4 text-sm uppercase tracking-widest">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/features" className="text-gray-500 hover:text-[#00ff88] transition-colors font-medium">App Features</Link></li>
              <li><Link to="/rewards" className="text-gray-500 hover:text-[#00ff88] transition-colors font-medium">Cash Rewards</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;
