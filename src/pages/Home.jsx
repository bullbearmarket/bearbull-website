import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  Zap, 
  Award, 
  Plus, 
  Minus,
  CheckCircle2,
  BarChart3,
  Smartphone,
  Globe,
  PlayCircle,
  Banknote,
  Wallet,
  Trophy,
  Target,
  Box,
  Crown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { cn } from '../lib/utils';

// --- Sub-components for Home Page ---

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden bg-[#0a0a0f] text-white selection:bg-[#00ff88] selection:text-black">
    {/* Animated Background Gradients */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00ff88]/20 via-[#0a0a0f]/50 to-[#0a0a0f] blur-[100px] pointer-events-none" />
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none mix-blend-overlay" />
    
    <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
      
      <div className="flex-1 text-center lg:text-left lg:max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-[#00ff88] text-sm font-bold mb-8 uppercase tracking-widest backdrop-blur-md shadow-[0_0_20px_rgba(0,255,136,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff88]"></span>
            </span>
            #1 Risk-Free Trading App
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tighter mb-8 leading-[1.05] text-white"
        >
          Master Crypto. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-emerald-400 drop-shadow-[0_0_30px_rgba(0,255,136,0.3)]">
            Win Real Cash.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed font-medium"
        >
          Start with $100,000 virtual money. Practice with live Binance data, crush the leaderboard, and withdraw up to <span className="text-white font-bold border-b-2 border-[#00ff88]">$500 cash</span> every month.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
        >
          <a 
            href="https://play.google.com/store/apps/details?id=com.bearbull.cryptosimulator" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto relative group flex items-center justify-center gap-4 bg-[#00ff88] text-black px-10 py-5 rounded-[2rem] font-black text-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(0,255,136,0.4)] hover:shadow-[0_0_80px_rgba(0,255,136,0.6)]"
          >
            <PlayCircle className="w-10 h-10" />
            <div className="text-left">
              <div className="text-xs uppercase opacity-80 leading-none mb-1 font-bold">Download Free on</div>
              <div className="text-2xl leading-none tracking-tight">Google Play</div>
            </div>
          </a>
          <Link to="/features" className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-5 rounded-[2rem] font-bold text-white border-2 border-white/10 hover:bg-white/5 transition-all text-lg group">
            Explore Features <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Floating 3D-like Mockup */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex-1 relative hidden lg:block"
      >
        <div className="relative mx-auto w-full max-w-[400px] aspect-[9/19] bg-[#0a0a0f] rounded-[3rem] border-[10px] border-gray-900 shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden transform perspective-1000 rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-2xl z-20" />
          <div className="absolute inset-0 bg-[#11111a] p-6 pt-16 flex flex-col">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 mb-6 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff88]/20 blur-2xl rounded-full" />
               <p className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-2 relative z-10">Net Worth</p>
               <h2 className="text-4xl font-black text-white relative z-10">$100,000<span className="text-xl text-gray-500">.00</span></h2>
               <div className="mt-4 flex gap-2 relative z-10">
                 <span className="bg-[#00ff88]/20 text-[#00ff88] px-3 py-1 rounded-full text-xs font-bold">+2.4% Today</span>
               </div>
            </div>
            
            <div className="space-y-4 flex-1">
               <div className="flex justify-between items-center mb-2">
                 <span className="text-white font-bold">Watchlist</span>
                 <span className="text-[#00ff88] text-xs font-bold">See All</span>
               </div>
               {[
                 { sym: 'BTC', price: '$64,230', change: '+1.2%' },
                 { sym: 'ETH', price: '$3,450', change: '+2.1%' },
                 { sym: 'SOL', price: '$142.50', change: '+5.4%' }
               ].map((c, i) => (
                 <div key={i} className="flex items-center justify-between p-4 bg-gray-900/50 rounded-2xl border border-gray-800/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-black border border-gray-700 flex items-center justify-center font-bold text-xs">{c.sym}</div>
                      <div>
                        <p className="font-bold text-white text-sm">{c.sym}/USDT</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-white text-sm">{c.price}</p>
                      <p className="text-[#00ff88] text-xs font-bold">{c.change}</p>
                    </div>
                 </div>
               ))}
            </div>
            
            <div className="mt-auto pt-4 border-t border-gray-800 flex justify-between px-2">
               {['Home', 'Trade', 'Rewards', 'Profile'].map((tab, i) => (
                 <div key={i} className="flex flex-col items-center gap-1 cursor-pointer">
                   <div className={`w-6 h-6 rounded-md ${i===0 ? 'bg-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.5)]' : 'bg-gray-700'}`}></div>
                   <span className={`text-[10px] font-bold ${i===0 ? 'text-[#00ff88]' : 'text-gray-500'}`}>{tab}</span>
                 </div>
               ))}
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
  const coins = ['bitcoin', 'ethereum', 'binancecoin', 'solana', 'ripple', 'dogecoin', 'cardano', 'polkadot'];

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coins.join(',')}&vs_currencies=usd&include_24hr_change=true`
        );
        const formattedData = Object.entries(response.data).map(([id, data]) => ({
          id: id === 'binancecoin' ? 'bnb' : id,
          price: data.usd,
          change: data.usd_24h_change
        }));
        setPrices(formattedData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchPrices();
    const interval = setInterval(fetchPrices, 20000); // Faster refresh
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0a0a0f] py-5 overflow-hidden whitespace-nowrap border-y border-[#00ff88]/20 relative shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20">
      <div className="flex animate-[marquee_40s_linear_infinite] hover:pause">
        {(loading ? Array(8).fill({}) : [...prices, ...prices]).map((coin, i) => (
          <div key={i} className="flex items-center gap-6 mx-10">
            <span className="text-gray-400 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/20 inline-block"></span>
              {coin.id || 'LOADING...'}
            </span>
            <span className="text-white font-black text-lg tracking-tight">
              ${coin.price?.toLocaleString(undefined, { minimumFractionDigits: 2 }) || '0.00'}
            </span>
            <span className={cn(
              "text-xs font-black px-3 py-1 rounded-full border",
              coin.change >= 0 
                ? "bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/30 shadow-[0_0_15px_rgba(0,255,136,0.15)]" 
                : "bg-red-500/10 text-red-500 border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.15)]"
            )}>
              {coin.change > 0 ? '+' : ''}{coin.change?.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CoreFeatures = () => {
  const features = [
    { title: 'Live Binance Data', desc: 'No delayed feeds. Trade with the exact same data as professional traders on Binance.', icon: Globe, color: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white border-blue-100' },
    { title: 'Zero Financial Risk', desc: 'Start with $100,000 virtual funds. Test high-risk strategies without losing a penny.', icon: Shield, color: 'bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white border-green-100' },
    { title: 'Real Cash Prizes', desc: 'Your skills have value. Top traders withdraw up to $500 cash every single month.', icon: Banknote, color: 'bg-yellow-50 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-black border-yellow-100' },
    { title: 'Gamified Missions', desc: 'Complete daily tasks, unlock mystery boxes, and level up to earn massive multipliers.', icon: Target, color: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white border-purple-100' },
    { title: 'Pro Analytics', desc: 'Track your PnL, win rate, and portfolio growth with beautiful, easy-to-read charts.', icon: BarChart3, color: 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white border-orange-100' },
    { title: 'Global Leaderboard', desc: 'Compete against traders from 150+ countries. See how you rank globally.', icon: Trophy, color: 'bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white border-pink-100' },
  ];

  return (
    <section className="py-24 bg-[#fcfcfd]" id="features">
      <div className="text-center mb-20 max-w-4xl mx-auto px-6">
        <span className="text-[#00ff88] font-bold tracking-widest uppercase mb-4 block">Platform Features</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0a0a0f] mb-6 tracking-tight">Everything you need. <br/>Nothing you don't.</h2>
        <p className="text-[#64748b] text-xl leading-relaxed">Built for beginners to learn, and professionals to compete.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {features.map((f, i) => (
          <div key={i} className="group p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border transition-all duration-500 shadow-sm ${f.color}`}>
              <f.icon className="w-8 h-8 transition-colors" />
            </div>
            <h3 className="text-2xl font-black text-[#0a0a0f] mb-4">{f.title}</h3>
            <p className="text-[#64748b] leading-relaxed text-lg">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const MassiveRewards = () => {
  const prizes = [
    { rank: "1st Place", prize: "$500", label: "Champion", bg: "bg-gradient-to-br from-yellow-300 to-yellow-600", border: "border-yellow-400", shadow: "shadow-[0_20px_50px_rgba(234,179,8,0.4)]", text: "text-yellow-900", scale: "scale-105 lg:scale-110 z-20" },
    { rank: "2nd Place", prize: "$400", label: "Runner Up", bg: "bg-gradient-to-br from-gray-200 to-gray-400", border: "border-gray-300", shadow: "shadow-[0_20px_50px_rgba(156,163,175,0.2)]", text: "text-gray-900", scale: "z-10" },
    { rank: "3rd Place", prize: "$350", label: "Pro Trader", bg: "bg-gradient-to-br from-orange-300 to-orange-600", border: "border-orange-400", shadow: "shadow-[0_20px_50px_rgba(249,115,22,0.3)]", text: "text-orange-950", scale: "z-10" },
  ];

  return (
    <section className="py-32 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_center,_#00ff8815_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block p-5 bg-[#00ff88]/10 rounded-full mb-8 border border-[#00ff88]/30 shadow-[0_0_30px_rgba(0,255,136,0.2)]">
            <Crown className="w-12 h-12 text-[#00ff88]" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter">
            Play Virtual. <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Win Cash.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Every month, the leaderboard resets. Generate the highest virtual profit and withdraw real cash directly to your UPI or Crypto wallet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center mb-16">
          {prizes.map((p, i) => (
            <div key={i} className={`${p.bg} rounded-[3rem] p-10 border ${p.border} ${p.shadow} ${p.scale} text-center relative overflow-hidden group hover:-translate-y-4 transition-all duration-500`}>
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-3xl rounded-full" />
               <p className={`font-black uppercase tracking-widest mb-2 opacity-80 ${p.text}`}>{p.label}</p>
               <p className={`font-bold mb-6 opacity-90 ${p.text}`}>{p.rank}</p>
               <h3 className={`text-6xl lg:text-7xl font-black tracking-tighter ${p.text}`}>
                 {p.prize}
               </h3>
               <div className="mt-8 flex justify-center">
                 <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-bold shadow-inner">
                   Direct Withdrawal
                 </div>
               </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-3xl mx-auto">
           <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 text-center shadow-xl">
             <p className="text-gray-400 font-bold uppercase text-sm mb-1">4th Place</p>
             <p className="text-3xl font-black text-white">$250 Cash</p>
           </div>
           <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 text-center shadow-xl">
             <p className="text-gray-400 font-bold uppercase text-sm mb-1">5th Place</p>
             <p className="text-3xl font-black text-white">$200 Cash</p>
           </div>
           <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 text-center flex items-center justify-center shadow-xl">
             <p className="text-[#00ff88] font-black text-xl">+ Many More Prizes!</p>
           </div>
        </div>
      </div>
    </section>
  );
};

const PremiumTeaser = () => (
  <section className="py-24 bg-white relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-[#0a0a0f] rounded-[4rem] p-12 lg:p-24 border border-gray-800 relative overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.2)]">
        {/* Glow effect */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-bold mb-8 uppercase tracking-widest">
              <Crown className="w-4 h-4" /> BearBull Premium
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">Unlock Your Full <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Potential.</span></h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">Upgrade your account within the app to access advanced risk calculators, historical backtesting, priority support, and exclusive tournaments.</p>
            
            <a href="https://play.google.com/store/apps/details?id=com.bearbull.cryptosimulator" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-10 py-5 rounded-full font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:shadow-[0_0_60px_rgba(234,179,8,0.5)]">
              <Smartphone className="w-6 h-6" /> Upgrade in App
            </a>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Exclusive Pro Badge",
              "Advanced Risk Calculator",
              "Unlimited Margin",
              "Priority Customer Support",
              "Instant Price Refresh",
              "Private Discord Access"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-3xl bg-gray-900 border border-gray-800 hover:border-yellow-500/50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                </div>
                <span className="font-bold text-gray-300 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [open, setOpen] = useState(0);
  const faqs = [
    { q: "Is the market data real and accurate?", a: "Absolutely. We use real-time institutional feeds directly from Binance. If Bitcoin pumps in the real world, your virtual portfolio updates instantly." },
    { q: "How do I withdraw my Cash Rewards?", a: "At the end of every month, top traders on the leaderboard are rewarded. You can withdraw this cash directly to your Indian bank account via UPI, or globally via Crypto Wallets (USDT/USDC)." },
    { q: "Do I ever need to deposit real money?", a: "No. BearBull is a 100% risk-free simulator. We provide you with $100,000 in virtual funds for free. You play with virtual money, but you win real cash." },
    { q: "How do daily missions and mystery boxes work?", a: "Log in daily to complete trading tasks to earn XP. Leveling up and completing streaks unlocks Mystery Boxes which contain massive virtual portfolio bonuses and rare profile badges." }
  ];

  return (
    <section className="py-32 bg-[#fcfcfd]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
           <h2 className="text-5xl font-black text-[#0a0a0f] mb-6 tracking-tight">Got Questions?</h2>
           <p className="text-xl text-[#64748b]">Everything you need to know about the simulator and rewards.</p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <button 
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full p-8 text-left flex items-center justify-between font-black text-[#0a0a0f] text-xl focus:outline-none group"
              >
                {faq.q}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${open === i ? 'bg-[#00ff88] text-black' : 'bg-gray-100 text-gray-500 group-hover:bg-[#00ff88]/20 group-hover:text-[#0a0a0f]'}`}>
                  {open === i ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-8 pb-8 text-[#64748b] text-lg leading-relaxed border-t border-gray-100 pt-6">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="py-32 bg-[#00ff88] relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
    <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
      <h2 className="text-5xl md:text-7xl font-black text-black mb-10 tracking-tight leading-[1.1]">
        Stop reading. <br/>Start trading.
      </h2>
      <p className="text-black/80 text-2xl font-bold mb-16 max-w-2xl mx-auto">
        Join the global community, claim your $100,000, and show the world what you can do.
      </p>
      <a 
        href="https://play.google.com/store/apps/details?id=com.bearbull.cryptosimulator" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-4 bg-black text-white px-12 py-6 rounded-full font-black text-2xl hover:scale-110 active:scale-95 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
      >
        <PlayCircle className="w-8 h-8" /> Download Now
      </a>
    </div>
  </section>
);

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#fcfcfd]"
    >
      <Hero />
      <MarketTicker />
      <CoreFeatures />
      <MassiveRewards />
      <PremiumTeaser />
      <FAQ />
      <CTA />
    </motion.div>
  );
};

export default Home;
