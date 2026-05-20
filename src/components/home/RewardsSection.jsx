import React from 'react';
import { motion } from 'framer-motion';
import { Gift, ArrowRight, CheckCircle2, ShoppingBag, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const RewardsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      {/* Decorative Gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#00ff88]/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#0a0a0f] rounded-[3.5rem] overflow-hidden relative shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 crypto-grid pointer-events-none" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00ff88]/10 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center">
            {/* Text Content */}
            <div className="flex-1 p-10 lg:p-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff88]/10 text-[#00ff88] text-xs font-black uppercase tracking-widest mb-8 border border-[#00ff88]/20">
                  <Gift className="w-4 h-4" />
                  Earning Program
                </div>
                
                <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
                  Trade Virtual.<br />
                  <span className="text-[#00ff88]">Win Real.</span>
                </h2>
                
                <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
                  The only simulator that pays you to learn. Achieve top rankings in our monthly leagues and withdraw real digital gift cards.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#00ff88]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-[#00ff88]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Monthly Resets</h4>
                      <p className="text-gray-500 text-xs">Fresh chances to win every month.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#00ff88]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-[#00ff88]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">$25 Min. Withdrawal</h4>
                      <p className="text-gray-500 text-xs">Fast and easy reward processing.</p>
                    </div>
                  </div>
                </div>

                <Link 
                  to="/rewards" 
                  className="btn-primary inline-flex items-center gap-3 px-8 py-4 group"
                >
                  Explore Rewards Program
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Visual/Cards Side */}
            <div className="flex-1 w-full p-10 lg:p-20 bg-white/5 backdrop-blur-sm border-l border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Reward Card 1 */}
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-md relative group overflow-hidden"
                >
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#FF9900]/20 blur-3xl group-hover:bg-[#FF9900]/40 transition-colors" />
                  <ShoppingBag className="w-10 h-10 text-[#FF9900] mb-6" />
                  <h3 className="text-white font-bold text-xl mb-2">Amazon</h3>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-black">Gift Vouchers</p>
                </motion.div>

                {/* Reward Card 2 */}
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-md relative group overflow-hidden mt-8"
                >
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#34A853]/20 blur-3xl group-hover:bg-[#34A853]/40 transition-colors" />
                  <PlayCircle className="w-10 h-10 text-[#34A853] mb-6" />
                  <h3 className="text-white font-bold text-xl mb-2">Google Play</h3>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-black">Digital Credits</p>
                </motion.div>

                {/* Info Note */}
                <div className="sm:col-span-2 mt-6 p-6 rounded-2xl bg-[#00ff88]/5 border border-[#00ff88]/10 text-center">
                  <p className="text-[#00ff88] text-sm font-bold">
                    Notice: We do not support cash withdrawals. 
                    <span className="text-gray-500 font-medium ml-2 text-xs">Digital vouchers only.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
