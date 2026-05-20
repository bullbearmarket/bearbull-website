import React from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  Crown,
  Gift,
  CheckCircle2,
  ShieldCheck,
  Zap,
  TrendingUp,
  Award,
  ArrowRight,
  Wallet,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/utils/SEO';

const RewardCard = ({ icon: Icon, title, description, accent }) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
  >
    <div
      className="absolute top-0 right-0 w-40 h-40 opacity-10 blur-3xl rounded-full"
      style={{ backgroundColor: accent }}
    />

    <div className="relative z-10">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
        style={{ backgroundColor: `${accent}15` }}
      >
        <Icon className="w-8 h-8" style={{ color: accent }} />
      </div>

      <h3 className="text-2xl font-black text-[#0a0a0f] mb-4">
        {title}
      </h3>

      <p className="text-[#64748b] leading-relaxed mb-6">
        {description}
      </p>

      <div className="flex items-center gap-2 text-sm font-bold text-[#0a0a0f]">
        <CheckCircle2 className="w-4 h-4 text-[#00ff88]" />
        Verified & Secure Reward System
      </div>
    </div>
  </motion.div>
);

const rewardCards = [
  {
    icon: Gift,
    title: 'Digital Gift Cards',
    description:
      'Monthly winners receive premium digital gift cards redeemable on major global platforms and online services.',
    accent: '#ffd700'
  },
  {
    icon: Trophy,
    title: 'Leaderboard Rewards',
    description:
      'Top-performing traders on the monthly leaderboard unlock exclusive reward tiers and recognition badges.',
    accent: '#00ff88'
  },
  {
    icon: Crown,
    title: 'Pro Member Benefits',
    description:
      'Premium users gain access to exclusive competitions, advanced analytics, and future reward campaigns.',
    accent: '#b8860b'
  }
];

const Rewards = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#fcfcfd] pt-24"
    >
      <SEO
        title="BearBull Rewards"
        description="Compete in BearBull trading competitions and unlock monthly digital rewards, leaderboard prizes, and premium trader benefits."
      />

      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#ffd700]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#ffd700]/10 border border-[#ffd700]/20 text-[#b8860b] text-sm font-black uppercase tracking-widest mb-8">
              <Award className="w-4 h-4" />
              Competitive Reward System
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-[#0a0a0f] leading-[1.05] tracking-tight mb-8">
              Trade Smarter. <br />
              <span className="premium-gradient-text">
                Earn Real Rewards.
              </span>
            </h1>

            <p className="text-xl text-[#64748b] leading-relaxed max-w-3xl mx-auto mb-12">
              BearBull rewards disciplined and high-performing traders through
              leaderboard competitions, premium benefits, and monthly digital
              reward campaigns — all inside a completely risk-free simulator.
            </p>

            <Link
              to="/download"
              className="inline-flex items-center gap-3 bg-[#0a0a0f] text-white px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-all"
            >
              Start Competing
              <ArrowRight className="w-5 h-5 text-[#ffd700]" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-100 rounded-[2rem] p-10 text-center shadow-sm">
            <Wallet className="w-10 h-10 text-[#00ff88] mx-auto mb-5" />
            <div className="text-4xl font-black text-[#0a0a0f] mb-2">
              Monthly
            </div>
            <p className="text-[#64748b] font-medium">
              Reward Distribution Cycle
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-[2rem] p-10 text-center shadow-sm">
            <TrendingUp className="w-10 h-10 text-[#ffd700] mx-auto mb-5" />
            <div className="text-4xl font-black text-[#0a0a0f] mb-2">
              Top Traders
            </div>
            <p className="text-[#64748b] font-medium">
              Ranked Through Verified Performance
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-[2rem] p-10 text-center shadow-sm">
            <ShieldCheck className="w-10 h-10 text-[#3b82f6] mx-auto mb-5" />
            <div className="text-4xl font-black text-[#0a0a0f] mb-2">
              Secure
            </div>
            <p className="text-[#64748b] font-medium">
              Fair & Anti-Abuse Protected System
            </p>
          </div>
        </div>
      </section>

      {/* Rewards Grid */}
      <section className="section-padding bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black text-[#0a0a0f] mb-6 tracking-tight">
              Supported Reward Programs
            </h2>

            <p className="text-[#64748b] text-xl max-w-3xl mx-auto leading-relaxed">
              Designed for competitive traders who consistently improve their
              market performance using disciplined strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {rewardCards.map((reward, index) => (
              <RewardCard
                key={index}
                icon={reward.icon}
                title={reward.title}
                description={reward.description}
                accent={reward.accent}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto bg-white border border-gray-100 rounded-[3rem] p-10 lg:p-16 shadow-sm">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff88]/10 text-[#00aa66] font-bold text-sm mb-6">
              <Zap className="w-4 h-4" />
              Fair Competition Rules
            </div>

            <h2 className="text-4xl font-black text-[#0a0a0f] mb-6">
              How Rewards Work
            </h2>

            <p className="text-[#64748b] text-lg leading-relaxed">
              Our reward system is designed to encourage realistic trading,
              healthy competition, and long-term skill development.
            </p>
          </div>

          <div className="space-y-6">
            {[
              'Leaderboard rankings are based on verified trading performance.',
              'Fake activity, manipulation, or exploit attempts may result in permanent disqualification.',
              'Rewards are distributed digitally to eligible winners after monthly review.',
              'BearBull reserves the right to modify reward structures and competition rules.',
              'The platform is a simulator and does not involve real-money trading or investment services.'
            ].map((rule, index) => (
              <div
                key={index}
                className="flex gap-4 items-start p-5 rounded-2xl bg-[#f8f9fa]"
              >
                <CheckCircle2 className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-1" />

                <p className="text-[#64748b] leading-relaxed font-medium">
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#0a0a0f] rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffd700]/10 blur-[120px] rounded-full" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#ffd700] text-sm font-bold mb-8">
                <Star className="w-4 h-4" />
                BearBull Community
              </div>

              <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-8">
                Ready to dominate <br />
                the leaderboard?
              </h2>

              <p className="text-white/60 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                Download BearBull and compete with traders worldwide in a
                premium crypto trading simulator experience.
              </p>

              <Link
                to="/download"
                className="inline-flex items-center gap-3 bg-[#ffd700] text-[#0a0a0f] px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-all"
              >
                Download BearBull
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Rewards;
