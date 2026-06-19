import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  BarChart3,
  Globe,
  Trophy,
  Target,
  ArrowRight,
  Gift,
  Medal,
  Crown,
  Star,
  Activity,
  ShieldCheck,
  TrendingUp,
  Box
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon: Icon, title, desc, colorClass, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white rounded-[2rem] p-8 border border-gray-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-300 group"
  >
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${colorClass}`}>
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-2xl font-black text-[#0a0a0f] mb-4">{title}</h3>
    <p className="text-[#64748b] leading-relaxed text-lg">{desc}</p>
  </motion.div>
);

const Features = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#fcfcfd] min-h-screen pt-24 overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_#00ff8815_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0a0a0f] text-[#00ff88] text-sm font-bold mb-8 uppercase tracking-widest shadow-xl">
              <Star className="w-4 h-4 fill-current" />
              Next-Gen Trading Simulator
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0a0a0f] mb-8 leading-[1.05] tracking-tight">
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-emerald-600">Champions.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#64748b] max-w-3xl mx-auto leading-relaxed">
              Experience the ultimate blend of professional crypto trading and addictive gameplay. Level up, earn badges, and win real cash.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Trading Features */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-black text-[#0a0a0f]">Pro Trading Engine</h2>
             <p className="text-[#64748b] mt-4 text-lg">Practice with the exact same tools used by Wall Street.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Activity} 
              title="Real-Time Live Data" 
              desc="Our simulator uses direct Binance APIs. If Bitcoin moves in the real world, it moves in your virtual portfolio instantly."
              colorClass="bg-blue-50 text-blue-600 border border-blue-100"
              delay={0.1}
            />
            <FeatureCard 
              icon={TrendingUp} 
              title="Margin & Leverage" 
              desc="Want to go big? Use virtual margin trading to amplify your positions and test high-risk strategies safely."
              colorClass="bg-purple-50 text-purple-600 border border-purple-100"
              delay={0.2}
            />
            <FeatureCard 
              icon={BarChart3} 
              title="Advanced Analytics" 
              desc="Track your win rate, profit margins, and portfolio growth with beautiful, easy-to-understand charts."
              colorClass="bg-orange-50 text-orange-600 border border-orange-100"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Gamification Section (Missions, Mystery Box, Badges, Levels) */}
      <section className="py-24 bg-[#0a0a0f] text-white relative px-6 mt-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_right,_#00ff8810_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#00ff88] font-bold tracking-widest uppercase mb-4 block">Gamified Experience</span>
            <h2 className="text-5xl lg:text-6xl font-black mb-6">Play. Learn. Dominate.</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">Trading shouldn't be boring. We've added missions, loot, and levels to keep you engaged every single day.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Daily Missions */}
            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-10 rounded-[3rem] hover:border-[#00ff88]/50 transition-colors">
               <div className="flex items-center gap-6 mb-8">
                 <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                   <Target className="w-8 h-8" />
                 </div>
                 <h3 className="text-3xl font-black">Daily Missions</h3>
               </div>
               <p className="text-gray-400 text-lg leading-relaxed mb-6">Log in daily and complete specific trading tasks like "Make 3 profitable trades" or "Use Margin on ETH" to earn massive XP boosts and virtual cash bonuses.</p>
               <ul className="space-y-3">
                 <li className="flex items-center gap-3 text-sm font-bold text-gray-300"><ShieldCheck className="w-5 h-5 text-[#00ff88]" /> Refreshes every 24 hours</li>
                 <li className="flex items-center gap-3 text-sm font-bold text-gray-300"><ShieldCheck className="w-5 h-5 text-[#00ff88]" /> Claim bonus virtual portfolio funds</li>
               </ul>
            </div>

            {/* Mystery Box */}
            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-10 rounded-[3rem] hover:border-[#00ff88]/50 transition-colors">
               <div className="flex items-center gap-6 mb-8">
                 <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                   <Box className="w-8 h-8" />
                 </div>
                 <h3 className="text-3xl font-black">Mystery Boxes</h3>
               </div>
               <p className="text-gray-400 text-lg leading-relaxed mb-6">Feeling lucky? Unlock special Mystery Boxes by completing weekly streaks. Inside, you'll find rare profile badges, huge XP multipliers, and surprise rewards!</p>
               <ul className="space-y-3">
                 <li className="flex items-center gap-3 text-sm font-bold text-gray-300"><ShieldCheck className="w-5 h-5 text-[#00ff88]" /> Drop rates based on trading volume</li>
                 <li className="flex items-center gap-3 text-sm font-bold text-gray-300"><ShieldCheck className="w-5 h-5 text-[#00ff88]" /> Unlock Legendary cosmetic items</li>
               </ul>
            </div>

            {/* Levels */}
            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-10 rounded-[3rem] hover:border-[#00ff88]/50 transition-colors">
               <div className="flex items-center gap-6 mb-8">
                 <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400">
                   <Crown className="w-8 h-8" />
                 </div>
                 <h3 className="text-3xl font-black">Levels & Ranks</h3>
               </div>
               <p className="text-gray-400 text-lg leading-relaxed">Start as a 'Novice' and trade your way up to 'Grandmaster'. Every profitable trade gives you XP. Higher levels unlock higher margin limits and exclusive tournaments.</p>
            </div>

            {/* Badges */}
            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-10 rounded-[3rem] hover:border-[#00ff88]/50 transition-colors">
               <div className="flex items-center gap-6 mb-8">
                 <div className="w-16 h-16 rounded-2xl bg-pink-500/20 flex items-center justify-center text-pink-400">
                   <Medal className="w-8 h-8" />
                 </div>
                 <h3 className="text-3xl font-black">Achievement Badges</h3>
               </div>
               <p className="text-gray-400 text-lg leading-relaxed">Show off your skills! Earn permanent badges for milestones like "100% Profit in a Day" or "Top 10 Global". Display them proudly on your public profile.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards & Leaderboard Highlight */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-yellow-100 text-yellow-600 mb-8 shadow-lg">
              <Trophy className="w-10 h-10" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-[#0a0a0f] mb-8 leading-tight">Global Leaderboard <br />& Real Rewards</h2>
            <p className="text-xl text-[#64748b] leading-relaxed mb-10">
              Your virtual profits have real-world value. Climb the global leaderboard and compete against the best. The top traders at the end of the month win cold, hard cash. 
            </p>
            <div className="bg-[#0a0a0f] text-white p-6 rounded-3xl inline-flex gap-8 items-center shadow-2xl">
               <div>
                 <p className="text-gray-400 text-sm font-bold uppercase mb-1">1st Place Prize</p>
                 <p className="text-3xl font-black text-[#00ff88]">$500 Cash</p>
               </div>
               <div className="w-px h-12 bg-gray-800"></div>
               <div>
                 <p className="text-gray-400 text-sm font-bold uppercase mb-1">Total Payouts</p>
                 <p className="text-3xl font-black text-white">$15K+ Paid</p>
               </div>
            </div>
          </div>

          {/* Visual Mockup */}
          <div className="lg:w-1/2 w-full relative">
            <div className="aspect-[4/3] bg-gray-50 rounded-[3rem] border-2 border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.05)] p-8 overflow-hidden relative">
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500" />
               <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
                 <h3 className="text-2xl font-black">Top Traders</h3>
                 <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Season 5</span>
               </div>
               
               <div className="space-y-4 relative z-10">
                 {[
                   { rank: 1, name: "CryptoKing99", profit: "+452.8%", prize: "$500" },
                   { rank: 2, name: "BearHunter", profit: "+389.2%", prize: "$400" },
                   { rank: 3, name: "SatoshiFan", profit: "+310.5%", prize: "$350" }
                 ].map((user) => (
                   <div key={user.rank} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                     <div className="flex items-center gap-4">
                       <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-white ${user.rank === 1 ? 'bg-yellow-500' : user.rank === 2 ? 'bg-gray-400' : 'bg-orange-500'}`}>
                         {user.rank}
                       </div>
                       <span className="font-bold text-lg">{user.name}</span>
                     </div>
                     <div className="text-right">
                       <p className="text-[#00ff88] font-black text-lg">{user.profit}</p>
                       <p className="text-xs font-bold text-gray-500 uppercase">Wins {user.prize}</p>
                     </div>
                   </div>
                 ))}
               </div>
               {/* Fade out effect at bottom */}
               <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent z-20" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto bg-[#00ff88] rounded-[4rem] p-16 lg:p-24 text-center relative overflow-hidden shadow-[0_30px_60px_rgba(0,255,136,0.3)] hover:shadow-[0_40px_80px_rgba(0,255,136,0.4)] transition-shadow duration-500">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <h2 className="text-5xl lg:text-7xl font-black text-[#0a0a0f] mb-8 relative z-10 tracking-tight">
            Stop waiting. <br/>Start trading.
          </h2>
          <p className="text-[#0a0a0f]/80 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium relative z-10">
            Download the app, claim your daily mission, open your first mystery box, and climb to the top!
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.bearbull.cryptosimulator"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#0a0a0f] text-white px-12 py-6 rounded-full font-black text-xl hover:scale-110 active:scale-95 transition-all relative z-10 shadow-2xl"
          >
            Download Free App
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

    </motion.div>
  );
};

export default Features;
