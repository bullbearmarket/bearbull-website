import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  Zap, 
  Award, 
  ChevronRight, 
  Plus, 
  Minus,
  CheckCircle2,
  BarChart3,
  Smartphone,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { cn } from '../lib/utils';

// --- Sub-components for Home Page ---

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    <div className="floating-gradient top-[-10%] right-[-10%]" />
    <div className="floating-gradient bottom-[-10%] left-[-10%] opacity-50" />
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff88]/10 text-[#00ff88] text-sm font-bold mb-8 border border-[#00ff88]/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff88]"></span>
            </span>
            Live Market Simulator Now Live
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl lg:text-8xl font-black tracking-tight text-[#0a0a0f] mb-8 leading-[1.1]"
        >
          Master Crypto Trading <br />
          <span className="premium-gradient-text">Without the Risk.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-[#64748b] mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Experience the thrill of the crypto market with our institutional-grade simulator. Use real-time data, compete globally, and win real rewards.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/download" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 text-lg">
            Start Trading Now <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/guide" className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2 text-lg">
            How it works
          </Link>
        </motion.div>
      </div>

      {/* Floating UI Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-20 relative"
      >
        <div className="relative mx-auto max-w-5xl rounded-3xl border border-gray-200 bg-white shadow-2xl overflow-hidden aspect-[16/9]">
          <div className="absolute inset-0 crypto-grid opacity-20" />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 bg-[#00ff88]/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-10 h-10 text-[#00ff88]" />
                </div>
                <p className="text-gray-400 font-medium">Real-time Terminal Visualization</p>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const MarketTicker = () => {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  const coins = ['bitcoin', 'ethereum', 'binancecoin', 'solana', 'cardano', 'dogecoin'];

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coins.join(',')}&vs_currencies=usd&include_24hr_change=true`
        );
        const formattedData = Object.entries(response.data).map(([id, data]) => ({
          id,
          price: data.usd,
          change: data.usd_24h_change
        }));
        setPrices(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Price fetch failed", error);
        setLoading(false);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0a0a0f] py-4 overflow-hidden whitespace-nowrap border-y border-white/5">
      <div className="flex animate-[marquee_30s_linear_infinite] hover:pause">
        {(loading ? Array(6).fill({}) : [...prices, ...prices]).map((coin, i) => (
          <div key={i} className="flex items-center gap-6 mx-12">
            <span className="text-white font-bold uppercase tracking-wider">{coin.id || '...'}</span>
            <span className="text-[#00ff88] font-mono">
              ${coin.price?.toLocaleString(undefined, { minimumFractionDigits: 2 }) || '0.00'}
            </span>
            <span className={cn(
              "text-xs font-bold px-2 py-1 rounded",
              coin.change >= 0 ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
            )}>
              {coin.change?.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    { title: 'Paper Trading', desc: 'Real execution speed with zero financial risk.', icon: Zap },
    { title: 'Live Data', desc: 'Direct feeds from global exchanges (Binance/Coinbase).', icon: Globe },
    { title: 'Monthly Rewards', desc: 'Top performers earn Amazon & Play Store vouchers.', icon: Award },
    { title: 'Risk Analysis', desc: 'Professional grade PnL and risk calculators.', icon: Shield },
    { title: 'Advanced Tools', desc: 'Technical indicators and historical trade analysis.', icon: BarChart3 },
    { title: 'Mobile First', desc: 'Trade on the go with our premium iOS & Android app.', icon: Smartphone },
  ];

  return (
    <section className="section-padding" id="features">
      <div className="text-center mb-20">
        <h2 className="text-4xl lg:text-5xl font-black text-[#0a0a0f] mb-6">Built for Serious Traders.</h2>
        <p className="text-[#64748b] text-lg max-w-2xl mx-auto">Everything you need to master the markets, without spending a single penny.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="group p-10 rounded-3xl bg-white border border-gray-100 hover:border-[#00ff88]/30 transition-all duration-500 hover:shadow-premium">
            <div className="w-14 h-14 bg-[#f8f9fa] group-hover:bg-[#00ff88]/10 rounded-2xl flex items-center justify-center mb-8 transition-colors">
              <f.icon className="w-7 h-7 text-[#0a0a0f] group-hover:text-[#00ff88] transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-[#0a0a0f] mb-4">{f.title}</h3>
            <p className="text-[#64748b] leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const FAQ = () => {
  const [open, setOpen] = useState(0);
  const faqs = [
    { q: "Is the market data real?", a: "Yes, we use real-time institutional feeds from major exchanges to ensure your practice environment matches reality exactly." },
    { q: "How do the rewards work?", a: "Top traders on our monthly leaderboard receive digital gift cards (Amazon/Google Play). Minimum withdrawal for accumulated rewards is $25." },
    { q: "Is it completely free?", a: "Yes, our core simulator is free. We offer a Premium tier for advanced analytics and professional tools." },
    { q: "Does it work on mobile?", a: "Absolutely. BearBull is designed for a premium mobile experience on both Android and iOS." }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-16">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full p-6 text-left flex items-center justify-between font-bold text-[#0a0a0f] hover:bg-gray-50 transition-colors"
              >
                {faq.q}
                {open === i ? <Minus className="w-5 h-5 text-[#00ff88]" /> : <Plus className="w-5 h-5" />}
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-[#64748b] leading-relaxed animate-in fade-in slide-in-from-top-2">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <Hero />
      <MarketTicker />
      <Features />
      
      {/* Rewards Teaser Section */}
      <section className="section-padding bg-[#0a0a0f] rounded-[4rem] mx-6 my-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#00ff88]/5 blur-[120px]" />
        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[#00ff88] font-bold tracking-widest uppercase text-sm mb-6 block">Trade to Win</span>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Real Rewards for <br /> Virtual Success.
            </h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              We believe skill should be rewarded. Top performers in our monthly simulation leagues win Amazon and Google Play gift cards.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">$25</span>
                <span className="text-gray-500 text-sm">Min. Withdrawal</span>
              </div>
              <div className="h-10 w-[1px] bg-gray-800" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">0%</span>
                <span className="text-gray-500 text-sm">Capital Risk</span>
              </div>
            </div>
            <Link to="/rewards" className="btn-primary mt-12 inline-flex items-center gap-2">
              View Rewards Program <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square bg-[#1a1a24] rounded-3xl border border-white/5 flex items-center justify-center p-12">
               <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="h-40 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center font-bold text-white text-xl">Amazon</div>
                  <div className="h-40 bg-white/5 rounded-2xl border border-white/10 mt-8 flex items-center justify-center font-bold text-white text-xl">Play Store</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Membership Teaser */}
      <section className="section-padding">
        <div className="bg-[#fff9e6] rounded-[3rem] p-12 lg:p-24 border border-[#ffd700]/20 relative overflow-hidden">
          <div className="absolute top-10 right-10">
            <Award className="w-32 h-32 text-[#ffd700]/10" />
          </div>
          <div className="max-w-2xl relative z-10">
            <h2 className="text-4xl lg:text-5xl font-black text-[#0a0a0f] mb-8">Go Pro with Premium.</h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {[
                "Advanced Risk Calculator",
                "Exclusive Pro Badge 👑",
                "Portfolio Analytics",
                "Priority Support",
                "Instant Data Refresh",
                "Historical Backtesting"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#ffd700]" />
                  <span className="font-semibold text-[#0a0a0f]">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/premium" className="bg-[#0a0a0f] text-white px-8 py-4 rounded-full font-bold hover:bg-[#2d2d39] transition-all inline-block">
              Unlock Premium Features
            </Link>
          </div>
        </div>
      </section>

      <FAQ />
    </motion.div>
  );
};

export default Home;
