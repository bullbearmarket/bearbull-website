import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  PlayCircle, 
  Trophy, 
  Banknote,
  ShieldCheck,
  TrendingUp,
  Wallet
} from 'lucide-react';

const Download = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 bg-[#0a0a0f] text-white min-h-screen"
    >
      {/* Hero Section - High Conversion Landing Page Style */}
      <section className="relative overflow-hidden px-4 py-12 md:py-20 lg:py-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-green-500/10 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Ad Copy & Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-xs sm:text-sm font-bold mb-6 border border-green-500/20">
              <Trophy className="w-4 h-4" />
              PLAY. LEARN. EARN REAL CASH.
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Master Crypto Trading <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                Without Real Money Risk
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Practice in a real-time market simulator. Compete on the leaderboard and win up to <strong className="text-white">$500 Monthly</strong>. Withdraw directly from the app!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <a 
                href="https://play.google.com/store/apps/details?id=com.bearbull.cryptosimulator" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto relative group flex items-center justify-center gap-3 bg-green-500 text-black px-8 py-5 rounded-2xl font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(34,197,94,0.4)] hover:shadow-[0_0_60px_rgba(34,197,94,0.6)] overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <PlayCircle className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-[10px] uppercase opacity-80 leading-none mb-1">Download Free on</div>
                  <div className="text-xl leading-none">Google Play</div>
                </div>
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm font-semibold text-gray-400">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-500" /> 100% Risk Free</span>
              <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-green-500" /> Real-time Data</span>
              <span className="flex items-center gap-2"><Wallet className="w-4 h-4 text-green-500" /> Direct Withdrawals</span>
            </div>
          </motion.div>

          {/* Right: Visual Mockup for Trust & Appeal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] aspect-[9/19] bg-[#0a0a0f] rounded-[3rem] border-[8px] border-[#1a1a24] shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden mt-8 lg:mt-0 z-10"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-[#1a1a24] rounded-b-2xl z-20" />
            <div className="absolute inset-0 bg-gray-900 p-6 flex flex-col pt-12">
              <div className="flex items-center justify-between mb-8">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-black flex items-center justify-center p-1 border border-gray-800">
                  <img src="/logo.png" alt="BearBull Logo" className="w-full h-full object-contain" />
                </div>
                <div className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-500/30">
                  Live Market
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-2xl p-4 mb-6 text-center border border-gray-700 shadow-inner">
                <p className="text-gray-400 text-xs mb-1">Virtual Portfolio</p>
                <h3 className="text-3xl font-black text-white">$10000<span className="text-sm text-gray-500">.00</span></h3>
                <p className="text-green-400 text-xs mt-1 font-bold">Risk-Free Trading</p>
              </div>

              <div className="space-y-3">
                {['BTC', 'ETH', 'SOL'].map((coin, i) => (
                  <div key={i} className="bg-gray-800 rounded-xl p-3 flex items-center justify-between border border-gray-700/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-400">
                        {coin.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-white">{coin}</p>
                        <p className="text-[10px] text-gray-400 uppercase">Crypto</p>
                      </div>
                    </div>
                    <div className="h-2 w-12 bg-green-500/50 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-tr from-green-500/10 to-yellow-500/10 rounded-full blur-[60px]" />
          </motion.div>
        </div>
      </section>

      {/* Massive Rewards Highlights Section */}
      <section className="py-16 md:py-24 bg-[#11111a] border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-4 bg-yellow-500/10 rounded-full mb-6 border border-yellow-500/20">
            <Banknote className="w-12 h-12 text-yellow-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Huge Monthly <span className="text-yellow-500">Cash Rewards</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            Top the monthly leaderboard with your virtual portfolio and win real cash. Withdraw your winnings directly from the app to your account!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-10">
            {[
              { rank: "1st", prize: "$500", color: "from-yellow-400 to-yellow-600", border: "border-yellow-500/50", glow: "shadow-[0_0_20px_rgba(234,179,8,0.2)]" },
              { rank: "2nd", prize: "$400", color: "from-gray-300 to-white", border: "border-gray-400/50", glow: "" },
              { rank: "3rd", prize: "$350", color: "from-orange-400 to-orange-600", border: "border-orange-500/50", glow: "" },
              { rank: "4th", prize: "$250", color: "from-blue-400 to-blue-600", border: "border-blue-500/50", glow: "" },
              { rank: "5th", prize: "$200", color: "from-blue-400 to-blue-600", border: "border-blue-500/50", glow: "" },
            ].map((tier, idx) => (
              <div key={idx} className={`bg-gray-900 rounded-2xl p-6 border ${tier.border} ${tier.glow} relative overflow-hidden group hover:-translate-y-2 transition-transform`}>
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${tier.color}`} />
                <p className="text-sm text-gray-400 font-bold mb-2 uppercase">{tier.rank} Position</p>
                <h3 className={`text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${tier.color}`}>
                  {tier.prize}
                </h3>
              </div>
            ))}
          </div>
          
          <div className="inline-block bg-green-500/10 border border-green-500/30 px-8 py-3 rounded-full">
            <p className="text-green-400 font-bold text-lg md:text-xl uppercase tracking-wider">
              + Many More Cash Prizes Every Month!
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA for Mobile Users scrolling down */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Ready to Start Your Journey?</h2>
        <a 
          href="https://play.google.com/store/apps/details?id=com.bearbull.cryptosimulator" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 bg-green-500 text-black px-10 py-5 rounded-2xl font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(34,197,94,0.4)]"
        >
          <div className="flex items-center gap-3">
            <Smartphone className="w-6 h-6" />
            Download Free App Now
          </div>
        </a>
      </section>
    </motion.div>
  );
};

export default Download;
