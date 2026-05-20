import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import SEO from '../components/utils/SEO';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="404 - Page Not Found" 
        description="The page you are looking for does not exist or has been moved."
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex items-center justify-center pt-20 px-6 bg-[#fcfcfd]"
      >
        <div className="max-w-xl w-full text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative inline-block"
          >
            <div className="text-[10rem] font-black text-[#0a0a0f] leading-none opacity-5">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-[#00ff88]/10 rounded-3xl flex items-center justify-center">
                <Search className="w-12 h-12 text-[#00ff88]" />
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl font-black text-[#0a0a0f] mb-4">Lost in the Market?</h1>
          <p className="text-[#64748b] text-lg mb-12 leading-relaxed">
            The page you're looking for doesn't exist. It might have been moved, 
            renamed, or the bull run might have pushed it off the charts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/" 
              className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>

          <div className="mt-20 pt-10 border-t border-gray-100 grid grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="font-bold text-[#0a0a0f] mb-2 text-sm uppercase tracking-wider">Quick Help</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/guide" className="text-[#64748b] hover:text-[#00ff88]">Trading Guide</Link></li>
                <li><Link to="/contact" className="text-[#64748b] hover:text-[#00ff88]">Contact Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#0a0a0f] mb-2 text-sm uppercase tracking-wider">App Features</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/features" className="text-[#64748b] hover:text-[#00ff88]">Live Markets</Link></li>
                <li><Link to="/rewards" className="text-[#64748b] hover:text-[#00ff88]">Monthly Rewards</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default NotFound;
