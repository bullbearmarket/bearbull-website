import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  RefreshCw, 
  Trophy, 
  Crown, 
  Calculator, 
  LineChart, 
  Wallet, 
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

const GuideSection = ({ icon: Icon, title, id, children }) => (
  <motion.div 
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-24 scroll-mt-32"
  >
    <div className="flex items-center gap-4 mb-8">
      <div className="w-12 h-12 bg-[#00ff88]/10 rounded-xl flex items-center justify-center">
        <Icon className="w-6 h-6 text-[#0a0a0f]" />
      </div>
      <h2 className="text-3xl font-black text-[#0a0a0f]">{title}</h2>
    </div>
    <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 lg:p-12 shadow-sm">
      {children}
    </div>
  </motion.div>
);

const Guide = () => {
  const quickLinks = [
    { name: "Paper Trading", id: "paper-trading", icon: LineChart },
    { name: "Monthly Reset", id: "monthly-reset", icon: RefreshCw },
    { name: "Rewards System", id: "rewards", icon: Trophy },
    { name: "Premium Features", id: "premium", icon: Crown },
    { name: "Risk Calculator", id: "risk-calc", icon: Calculator },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 bg-[#fcfcfd]"
    >
      {/* Hero Section */}
      <section className="section-padding !pb-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-black text-[#0a0a0f] mb-8 leading-tight">
              The BearBull <br />
              <span className="premium-gradient-text">Masterclass.</span>
            </h1>
            <p className="text-xl text-[#64748b] leading-relaxed mb-12">
              New to crypto trading? Our guide explains everything you need to know about the simulator, 
              the competition, and how to become a top-tier trader.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Layout */}
      <section className="section-padding !pt-0">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-2">
              <p className="text-xs font-bold text-[#64748b] uppercase tracking-widest mb-4 px-4">Jump to section</p>
              {quickLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-[#64748b] hover:bg-white hover:text-[#0a0a0f] hover:shadow-sm transition-all group"
                >
                  <link.icon className="w-4 h-4 transition-colors group-hover:text-[#00ff88]" />
                  {link.name}
                </a>
              ))}
            </div>
          </aside>

          {/* Guide Content */}
          <div className="flex-1 max-w-3xl">
            
            <GuideSection title="How Paper Trading Works" id="paper-trading" icon={LineChart}>
              <p className="text-[#64748b] text-lg leading-relaxed mb-8">
                Paper trading is a simulated trading process which allows you to practice buying and selling crypto 
                without using real money. In BearBull, we provide you with <span className="font-bold text-[#0a0a0f]">$10,000 in virtual USDT</span>.
              </p>
              <div className="grid gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center font-bold text-sm">1</div>
                  <p className="text-[#64748b]"><span className="font-bold text-[#0a0a0f]">Live Market Sync:</span> Every price you see is pulled directly from global exchanges. If Bitcoin moves 2% in the real world, it moves 2% in BearBull.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center font-bold text-sm">2</div>
                  <p className="text-[#64748b]"><span className="font-bold text-[#0a0a0f]">Order Execution:</span> We simulate Market and Limit orders. Market orders execute instantly, while Limit orders wait for the market to reach your specified price.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center font-bold text-sm">3</div>
                  <p className="text-[#64748b]"><span className="font-bold text-[#0a0a0f]">PnL Tracking:</span> Your profit and loss are calculated in real-time, allowing you to see the impact of market volatility on your virtual portfolio.</p>
                </div>
              </div>
            </GuideSection>

            <GuideSection title="The Monthly Reset" id="monthly-reset" icon={RefreshCw}>
              <p className="text-[#64748b] text-lg leading-relaxed mb-8">
                To keep the competition fair and exciting, BearBull operates on a monthly seasonal cycle.
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#00ff88]" /> What happens on the 1st?
                </h4>
                <ul className="space-y-3 text-[#64748b] text-sm">
                  <li>• All portfolios are reset back to the starting balance ($10,000 USDT).</li>
                  <li>• Open positions are automatically closed at market price.</li>
                  <li>• The global leaderboard is cleared for the new season.</li>
                  <li>• Winners from the previous month are finalized and rewards are processed.</li>
                </ul>
              </div>
            </GuideSection>
