import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Globe, 
  Trophy, 
  ShieldCheck, 
  Zap, 
  Smartphone 
} from 'lucide-react';

const features = [
  {
    title: 'Paper Trading',
    desc: 'Execute trades with $10,000 virtual USDT. Experience real execution speed with zero financial risk.',
    icon: Zap,
  },
  {
    title: 'Real-time Prices',
    desc: 'Institutional-grade data feeds for BTC, ETH, and hundreds of assets directly from global exchanges.',
    icon: Globe,
  },
  {
    title: 'Monthly Rewards',
    desc: 'Top performers in our global leagues earn Amazon and Google Play gift cards every single month.',
    icon: Trophy,
  },
  {
    title: 'Premium Tools',
    desc: 'Access advanced risk calculators and professional analytics used by elite hedge fund traders.',
    icon: BarChart3,
  },
  {
    title: 'Risk-free Practice',
    desc: 'Perfect your technical analysis and emotional control without the stress of losing capital.',
    icon: ShieldCheck,
  },
  {
    title: 'Live Market Tracking',
    desc: 'Monitor global trends and track your portfolio health 24/7 with our high-performance mobile app.',
    icon: Smartphone,
  },
];

const MainFeatures = () => {
  return (
    <section className="section-padding bg-white" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-6xl font-black text-[#0a0a0f] mb-6 tracking-tight">
              Institutional Tools. <br />
              <span className="premium-gradient-text">Zero Risk.</span>
            </h2>
            <p className="text-[#64748b] text-xl max-w-2xl mx-auto leading-relaxed font-medium">
              We provide the infrastructure of a professional trading desk, giving you the perfect environment to master the crypto markets.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-[#00ff88]/30 transition-all duration-500 hover:shadow-premium relative overflow-hidden"
            >
              {/* Subtle hover background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff88]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-14 h-14 bg-[#f8f9fa] group-hover:bg-[#00ff88]/10 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110">
                <f.icon className="w-7 h-7 text-[#0a0a0f] group-hover:text-[#00ff88] transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#0a0a0f] mb-4 group-hover:text-[#00ff88] transition-colors">
                {f.title}
              </h3>
              
              <p className="text-[#64748b] leading-relaxed font-medium">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainFeatures;
