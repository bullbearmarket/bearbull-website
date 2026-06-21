import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  PlayCircle, 
  Trophy, 
  Banknote,
  ShieldCheck,
  TrendingUp,
  Wallet,
  Star,
  Users,
  CheckCircle2,
  Lock,
  Crown,
  Award,
  ArrowRight
} from 'lucide-react';

const Download = () => {
  
  // Facebook Pixel Dynamically Initialize & Track
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 1. Check if Facebook Pixel Script is already injected, if not, inject it
      if (!window.fbq) {
        window._fbq = window._fbq || [];
        window.fbq = function() {
          window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments);
        };
        if (!window._fbq) window._fbq = window.fbq;
        window.fbq.push = window.fbq;
        window.fbq.loaded = true;
        window.fbq.version = '2.0';
        window.fbq.queue = [];
        
        const t = document.createElement('script');
        t.async = true;
        t.src = 'https://connect.facebook.net/en_US/fbevents.js';
        const s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(t, s);
      }

      // 2. Initialize with your Pixel ID (Aman Kumar's Pixel ID)
      window.fbq('init', '1988202131783334');
      window.fbq('track', 'PageView');
    }
  }, []);

  // Facebook Pixel Lead Conversion Tracking on Button Click
  const handleDownloadClick = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'BearBull App Download Click',
        content_category: 'App Install Redirect',
        value: 0.00,
        currency: 'INR'
      });
      console.log('Facebook Pixel: Lead Event Tracked!');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-28 bg-[#0a0a0f] text-white min-h-screen pb-24 md:pb-0 font-sans selection:bg-[#00ff88] selection:text-black relative overflow-hidden"
    >
      {/* Floating Neon Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00ff88]/15 via-transparent to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-yellow-500/5 blur-[150px] pointer-events-none rounded-full" />

      {/* Official Identity & Security Bar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-white/5 mb-12 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-black flex items-center justify-center p-1 border border-white/10">
            <img src="/logo.png" alt="BearBull Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="text-xs md:text-sm font-black tracking-wider uppercase text-white">Official Download Portal</span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="inline-block w-2 h-2 rounded-full bg-[#00ff88] animate-pulse"></span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Live & Secured Connection</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
          <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3.5 py-2 rounded-full text-white">
            🇮🇳 Real Indian Platform
          </span>
          <span className="flex items-center gap-1.5 bg-[#00ff88]/10 border border-[#00ff88]/20 px-3.5 py-2 rounded-full text-[#00ff88]">
            🛡️ Play Protect Verified
          </span>
        </div>
      </div>

      {/* Hero / Action Section */}
      <section className="relative px-6 py-10 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Glowing Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-[#00ff88] text-xs sm:text-sm font-bold mb-8 uppercase tracking-widest shadow-[0_0_20px_rgba(0,255,136,0.1)]">
            <Trophy className="w-4 h-4 text-[#00ff88]" />
            Win Up To ₹47,500 Cash Prizes Every Month
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
            Learn Trading Risk-Free. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-emerald-400 to-yellow-400 drop-shadow-[0_0_30px_rgba(0,255,136,0.25)]">
              Earn Real Money Free!
            </span>
          </h1>

          {/* Core App Information */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Start with <strong className="text-white"> $10,000 </strong> virtual money. Practice with real-time market data. <span className="text-yellow-400 font-bold border-b border-yellow-400/30">100% Free & No Investment Required</span> — top the leaderboard and withdraw rewards directly to your UPI handle!
          </p>

          {/* Pulse Pulsing Download Button */}
          <div className="flex flex-col items-center justify-center gap-4 mb-16">
            <a 
              href="https://play.google.com/store/apps/details?id=com.bearbull.cryptosimulator" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownloadClick}
              className="relative group flex items-center justify-center gap-4 bg-[#00ff88] text-black px-12 py-6 rounded-[2.5rem] font-black text-xl md:text-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(0,255,136,0.4)] hover:shadow-[0_0_80px_rgba(0,255,136,0.7)] overflow-hidden"
            >
              {/* Animated Shimmer Light Effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              
              <PlayCircle className="w-9 h-9" />
              <div className="text-left">
                <div className="text-[10px] uppercase opacity-80 leading-none mb-1 font-extrabold tracking-wider">Download Free App</div>
                <div className="text-2xl md:text-3xl leading-none font-black tracking-tight">GET IT ON Google Play</div>
              </div>
            </a>
            
            {/* Quick Metrics */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-gray-400 font-bold">
              <span className="flex items-center gap-1.5 text-yellow-500"><Star className="w-4 h-4 fill-yellow-500" /> 4.9/5 Rating</span>
              <span>•</span>
              <span>⚡ 100% Free & Without Any Investment</span>
              <span>•</span>
              <span>📂 Size: ~19MB</span>
            </div>
          </div>

          {/* Quick Badges Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-white/5">
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center hover:bg-white/[0.05] transition-all">
              <span className="text-3xl mb-2">🇮🇳</span>
              <span className="text-sm font-bold text-white">Indian Platform</span>
              <span className="text-[10px] text-gray-400 mt-1">Real Indian App for Traders</span>
            </div>
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center hover:bg-white/[0.05] transition-all">
              <span className="text-3xl mb-2">💰</span>
              <span className="text-sm font-bold text-[#00ff88]">Zero Investment</span>
              <span className="text-[10px] text-gray-400 mt-1">Free to Trade & Win</span>
            </div>
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center hover:bg-white/[0.05] transition-all">
              <span className="text-3xl mb-2">🏆</span>
              <span className="text-sm font-bold text-white">Cash Rewards</span>
              <span className="text-[10px] text-gray-400 mt-1">Every Month Payouts</span>
            </div>
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center hover:bg-white/[0.05] transition-all">
              <span className="text-3xl mb-2">⚡</span>
              <span className="text-sm font-bold text-white">Live Market Data</span>
              <span className="text-[10px] text-gray-400 mt-1">Real-time Binance Feeds</span>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Cash Rewards Cards Section */}
      <section className="py-20 bg-[#0d0d15] border-y border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00ff88]/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block p-4 bg-yellow-500/10 rounded-full mb-6 border border-yellow-500/20">
              <Trophy className="w-10 h-10 text-yellow-500 animate-bounce" />
            </div>
            <h2 className="text-3xl md:text-6xl font-black text-white mb-4">
              Monthly <span className="text-yellow-500">Cash Prizes</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-medium">
              Join the competition free. Top the virtual leaderboard and win real money. No deposits, withdraw directly to your account.
            </p>
          </div>

          {/* Premium Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto mb-12">
            {[
              { rank: "1st Position", prize: "₹47,500", usd: "$500", color: "from-yellow-400 to-amber-600", bg: "bg-gradient-to-b from-yellow-500/20 to-black/90", border: "border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.25)]", icon: <Crown className="w-8 h-8 text-yellow-500" /> },
              { rank: "2nd Position", prize: "₹38,000", usd: "$400", color: "from-gray-300 to-gray-500", bg: "bg-gradient-to-b from-gray-500/10 to-black/90", border: "border-gray-500/30", icon: <Award className="w-8 h-8 text-gray-400" /> },
              { rank: "3rd Position", prize: "₹33,200", usd: "$350", color: "from-amber-600 to-amber-800", bg: "bg-gradient-to-b from-amber-700/10 to-black/90", border: "border-amber-600/30", icon: <Award className="w-8 h-8 text-amber-600" /> },
              { rank: "4th Position", prize: "₹23,700", usd: "$250", color: "from-[#00ff88] to-emerald-700", bg: "bg-gradient-to-b from-[#00ff88]/10 to-black/90", border: "border-[#00ff88]/20", icon: <Award className="w-8 h-8 text-[#00ff88]" /> },
              { rank: "5th Position", prize: "₹19,000", usd: "$200", color: "from-[#00ff88] to-emerald-700", bg: "bg-gradient-to-b from-[#00ff88]/10 to-black/90", border: "border-[#00ff88]/20", icon: <Award className="w-8 h-8 text-[#00ff88]" /> },
            ].map((tier, idx) => (
              <div 
                key={idx} 
                className={`rounded-3xl p-6 border ${tier.bg} ${tier.border} relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center`}
              >
                {/* Top decorative gradient line */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${tier.color}`} />
                
                {/* Rank Icon */}
                <div className="mb-4 bg-white/5 p-3 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  {tier.icon}
                </div>

                <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider mb-2">{tier.rank}</p>
                <h3 className={`text-2xl sm:text-3xl font-black mb-1 text-transparent bg-clip-text bg-gradient-to-r ${tier.color}`}>
                  {tier.prize}
                </h3>
                <p className="text-[10px] text-gray-400 font-bold">{tier.usd} Equivalent</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="inline-flex items-center gap-2 text-xs md:text-sm text-gray-400 font-semibold bg-white/5 border border-white/10 px-6 py-3.5 rounded-full">
              💳 Withdraw Rewards Directly via: <strong className="text-white">UPI (GPay, PhonePe, Paytm, BHIM)</strong> or <strong className="text-white">USDT/USDC</strong>
            </p>
          </div>
        </div>
      </section>

      {/* How to Start and Win - 3 Simple Steps */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-16">
            Start Earning In <span className="text-[#00ff88]">3 Steps</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-white/[0.01] border border-white/5 rounded-3xl p-8 relative flex flex-col hover:border-[#00ff88]/20 transition-colors">
              <span className="absolute -top-6 left-8 bg-[#00ff88] text-black w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-black shadow-lg shadow-[#00ff88]/20">1</span>
              <h3 className="text-xl font-bold text-white mb-3 mt-4">Install Free App</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Download the official app free from Google Play Store. 100% free with no hidden charges.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white/[0.01] border border-white/5 rounded-3xl p-8 relative flex flex-col hover:border-[#00ff88]/20 transition-colors">
              <span className="absolute -top-6 left-8 bg-[#00ff88] text-black w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-black shadow-lg shadow-[#00ff88]/20">2</span>
              <h3 className="text-xl font-bold text-white mb-3 mt-4">Trade Risk-Free</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Use your free ₹8,00,000 virtual cash to buy and sell. Trade with live charts and build your portfolio.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white/[0.01] border border-white/5 rounded-3xl p-8 relative flex flex-col hover:border-yellow-500/20 transition-colors">
              <span className="absolute -top-6 left-8 bg-yellow-500 text-black w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-black shadow-lg shadow-yellow-500/20">3</span>
              <h3 className="text-xl font-bold text-white mb-3 mt-4">Top Leaderboard</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Rank among the top traders at the end of the month. Withdraw cash prizes directly through UPI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Security Features */}
      <section className="py-16 bg-black/40 border-t border-white/5 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-white">Trust & Security Shield</h2>
          <div className="flex flex-wrap justify-center gap-10 text-sm font-semibold text-gray-400">
            <span className="flex items-center gap-2"><Lock className="w-5 h-5 text-[#00ff88]" /> Safe & Secure Data</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#00ff88]" /> Play Store Protected</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#00ff88]" /> 100% Legal & Risk Free</span>
          </div>
        </div>
      </section>

      {/* Bottom Final CTA */}
      <section className="py-24 px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Start Your Risk-Free Journey Today!</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">No card required. No deposits. Just pure learning and cash prizes.</p>
        
        <a 
          href="https://play.google.com/store/apps/details?id=com.bearbull.cryptosimulator" 
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDownloadClick}
          className="inline-flex items-center gap-3 bg-[#00ff88] text-black px-12 py-5 rounded-[2rem] font-black text-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(0,255,136,0.3)] hover:shadow-[0_0_60px_rgba(0,255,136,0.5)]"
        >
          <Smartphone className="w-6 h-6" />
          Install Free Android App Now
        </a>
      </section>

      {/* Sticky Bottom Conversion Bar for Mobile Devices */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-md border-t border-white/10 p-4 flex items-center justify-between md:hidden shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-black flex items-center justify-center p-1 border border-gray-800">
            <img src="/logo.png" alt="BearBull Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <p className="text-xs font-black text-white tracking-wide uppercase">BearBull Market</p>
            <p className="text-[10px] text-[#00ff88] font-bold">★★★★★ 100% Free App</p>
          </div>
        </div>
        <a 
          href="https://play.google.com/store/apps/details?id=com.bearbull.cryptosimulator"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDownloadClick}
          className="bg-[#00ff88] text-black px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(0,255,136,0.3)] active:scale-95 transition-transform"
        >
          Install Now
        </a>
      </div>
    </motion.div>
  );
};

export default Download;
