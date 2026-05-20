import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Premium Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#00ff88]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#ffd700]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a0a0f] text-[#00ff88] text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff88]"></span>
                </span>
                Institutional Grade Simulator
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-8xl font-black tracking-tighter text-[#0a0a0f] mb-8 leading-[0.9] lg:max-w-[1.2ch]"
            >
              Master The <br />
              <span className="premium-gradient-text italic">Markets.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-[#64748b] mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Trade real-time crypto assets with zero capital risk. Professional tools, global competitions, and real digital rewards.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Link to="/download" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-5 text-lg">
                Get Started Free <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/guide" className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-5 text-lg border-2">
                Learn Strategy
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-16 flex items-center justify-center lg:justify-start gap-8 opacity-40 grayscale"
            >
              <div className="flex items-center gap-2 font-bold text-sm tracking-tighter">
                <ShieldCheck className="w-5 h-5" /> SECURE
              </div>
              <div className="flex items-center gap-2 font-bold text-sm tracking-tighter">
                <TrendingUp className="w-5 h-5" /> REAL-TIME
              </div>
              <div className="flex items-center gap-2 font-bold text-sm tracking-tighter">
                <Zap className="w-5 h-5" /> INSTANT
              </div>
            </motion.div>
          </div>

          {/* Right Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full"
          >
            <div className="relative mx-auto max-w-[500px] aspect-[4/5] bg-white rounded-[3rem] border border-gray-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] p-4 overflow-hidden">
               <div className="w-full h-full rounded-[2.5rem] bg-[#f8f9fa] border border-gray-100 relative overflow-hidden flex flex-col p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 bg-[#0a0a0f] rounded-xl flex items-center justify-center text-[#00ff88] font-bold">B</div>
                    <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-gray-100 shadow-sm text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" /> BTC/USDT $68,432.10
                    </div>
                  </div>
                  
                  {/* Simulated Terminal UI */}
                  <div className="flex-1 space-y-4">
                    <div className="h-4 w-2/3 bg-gray-200 rounded-full animate-pulse" />
                    <div className="h-32 w-full bg-white rounded-2xl border border-gray-100 flex flex-col justify-end p-4 gap-2">
                       <div className="flex items-end gap-1 h-full">
                          {[40, 70, 45, 90, 65, 80, 50, 85].map((h, i) => (
                            <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-[#00ff88]/20 rounded-t-sm" />
                          ))}
                       </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="h-12 rounded-xl bg-[#00ff88] flex items-center justify-center font-bold text-sm">BUY</div>
                      <div className="h-12 rounded-xl bg-red-500 flex items-center justify-center font-bold text-sm text-white">SELL</div>
                    </div>
                  </div>

                  {/* Floating Info Cards */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-1/2 -right-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] text-gray-400 font-bold">PROFIT</div>
                      <div className="text-sm font-black text-[#0a0a0f]">+$1,240.50</div>
                    </div>
                  </motion.div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
