import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Minus, 
  Search, 
  Wallet, 
  TrendingUp, 
  ShieldCheck,
  MessageCircle,
  Globe2,
  Zap,
  Banknote
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const faqData = [
  {
    category: "General & Platform",
    icon: Globe2,
    questions: [
      {
        q: "What is BearBull Crypto Simulator?",
        a: "BearBull is the world's leading risk-free crypto trading simulator. We provide you with a $100,000 virtual portfolio to trade Bitcoin, Ethereum, and 50+ other cryptocurrencies using real-time live market data from Binance."
      },
      {
        q: "Do I ever need to deposit real money?",
        a: "Absolutely NOT. BearBull is 100% free to play. You do not need to link your bank account, credit card, or deposit any real money to start trading or to win our monthly cash rewards."
      },
      {
        q: "Are the crypto prices and market data real-time?",
        a: "Yes. Our simulator engine uses direct institutional API feeds from Binance. If a coin pumps or dumps in the real world, your virtual portfolio will update instantly, giving you a 100% realistic trading experience."
      },
      {
        q: "Where can I download the BearBull App?",
        a: "The BearBull Crypto Simulator is available exclusively on the Google Play Store for Android users. iOS support is coming soon!"
      }
    ]
  },
  {
    category: "Rewards & Withdrawals (India & Global)",
    icon: Banknote,
    questions: [
      {
        q: "How do I win real cash prizes?",
        a: "Every month, we host a global trading tournament. At the end of the month, traders with the highest virtual profit on the Leaderboard win real cash. 1st Place gets $500, 2nd gets $400, 3rd gets $350, 4th gets $250, and 5th gets $200."
      },
      {
        q: "How can Indian users withdraw their winnings?",
        a: "For our Indian users, withdrawing is seamless. If you win a cash prize, you can withdraw your money instantly and securely directly to your bank account using your UPI ID."
      },
      {
        q: "How can Global (International) users withdraw?",
        a: "Global winners outside of India can receive their cash prizes directly into their Crypto Wallets via stablecoins like USDT (Tether) or USDC."
      },
      {
        q: "Do I have to pay Crypto Tax on BearBull winnings?",
        a: "Since you are not actually buying or selling real cryptocurrencies (you are playing a simulator), standard crypto trading taxes generally do not apply. However, cash prize winnings may be subject to your local jurisdiction's reward/gaming tax laws (like 30% TDS under Section 115BBJ in India for net winnings)."
      },
      {
        q: "When are the leaderboard rewards distributed?",
        a: "The leaderboard resets at the end of every calendar month. Winners are announced on the 1st of the new month, and cash withdrawals are processed within 3-5 business days after email verification."
      }
    ]
  },
  {
    category: "Trading & Gameplay",
    icon: TrendingUp,
    questions: [
      {
        q: "Can I practice Margin and Leverage trading?",
        a: "Yes! Advanced traders can use virtual margin to test high-risk, high-reward strategies safely without risking actual capital. This is perfect for learning how liquidation works."
      },
      {
        q: "What are Daily Missions and how do they work?",
        a: "To make learning engaging, BearBull features daily missions (e.g., 'Make 3 profitable trades'). Completing these missions grants you XP and bonus virtual funds to grow your portfolio faster."
      },
      {
        q: "What is inside the Mystery Box?",
        a: "By leveling up and maintaining trading streaks, you unlock Mystery Boxes. These boxes contain massive virtual portfolio bonuses, rare profile badges, and XP multipliers to help you climb the leaderboard faster."
      },
      {
        q: "How does the ranking and leveling system work?",
        a: "Every profitable trade earns you XP. You start as a 'Novice' and can rank up all the way to 'Grandmaster'. Higher levels unlock exclusive tournaments and higher virtual margin limits."
      }
    ]
  },
  {
    category: "Legal, Security & Anti-Fraud",
    icon: ShieldCheck,
    questions: [
      {
        q: "Is BearBull Market legal in India?",
        a: "Yes, BearBull is a 100% legal skill-based educational platform. Because no real money deposits are involved and you are trading virtual currency, it does not fall under gambling or betting regulations."
      },
      {
        q: "Do you need my crypto wallet private keys?",
        a: "NEVER. We will never ask for your private keys, seed phrases, or banking passwords. We only ask for your public Wallet Address or UPI ID when you request a prize withdrawal."
      },
      {
        q: "Can I use multiple accounts (Sybil attack) to win?",
        a: "No. Creating multiple accounts, using bots, or exploiting the app to manipulate the leaderboard is strictly prohibited. Our advanced anti-fraud system tracks device IDs and IPs. Fraudulent accounts are banned permanently without notice."
      },
      {
        q: "Is my personal data safe with BearBull?",
        a: "Absolutely. We use industry-standard encryption to protect your data. We only collect the minimal information required (like your email) to verify your identity for cash withdrawals. We never sell your data to third parties."
      }
    ]
  }
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);
  const [openQ, setOpenQ] = useState(null);

  // Filter logic
  const allQuestions = useMemo(() => faqData.flatMap(cat => cat.questions), []);
  
  const searchResults = useMemo(() => {
    if (!searchQuery) return [];
    return allQuestions.filter(item => 
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, allQuestions]);

  const currentQuestions = searchQuery 
    ? searchResults 
    : faqData.find(c => c.category === activeCategory)?.questions || [];

  // Generate SEO Schema dynamically
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allQuestions.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#fcfcfd] min-h-screen pt-24 pb-20"
    >
      {/* Dynamic SEO & GEO Tags injection via Helmet */}
      <Helmet>
        <title>FAQ & Support | BearBull Crypto Simulator</title>
        <meta name="description" content="Get answers about BearBull Crypto Simulator. Learn how to withdraw cash rewards via UPI, trade risk-free with Binance data, and our daily missions." />
        <meta name="keywords" content="crypto simulator faq, bearbull support, upi crypto withdrawal, free crypto trading app india, crypto tax india simulator" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Hero Search Section */}
      <section className="bg-[#0a0a0f] text-white pt-24 pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay" />
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00ff88]/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-[#00ff88] font-bold mb-8 border border-white/20 tracking-widest uppercase text-sm shadow-[0_0_20px_rgba(0,255,136,0.1)]">
            <Zap className="w-4 h-4" /> Comprehensive Knowledge Base
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter">How can we help <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-emerald-500">you?</span></h1>
          <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium">Search our database for answers on trading, rewards, UPI withdrawals, and account security.</p>
          
          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-emerald-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <input 
              type="text" 
              placeholder="Search for 'UPI', 'Withdrawal', or 'Margin'..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="relative w-full bg-[#11111a] border-2 border-gray-800 text-white px-8 py-6 rounded-full pl-16 outline-none focus:border-[#00ff88] focus:bg-[#1a1a24] transition-all text-xl font-medium placeholder-gray-500 shadow-2xl"
            />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-7 h-7 text-[#00ff88]" />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-5xl mx-auto px-6 -mt-16 relative z-20">
        
        {/* Category Pills (Visible when not searching) */}
        {!searchQuery && (
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {faqData.map((cat) => (
              <button
                key={cat.category}
                onClick={() => { setActiveCategory(cat.category); setOpenQ(null); }}
                className={`flex items-center gap-3 px-8 py-4 rounded-full font-black text-sm lg:text-base transition-all duration-300 shadow-lg ${
                  activeCategory === cat.category 
                    ? 'bg-[#0a0a0f] text-[#00ff88] scale-105 border border-[#00ff88]/30' 
                    : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-100 hover:text-gray-900'
                }`}
              >
                <cat.icon className={`w-5 h-5 ${activeCategory === cat.category ? 'text-[#00ff88]' : 'text-gray-400'}`} />
                {cat.category}
              </button>
            ))}
          </div>
        )}

        {/* Questions List */}
        <div className="bg-white rounded-[3rem] p-6 lg:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-gray-100">
          
          {searchQuery && (
            <div className="mb-10 text-center">
              <h3 className="text-3xl font-black text-[#0a0a0f]">
                Search Results ({searchResults.length})
              </h3>
              <p className="text-gray-500 mt-2 text-lg">Results for "{searchQuery}"</p>
            </div>
          )}

          {currentQuestions.length > 0 ? (
            <div className="space-y-6">
              <AnimatePresence>
                {currentQuestions.map((faq, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={faq.q}
                    className={`border-2 rounded-[2rem] overflow-hidden transition-all duration-300 ${
                      openQ === i 
                        ? 'border-[#00ff88] bg-[#f8fffc] shadow-[0_10px_30px_rgba(0,255,136,0.1)]' 
                        : 'border-gray-100 bg-white hover:border-[#00ff88]/50 hover:shadow-lg'
                    }`}
                  >
                    <button 
                      onClick={() => setOpenQ(openQ === i ? null : i)}
                      className="w-full p-6 lg:p-8 text-left flex items-center justify-between focus:outline-none group"
                    >
                      <h3 className={`font-black text-xl lg:text-2xl pr-6 transition-colors leading-tight ${openQ === i ? 'text-[#0a0a0f]' : 'text-gray-700 group-hover:text-[#0a0a0f]'}`}>
                        {faq.q}
                      </h3>
                      <div className={`w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-500 shadow-sm ${openQ === i ? 'bg-[#00ff88] text-black rotate-180' : 'bg-gray-100 text-gray-500 group-hover:bg-[#00ff88]/20 group-hover:text-[#0a0a0f]'}`}>
                        {openQ === i ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                      </div>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openQ === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-6 lg:px-8 pb-8 text-[#64748b] text-lg leading-relaxed border-t border-[#00ff88]/20 pt-6 font-medium">
                        <p dangerouslySetInnerHTML={{ 
                          __html: faq.a.replace(/(BearBull|\$100,000|real cash prizes|UPI ID|UPI|Crypto Wallets|100% free|Binance|TDS|Section 115BBJ|USDT)/g, '<strong class="text-[#0a0a0f] font-black bg-[#00ff88]/10 px-1 rounded">$1</strong>') 
                        }} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-300" />
              </div>
              <h3 className="text-3xl font-black text-[#0a0a0f] mb-4">No answers found</h3>
              <p className="text-gray-500 text-lg">Try adjusting your search terms or contact our support team.</p>
            </div>
          )}
        </div>
      </section>

      {/* Extreme CTA for Support */}
      <section className="max-w-7xl mx-auto mt-32 px-6 text-center">
        <div className="bg-[#0a0a0f] rounded-[4rem] p-12 lg:p-24 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#00ff8815_0%,transparent_60%)] pointer-events-none" />
          <MessageCircle className="w-20 h-20 text-[#00ff88] mx-auto mb-8 relative z-10" />
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 relative z-10 tracking-tight">Need Human Assistance?</h2>
          <p className="text-gray-400 text-xl lg:text-2xl mb-12 max-w-3xl mx-auto font-medium relative z-10">
            Our specialized support team operates globally 24/7. We are here to help you with reward payouts, account recovery, and technical issues.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-[#00ff88] text-black px-12 py-6 rounded-full font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(0,255,136,0.3)] hover:shadow-[0_0_60px_rgba(0,255,136,0.5)] relative z-10">
            Contact Support Desk
          </Link>
        </div>
      </section>

    </motion.div>
  );
};

export default FAQ;
