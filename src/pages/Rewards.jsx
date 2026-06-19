import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, CheckCircle2, ArrowRight, DollarSign, Wallet, Banknote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Rewards = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#0a0a0f] min-h-screen pt-24"
    >
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#00ff88]/10 text-[#00ff88] font-bold mb-8 border border-[#00ff88]/20">
            <Trophy className="w-5 h-5" />
            Monthly Cash Tournaments
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-[1.1]">
            Trade Smart. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Get Paid in Cash.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Every month, we reward our top traders with real cash prizes. Generate the highest virtual profit, climb the global leaderboard, and withdraw your winnings directly!
          </p>
        </div>
      </section>

      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {[
              { rank: "1st Place", prize: "$500", color: "from-yellow-300 to-yellow-600", bg: "bg-yellow-500/10", border: "border-yellow-500/30" },
              { rank: "2nd Place", prize: "$400", color: "from-gray-300 to-white", bg: "bg-gray-400/10", border: "border-gray-400/30" },
              { rank: "3rd Place", prize: "$350", color: "from-orange-400 to-orange-600", bg: "bg-orange-500/10", border: "border-orange-500/30" },
            ].map((tier, idx) => (
              <div key={idx} className={`${tier.bg} rounded-[2.5rem] p-10 border ${tier.border} text-center relative overflow-hidden`}>
                <p className="text-gray-300 font-bold mb-4 uppercase tracking-widest">{tier.rank}</p>
                <h3 className={`text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r ${tier.color}`}>
                  {tier.prize}
                </h3>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
            <div className="bg-gray-900 rounded-[2rem] p-8 border border-gray-800 text-center">
               <p className="text-gray-400 font-bold uppercase tracking-widest mb-2">4th Place</p>
               <h3 className="text-4xl font-black text-white">$250</h3>
            </div>
            <div className="bg-gray-900 rounded-[2rem] p-8 border border-gray-800 text-center">
               <p className="text-gray-400 font-bold uppercase tracking-widest mb-2">5th Place</p>
               <h3 className="text-4xl font-black text-white">$200</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white px-6 rounded-t-[4rem]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0a0a0f] mb-6">Direct Withdrawals</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Getting paid is easy. We support multiple withdrawal methods globally.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-gray-50 rounded-[2rem] border border-gray-200 p-10">
              <Wallet className="w-12 h-12 text-[#00ff88] mb-6" />
              <h3 className="text-2xl font-black text-[#0a0a0f] mb-4">Crypto Wallets</h3>
              <p className="text-gray-600 leading-relaxed">Global users can withdraw their cash prizes directly to their personal cryptocurrency wallets (USDT/USDC).</p>
            </div>
            <div className="bg-gray-50 rounded-[2rem] border border-gray-200 p-10">
              <Banknote className="w-12 h-12 text-[#00ff88] mb-6" />
              <h3 className="text-2xl font-black text-[#0a0a0f] mb-4">UPI Transfers (India)</h3>
              <p className="text-gray-600 leading-relaxed">Indian traders can instantly withdraw their winnings directly to their bank accounts via UPI.</p>
            </div>
          </div>

          <div className="bg-[#00ff88] rounded-[3rem] p-12 lg:p-20 text-center">
            <h2 className="text-4xl lg:text-5xl font-black text-black mb-8">Start Competing Today</h2>
            <p className="text-black/70 text-xl mb-10 max-w-2xl mx-auto font-medium">
              Download the app, claim your $10,000 virtual portfolio, and start climbing the leaderboard.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.bearbull.cryptosimulator" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-xl"
            >
              Download Free App
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Rewards;
