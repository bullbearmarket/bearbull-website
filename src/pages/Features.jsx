import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  BarChart3, 
  ShieldCheck, 
  Globe, 
  Smartphone, 
  Trophy, 
  Clock, 
  Layers, 
  Target,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Zap,
    title: "Zero-Latency Paper Trading",
    description: "Execute trades in a simulated environment that mirrors live market conditions with millisecond precision. Perfect your timing without risking a single dollar.",
    color: "#00ff88"
  },
  {
    icon: Globe,
    title: "Institutional Data Feeds",
    description: "Access real-time price action for BTC, ETH, SOL, and hundreds of other assets. Our data is synced directly with global liquidity providers.",
    color: "#00ff88"
  },
  {
    icon: Target,
    title: "Advanced Risk Calculator",
    description: "Built-in professional tools to calculate position sizing, risk-to-reward ratios, and potential liquidations before you ever enter a trade.",
    color: "#ffd700"
  },
  {
    icon: BarChart3,
    title: "Deep Portfolio Analytics",
    description: "Track your PnL growth with beautiful, interactive charts. Analyze your win rate, average hold time, and drawdowns like a hedge fund manager.",
    color: "#00ff88"
  },
  {
    icon: Trophy,
    title: "Global Trading Leagues",
    description: "Compete against traders worldwide. Climb the monthly leaderboards based on percentage gains and win real digital rewards.",
    color: "#00ff88"
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Sync",
    description: "Start a trade on your desktop and monitor it on our premium mobile app. Your simulated portfolio is always at your fingertips.",
    color: "#00ff88"
  }
];

const Features = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      {/* Hero Header */}
      <section className="section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl lg:text-7xl font-black text-[#0a0a0f] mb-6">
            Institutional Tools. <br />
            <span className="text-[#64748b]">Simulated Environment.</span>
          </h1>
          <p className="text-xl text-[#64748b] max-w-2xl mx-auto leading-relaxed">
            Everything you need to go from a beginner to a pro trader. 
            BearBull provides the infrastructure; you provide the strategy.
          </p>
        </motion.div>
      </section>

      {/* Feature Grid */}
      <section className="section-padding bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-premium transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-[#00ff88]/10 transition-colors">
                <feature.icon className="w-7 h-7 text-[#0a0a0f] group-hover:text-[#00ff88]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a0a0f] mb-4">{feature.title}</h3>
              <p className="text-[#64748b] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* High-End Showcase Section */}
      <section className="section-padding overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <h2 className="text-4xl lg:text-5xl font-black text-[#0a0a0f] mb-8 leading-tight">
              Real-time Market <br /> Execution Engine
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00ff88]/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#00ff88]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Instant Updates</h4>
                  <p className="text-[#64748b]">No more 15-minute delays. Experience the market as it happens with live websockets.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00ff88]/10 flex items-center justify-center">
                  <Layers className="w-6 h-6 text-[#00ff88]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Multi-Asset Tracking</h4>
                  <p className="text-[#64748b]">Trade Spot and Perpetual simulations across a wide variety of crypto assets.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00f
