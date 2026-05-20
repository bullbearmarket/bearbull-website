import React from 'react';
import { motion } from 'framer-motion';
import { 
  Gift, 
  Trophy, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  ShoppingBag, 
  PlayCircle,
  TrendingUp,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

const RewardCard = ({ type, title, image, description, accent }) => (
  <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 hover:shadow-premium transition-all duration-500 group relative overflow-hidden">
    <div 
      className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity" 
      style={{ backgroundColor: accent, filter: 'blur(40px)', borderRadius: '50%' }}
    />
    <div className="relative z-10">
      <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
        {type === 'amazon' ? (
          <ShoppingBag className="w-8 h-8 text-[#FF9900]" />
        ) : (
          <PlayCircle className="w-8 h-8 text-[#34A853]" />
        )}
      </div>
      <h3 className="text-2xl font-black text-[#0a0a0f] mb-4">{title}</h3>
      <p className="text-[#64748b] leading-relaxed mb-6">
        {description}
      </p>
      <div className="flex items-center gap-2 text-sm font-bold text-[#0a0a0f]">
        <CheckCircle2 className="w-4 h-4 text-[#00ff88]" />
        Global Redemption
      </div>
    </div>
  </div>
);

const Rewards = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="floating-gradient top-[-10%] left-[-10%] opacity-40" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffd700]/10 text-[#b8860b] text-sm font-bold mb-8 border border-[#ffd700]/20">
              <Trophy className="w-4 h-4" />
              Monthly Prize Pool Open
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-[#0a0a0f] mb-8 leading-[1.1]">
              Trade Your Way to <br />
              <span className="premium-gradient-text">Real Rewards.</span>
            </h1>
            <p className="text-xl text-[#64748b] mb-12 max-w-2xl mx-auto leading-relaxed">
              At BearBull, we reward excellence. Prove your trading strategies in our risk-free simulator and earn digital gift cards every month.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats/Rules Overview */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#f8f9fa] p-10 rounded-[2rem] border border-gray-100 text-center">
            <div className="text-4xl font-black text-[#0a0a0f] mb-2">$25</div>
            <p className="text-[#64748b] font-medium">Minimum Withdrawal</p>
          </div>
          <div className="bg-[#f8f9fa] p-10 rounded-[2rem] border border-gray-100 text-center">
            <div className="text-4xl font-black text-[#0a0a0f] mb-2">Monthly</div>
            <p className="text-[#64748b] font-medium">Reward Distribution</p>
          </div>
          <div className="bg-[#f8f9fa] p-10 rounded-[2rem] border border-gray-100 text-center">
            <div className="text-4xl font-black text-[#0a0a0f] mb-2">100%</div>
            <p className="text-[#64748b] font-medium">Digital Vouchers</p>
          </div>
        </div>
      </section>

      {/* Reward Types */}
      <section className="section-padding bg-muted/30">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-4xl font-black text-[#0a0a0f] mb-4">Supported Rewards</h2>
          <p className="text-[#64748b] text-lg">We offer premium digital gift cards that can be redeemed globally.</p>
        </div>
