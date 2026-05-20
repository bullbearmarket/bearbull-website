import React from 'react';
import { motion } from 'framer-motion';
import { 
  LineChart, 
  History, 
  Zap, 
  UserCircle, 
  ShieldCheck, 
  Trophy,
  ArrowRight
} from 'lucide-react';
import { cn } from '../../lib/utils';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="p-8 rounded-[2rem] bg-white border border-gray-100 hover:border-[#00ff88]/20 hover:shadow-premium transition-all group"
  >
    <div className="w-12 h-12 rounded-xl bg-[#f8f9fa] group-hover:bg-[#00ff88]/10 flex items-center justify-center mb-6 transition-colors">
      <Icon className="w-6 h-6 text-[#0a0a0f] group-hover:text-[#00ff88]" />
    </div>
    <h3 className="text-xl font-bold text-[#0a0a0f] mb-3">{title}</h3>
    <p className="text-[#64748b] text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const AppFeatures = () => {
  const appFeatures = [
    {
      icon: LineChart,
      title: "PnL Tracking",
      description: "Monitor your monthly profit and loss with institutional-grade visual charts and equity curves."
    },
    {
      icon: History,
      title: "Trade History",
      description: "Access a detailed log of every trade, including entry/exit prices, fees, and strategy notes."
    },
    {
      icon: Zap,
      title: "Real-time Prices",
      description: "Get lightning-fast price updates powered by institutional websockets for zero-lag trading."
    },
    {
      icon: UserCircle,
      title: "Smart Greetings",
      description: "A personalized experience that welcomes you back and summarizes your portfolio health."
    },
    {
      icon: Trophy,
      title: "Global Competition",
      description: "Measure your skills against the world's best traders in our transparent global leaderboard."
    },
    {
      icon: ShieldCheck,
      title: "Secure Login",
      description: "Biometric authentication and secure cloud sync to keep your simulation data safe and accessible."
    }
  ];

  return (
    <section className="section-padding bg-muted/20 rounded-[4rem] mx-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#00ff88] font-bold tracking-widest uppercase text-sm mb-4 block">Inside the App</span>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0a0a0f] leading-tight">
              Powerful tools designed for the <br />
              <span className="premium-gradient-text">modern trader.</span>
            </h2>
          </div>
          <div className="hidden lg:block pb-2">
            <p className="text-[#64748b] text-right max-w-xs mb-4 italic">
              "We've packed institutional-grade features into a simple, beautiful interface."
            </p>
            <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: '100%' }}
                 transition={{ duration: 1.5 }}
                 className="h-full bg-[#00ff88]" 
               />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appFeatures.map((feature, i) => (
            <FeatureCard 
              key={i} 
              {...feature} 
              delay={i * 0.1} 
            />
          ))}
        </div>

        {/* Dynamic App Preview Teaser */}
        <div className="mt-20 p-1 bg-[#0a0a0f] rounded-[3rem] overflow-hidden">
          <div className="bg-[#1a1a24] rounded-[2.8rem] p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-bold mb-6">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                DASHBOARD PREVIEW
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">High Performance Analytics</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Our dashboard provides a 360-degree view of your trading performance. From asset allocation to sector exposure, get the insights you need to refine your edge.
              </p>
              <button className="flex items-center gap-3 text-white font-bold group">
                Explore the terminal <ArrowRight className="w-5 h-5 text-[#00ff88] group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            <div className="flex-1 w-full lg:w-auto h-64 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <LineChart className="w-20 h-20 text-white/20 group-hover:text-[#00ff88]/40 transition-colors" />
                <div className="absolute bottom-6 right-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white/80 text-[10px] font-mono">
                  RENDER_ENGINE_V2.0
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
