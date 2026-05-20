import React from 'react';
import { motion } from 'framer-motion';
import {
  Crown,
  CheckCircle2,
  ArrowRight,
  Zap,
  ShieldCheck,
  BarChart3,
  Rocket,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PremiumHomeSection = () => {
  const benefits = [
    'Advanced Risk Calculator',
    'Exclusive Pro Badge 👑',
    'Advanced Market Analytics',
    'Faster Real-Time Price Updates',
    'Premium Priority Support',
    'Exclusive Pro Features',
  ];

  return (
    <section className="section-padding overflow-hidden bg-[#fcfcfd]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[3rem] bg-gradient-to-br from-[#fffdf5] to-[#fff8db] border border-[#ffd700]/20 p-8 md:p-12 lg:p-20 overflow-hidden shadow-[0_20px_80px_rgba(255,215,0,0.08)]">

          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#ffd700]/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#ffd700]/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0a0a0f] text-[#ffd700] text-xs font-black uppercase tracking-[0.25em] mb-8"
              >
                <Crown className="w-4 h-4 fill-[#ffd700]" />
                BearBull Pro
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0a0a0f] leading-tight mb-8"
              >
                Unlock Premium
                <br />
                <span className="bg-gradient-to-r from-[#b8860b] to-[#ffd700] bg-clip-text text-transparent">
                  Trading Power.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-[#64748b] text-lg leading-8 max-w-xl mb-10"
              >
                Upgrade your BearBull experience with professional-grade tools,
                advanced analytics, faster updates, and exclusive premium
                features built for serious crypto traders.
              </motion.p>

              {/* Benefits */}
              <div className="grid sm:grid-cols-2 gap-5 mb-12">
                {benefits.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ffd700]/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-[#b8860b]" />
                    </div>

                    <span className="text-sm md:text-base font-semibold text-[#0a0a0f]">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
              >
                <Link
                  to="/premium"
                  className="group inline-flex items-center justify-center gap-3 bg-[#0a0a0f] text-white px-8 md:px-10 py-5 rounded-full font-black text-base md:text-lg transition-all duration-300 hover:bg-[#1c1c25] hover:scale-[1.02] hover:shadow-2xl active:scale-95"
                >
                  Upgrade To Pro

                  <ArrowRight className="w-5 h-5 text-[#ffd700] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* Right Premium Card */}
            <div className="relative">

              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-white rounded-[2.5rem] border border-[#ffd700]/20 shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 md:p-10 relative overflow-hidden"
              >

                {/* Card Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#ffd700]/10 blur-3xl rounded-full" />

                {/* Header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#0a0a0f] flex items-center justify-center shadow-lg">
                      <Crown className="w-7 h-7 text-[#ffd700]" />
                    </div>

                    <div>
                      <h4 className="text-lg font-black text-[#0a0a0f]">
                        Pro Analytics
                      </h4>

                      <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400 font-bold">
                        Premium Access
                      </p>
                    </div>
                  </div>

                  <div className="px-4 py-2 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/20 text-[#00cc6a] text-[11px] font-black uppercase tracking-wider">
                    LIVE
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-6">

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-[#64748b]">
                        Market Accuracy
                      </span>

                      <span className="text-sm font-black text-[#0a0a0f]">
                        92%
                      </span>
                    </div>

                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '92%' }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-[#ffd700] to-[#b8860b]"
                      />
                    </div>
                  </div>

                  {/* Cards */}
                  <div className="grid grid-cols-3 gap-4">

                    {[
                      {
                        icon: <BarChart3 className="w-5 h-5" />,
                        title: 'Charts',
                      },
                      {
                        icon: <Rocket className="w-5 h-5" />,
                        title: 'Signals',
                      },
                      {
                        icon: <Sparkles className="w-5 h-5" />,
                        title: 'Insights',
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-[#f8fafc] border border-gray-100 rounded-2xl h-24 flex flex-col items-center justify-center gap-2"
                      >
                        <div className="text-[#b8860b]">
                          {item.icon}
                        </div>

                        <span className="text-xs font-bold text-[#0a0a0f]">
                          {item.title}
                        </span>
                      </div>
                    ))}

                  </div>

                  {/* Bottom Card */}
                  <div className="bg-[#0a0a0f] rounded-2xl p-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-white/50 font-bold mb-1">
                        Risk Engine
                      </p>

                      <h5 className="text-white font-black text-lg">
                        Optimized
                      </h5>
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-[#00ff88]/10 flex items-center justify-center border border-[#00ff88]/20">
                      <Zap className="w-6 h-6 text-[#00ff88]" />
                    </div>
                  </div>

                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-8 -right-2 lg:-right-8 bg-[#ffd700] text-[#0a0a0f] px-5 py-4 rounded-2xl shadow-2xl font-black text-xs rotate-6"
              >
                12+ PRO TOOLS
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHomeSection;
