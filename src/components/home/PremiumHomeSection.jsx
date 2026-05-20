import React from 'react';
import { motion } from 'framer-motion';
import { Crown, CheckCircle2, ArrowRight, Calculator, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const PremiumHomeSection = () => {
  const benefits = [
    { text: "Advanced Risk Calculator", icon: Calculator },
    { text: "Exclusive Pro Badge 👑", icon: Crown },
    { text: "Advanced Analytics", icon: Zap },
    { text: "Faster Price Updates", icon: Zap },
    { text: "Premium Support", icon: ShieldCheck },
    { text: "Exclusive Pro Features", icon: ShieldCheck }
  ];

  return (
    <section className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[3.5rem] bg-[#fffcf0] border border-[#ffd700]/20 p-10 lg:p-20 overflow-hidden shadow-premium">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffd700]/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ffd700]/5 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0a0f] text-[#ffd700] text-xs font-black uppercase tracking-widest mb-8"
              >
                <Crown className="w-4 h-4 fill-[#ffd700]" />
                BearBull Pro
              </motion.div>
              
              <h2 className="text-4xl lg:text-6xl font-black text-[#0a0a0f] mb-8 leading-tight">
                Unlock Institutional <br />
                <span className="text-[#b8860b]">Trading Tools.</span>
              </h2>
              
              <p className="text-[#64748b] text-lg mb-10 max-w-lg leading-relaxed font-medium">
                Take your skills to the professional level with our suite of advanced features designed for serious market analysis.
              </p>

              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                {benefits.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#ffd700]/20 flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#b8860b]" />
                    </div>
                    <span className="text-sm font-bold text-[#0a0a0f]">{item.text}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/premium" 
                className="group flex items-center justify-center gap-3 bg-[#0a0a0f] text-white px-10 py-5 rounded-full font-black text-lg transition-all hover:bg-[#2d2d39] hover:shadow-2xl active:scale-95"
              >
                Go Pro Now
                <ArrowRight className="w-5 h-5 text-[#ffd700] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2.5rem] border-2 border-[#ffd700]/30 p-8 shadow-2xl relative"
              >
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#0a0a0f] rounded-2xl flex items-center justify-center text-[#ffd700]">
                      <Crown className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-[#0a0a0f]">Pro Analytics</h4>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Active License</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-[#00ff88]/10 text-[#00ff88] text-[10px] font-black rounded-full border border-[#00ff88]/20">
                    LIVE DATA
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="h-4 w-3/4 bg-gray-50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-[#ffd700] to-[#b8860b]"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-16 bg-gray-50 rounded-xl border border-gray-100 flex flex-col items-center justify-center gap-1">
                        <div className="w-8 h-1 bg-gray-200 rounded-full" />
                        <div className="w-4 h-1 bg-gray-100 rounded-full" />
                      </div>
                    ))}
                  </div>
                  <div className="p-4 rounded-2xl bg-[#0a0a0f] text-white flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest opacity-60">Risk Profile</span>
                    <span className="text-xs font-black text-[#00ff88]">OPTIMIZED</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-4 lg:-right-10 bg-[#ffd700] text-[#0a0a0f] p-4 rounded-2xl shadow-xl font-black text-xs rotate-6"
              >
                12+ NEW TOOLS
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHomeSection;
