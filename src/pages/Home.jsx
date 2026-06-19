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
  Globe,
  PlayCircle,
  Banknote,
  Wallet
} from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { cn } from '../lib/utils';

// --- Sub-components for Home Page ---

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0a0a0f] text-white">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl bg-[#00ff88]/10 blur-[150px] rounded-full pointer-events-none" />
    
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
            Play. Learn. Earn Real Cash.
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1] text-white"
        >
          Master Crypto Trading <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-emerald-600">
            Without The Risk.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Practice with real-time live data, top the global leaderboard, and win up to <strong>$500 monthly</strong>. Withdraw cash directly to your account!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="https://play.google.com/store/apps/details?id=com.bearbull.cryptosimulator" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto relative group flex items-center justify-center gap-3 bg-[#00ff88] text-black px-8 py-4 rounded-2xl font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,255,136,0.4)]"
          >
            <PlayCircle className="w-8 h-8" />
            <div className="text-left">
              <div className="text-[10px] uppercase opacity-80 leading-none mb-1">Download Free on</div>
              <div className="text-xl leading-none">Google Play</div>
            </div>
          </a>
          <Link to="/guide" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white border border-gray-700 hover:bg-gray-800 transition-colors">
            How it works <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>

      {/* Floating UI Mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-20 relative"
      >
        <div className="relative mx-auto max-w-5xl rounded-[2rem] border-[8px] border-[#1a1a24] bg-[#0a0a0f] shadow-[0_40px_80px_rgba(0,0,0,0.6)] overflow-hidden aspect-[16/9] lg:aspect-[21/9]">
          <div className="absolute inset-0 crypto-grid opacity-10" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black via-transparent to-transparent z-10">
             <div className="flex flex-col items-center gap-4 bg-gray-900/80 backdrop-blur-md p-8 rounded-3xl border border-gray-700/50">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-black rounded-2xl border border-gray-800 flex items-center justify-center overflow-hidden p-2">
                    <img src="/logo.png" alt="BearBull" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="text-gray-400 font-bold uppercase text-xs">Virtual Portfolio</p>
                    <h2 className="text-4xl font-black text-white">$100,000<span className="text-lg text-gray-500">.00</span></h2>
                  </div>
                </div>
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
    { title: 'Live Real-Time Data', desc: 'Direct live feeds from Binance. Trade exactly like the real market.', icon: Globe },
    { title: '100% Risk Free', desc: 'Trade with $100,000 virtual money. Make mistakes without financial loss.', icon: Zap },
    { title: 'Huge Cash Rewards', desc: 'Top performers earn $500, $400, $350 and more every single month.', icon: Award },
    { title: 'Direct Withdrawals', desc: 'Withdraw your winnings directly from the app to your account.', icon: Wallet },
    { title: 'Advanced Analytics', desc: 'Professional grade PnL and trade history to improve your skills.', icon: BarChart3 },
    { title: 'Mobile First', desc: 'Trade anywhere, anytime with our premium Android simulator app.', icon: Smartphone },
  ];

  return (
    <section className="section-padding bg-white" id="features">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-black text-[#0a0a0f] mb-6">Built for Serious Traders.</h2>
        <p className="text-[#64748b] text-lg">Everything you need to master the crypto markets, absolutely free.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {features.map((f, i) => (
          <div key={i} className="group p-10 rounded-3xl bg-white border border-gray-100 hover:border-[#00ff88]/30 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
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
    { q: "Is the market data real?", a: "Yes, we use real-time institutional feeds directly from Binance to ensure your practice environment matches reality exactly." },
    { q: "How do the Cash Rewards work?", a: "Every month, we rank traders based on their virtual profit. 1st gets $500, 2nd gets $400, 3rd gets $350, 4th gets $250, 5th gets $200, and there are many more cash prizes. You can withdraw this money directly from the app!" },
    { q: "Is it completely free to play?", a: "Yes! You don't need to deposit any real money. We provide you with virtual funds to trade and learn in a 100% risk-free environment." },
    { q: "Where can I download the app?", a: "Our premium simulator is available exclusively on the Google Play Store for Android devices." }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-16 text-[#0a0a0f]">Frequently Asked Questions</h2>
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
                <div className="px-6 pb-6 text-[#64748b] leading-relaxed">
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
      
      {/* Massive Rewards Section */}
      <section className="py-24 bg-[#11111a] border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block p-4 bg-yellow-500/10 rounded-full mb-6 border border-yellow-500/20">
            <Banknote className="w-12 h-12 text-yellow-500" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Huge Monthly <span className="text-yellow-500">Cash Rewards</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-16">
            Top the monthly leaderboard with your virtual portfolio and win real cash. Withdraw your winnings directly from the app to your bank account!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 max-w-6xl mx-auto mb-12">
            {[
              { rank: "1st", prize: "$500", color: "from-yellow-400 to-yellow-600", border: "border-yellow-500/50", glow: "shadow-[0_0_30px_rgba(234,179,8,0.3)] scale-105 z-10" },
              { rank: "2nd", prize: "$400", color: "from-gray-300 to-white", border: "border-gray-400/50", glow: "" },
              { rank: "3rd", prize: "$350", color: "from-orange-400 to-orange-600", border: "border-orange-500/50", glow: "" },
              { rank: "4th", prize: "$250", color: "from-blue-400 to-blue-600", border: "border-blue-500/50", glow: "" },
              { rank: "5th", prize: "$200", color: "from-blue-400 to-blue-600", border: "border-blue-500/50", glow: "" },
            ].map((tier, idx) => (
              <div key={idx} className={`bg-gray-900 rounded-2xl p-6 lg:p-8 border ${tier.border} ${tier.glow} relative overflow-hidden group hover:-translate-y-2 transition-transform`}>
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${tier.color}`} />
                <p className="text-sm text-gray-400 font-bold mb-3 uppercase tracking-wider">{tier.rank} Position</p>
                <h3 className={`text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${tier.color}`}>
                  {tier.prize}
                </h3>
              </div>
            ))}
          </div>
          
          <div className="inline-block bg-[#00ff88]/10 border border-[#00ff88]/30 px-8 py-4 rounded-full mt-4">
            <p className="text-[#00ff88] font-bold text-xl md:text-2xl uppercase tracking-wider flex items-center gap-3">
              <Trophy className="w-6 h-6" /> + Many More Cash Prizes!
            </p>
          </div>
        </div>
      </section>

      {/* Premium Membership Teaser */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#fff9e6] rounded-[3rem] p-12 lg:p-24 border border-[#ffd700]/20 relative overflow-hidden shadow-xl">
            <div className="absolute top-10 right-10">
              <Award className="w-32 h-32 text-[#ffd700]/20" />
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
                    <CheckCircle2 className="w-6 h-6 text-[#ffd700]" />
                    <span className="font-semibold text-[#0a0a0f] text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <a href="https://play.google.com/store/apps/details?id=com.bearbull.cryptosimulator" target="_blank" rel="noopener noreferrer" className="bg-[#0a0a0f] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#2d2d39] transition-all inline-flex items-center gap-3 shadow-xl">
                <Smartphone className="w-5 h-5" /> Download App to Upgrade
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </motion.div>
  );
};

export default Home;
