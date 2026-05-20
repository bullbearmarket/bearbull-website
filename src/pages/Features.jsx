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
  ArrowRight,
  TrendingUp,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/utils/SEO';

const features = [
  {
    icon: Zap,
    title: "Zero-Latency Trading",
    description: "Experience professional-grade execution speeds. Our matching engine simulates live exchange environments to give you the most realistic paper trading experience possible.",
    accent: "bg-neon/10 text-neon"
  },
  {
    icon: Globe,
    title: "Live Institutional Feeds",
    description: "Stay ahead with sub-second price updates. We aggregate data from top-tier liquidity providers to ensure your charts are always in sync with the global market.",
    accent: "bg-blue-500/10 text-blue-500"
  },
  {
    icon: Target,
    title: "Pro Risk Management",
    description: "Master the art of preservation. Use our built-in position sizing tools and stop-loss simulators to protect your virtual capital like a hedge fund manager.",
    accent: "bg-gold/10 text-gold-dark"
  },
  {
    icon: BarChart3,
    title: "Deep Portfolio Analytics",
    description: "Analyze your performance with precision. Track your win rate, Sharpe ratio, and maximum drawdown through interactive institutional-style dashboards.",
    accent: "bg-purple-500/10 text-purple-500"
  },
  {
    icon: Trophy,
    title: "Competitive Leagues",
    description: "Test your edge against a global community. Climb the ranks in our monthly seasons and earn digital rewards based on your verified performance.",
    accent: "bg-neon/10 text-neon"
  },
  {
    icon: Smartphone,
    title: "Premium Mobile Terminal",
    description: "Trade on the move with our high-performance app. Featuring biometric security, instant notifications, and a full-featured trading interface.",
    accent: "bg-brand-dark/5 text-brand-dark"
  }
];

const Features = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <SEO 
        title="Institutional Features" 
        description="Explore the professional-grade tools and features of BearBull Crypto Simulator. Real-time data, risk calculators, and advanced portfolio analytics." 
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-surface">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-dark text-neon text-[10px] font-black uppercase tracking-widest mb-8">
                The Platform
              </span>
              <h1 className="text-5xl lg:text-8xl font-black text-brand-dark mb-8 leading-[0.9] tracking-tighter">
                Tools Built for <br />
                <span className="text-gradient italic">The Professional.</span>
              </h1>
              <p className="text-xl text-brand-gray max-w-2xl leading-relaxed font-medium">
                We've brought institutional-grade trading infrastructure to the retail simulator. 
                Everything you need to master the markets, with zero financial risk.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="premium-card group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ${feature.accent}`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-brand-dark mb-4 tracking-tight group-hover:text-neon transition-colors">
                  {feature.title}
                </h3>
                <p className="text-brand-gray leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Engine Section */}
      <section className="section-padding bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-grid pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-10 leading-tight tracking-tighter">
                The Real-Time <br />
                <span className="text-neon">Execution Engine.</span>
              </h2>
              
              <div className="space-y-10">
                {[
                  {
                    icon: Clock,
                    title: "Sub-Second Latency",
                    desc: "Our engine processes market data as it happens, ensuring your simulation reflects real-world price action exactly."
                  },
                  {
                    icon: Layers,
                    title: "Multi-Asset Liquidity",
                    desc: "Access a deep pool of virtual liquidity across 200+ crypto pairs, including Spot and Perpetual futures."
                  },
                  {
                    icon: Activity,
                    title: "Advanced Order Types",
                    desc: "Practice with Limit, Market, Stop-Loss, and Take-Profit orders just like you would on a top-tier exchange."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-neon" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-brand-gray font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full relative">
              <div className="aspect-[4/3] rounded-5xl bg-white/5 border border-white/10 p-4 relative group">
                <div className="w-full h-full rounded-4xl bg-brand-dark border border-white/5 overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <TrendingUp className="w-24 h-24 text-neon opacity-20" />
                    </motion.div>
                    <p className="text-white/20 font-black tracking-widest mt-4 uppercase text-xs">Matching Engine V4.0</p>
                  </div>
                </div>
                
                {/* Floating Stats */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-premium-xl border border-brand-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neon/10 flex items-center justify-center text-neon">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-brand-gray uppercase tracking-widest">Latency</div>
                      <div className="text-lg font-black text-brand-dark tracking-tighter">0.02ms</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-neon rounded-5xl p-12 lg:p-24 text-center relative overflow-hidden group shadow-2xl shadow-neon/20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl lg:text-7xl font-black text-brand-dark mb-8 tracking-tighter">
                Ready to trade <br />
                <span className="italic">at the next level?</span>
              </h2>
              <p className="text-brand-dark/70 text-xl font-bold mb-12 max-w-2xl mx-auto">
                Join the thousands of traders who are already using BearBull to master their strategies.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link to="/download" className="btn-primary !px-12 !py-5 !text-lg !rounded-full hover:scale-105">
                  Get Started Now
                </Link>
                <Link to="/contact" className="px-12 py-5 font-black text-brand-dark hover:underline flex items-center gap-2">
                  Request Demo <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Features;
