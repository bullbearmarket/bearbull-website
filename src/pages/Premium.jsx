import React from 'react';
import { motion } from 'framer-motion';
import { 
  Crown, 
  Zap, 
  BarChart3, 
  Headphones, 
  Calculator, 
  History, 
  Check,
  Star,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PremiumBenefit = ({ icon: Icon, title, description }) => (
  <div className="flex gap-6 p-8 rounded-3xl border border-gray-100 bg-white hover:border-[#ffd700]/30 transition-all group">
    <div className="flex-shrink-0 w-14 h-14 bg-[#ffd700]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
      <Icon className="w-7 h-7 text-[#0a0a0f]" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-[#0a0a0f] mb-2">{title}</h3>
      <p className="text-[#64748b] leading-relaxed">{description}</p>
    </div>
  </div>
);

const Premium = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#ffd700]/10 blur-[100px] rounded-full" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0a0f] text-[#ffd700] text-sm font-bold mb-8"
          >
            <Crown className="w-4 h-4 fill-[#ffd700]" />
            BEARBULL PRO MEMBERSHIP
          </motion.div>
          <h1 className="text-5xl lg:text-7xl font-black text-[#0a0a0f] mb-8 leading-tight">
            Unlock the Full <br />
            <span className="text-[#ffd700] drop-shadow-sm">Trading Suite.</span>
          </h1>
          <p className="text-xl text-[#64748b] mb-12 max-w-2xl mx-auto leading-relaxed">
            Take your simulation to the next level with professional tools designed for serious traders. 
            Analyze deeper, trade faster, and stand out from the crowd.
          </p>
        </div>
      </section>

      {/* Main Pricing/Benefits Grid */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 gap-6">
            <PremiumBenefit 
              icon={Calculator}
              title="Advanced Risk Calculator"
              description="Precisely calculate position sizes based on your total equity and stop-loss levels. Manage risk like a pro."
            />
            <PremiumBenefit 
              icon={BarChart3}
              title="Pro Portfolio Analytics"
              description="Deep dive into your trading metrics with equity curves, drawdown analysis, and sector exposure charts."
            />
            <PremiumBenefit 
              icon={Zap}
              title="Ultra-Fast Data Refresh"
              description="Get priority access to our data pipelines for the most responsive price updates available in the simulator."
            />
            <PremiumBenefit 
              icon={History}
              title="Unlimited Trade History"
              description="Store and analyze every single trade you've ever made. Perfect for backtesting and strategy refinement."
            />
          </div>

          <div className="relative">
            <div className="bg-white rounded-[3rem] border-2 border-[#ffd700] p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                <Star className="w-12 h-12 text-[#ffd700]/20" />
              </div>
              
              <div className="mb-10">
                <span className="text-[#0a0a0f] font-bold uppercase tracking-widest text-sm">Monthly Plan</span>
                <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-6xl font-black text-[#0a0a0f]">$9.99</span>
                  <span className="text-[#64748b] font-medium">/ month</span>
                </div>
              </div>

              <div className="space-y-6 mb-12">
                {[
                  "Exclusive Gold Pro Badge 👑",
                  "All Advanced Trading Tools",
                  "Priority Premium Support",
                  "Early Access to New Features",
                  "Ad-Free Experience",
                  "Customizable UI Layouts"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#00ff88]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#00ff88]" />
                    </div>
                    <span className="font-semibold text-[#0a0a0f]">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/download" className="w-full bg-[#0a0a0f] text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#2d2d39] transition-all group">
                Upgrade to Pro Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <p className="text-center text-[#64748b] text-sm mt-6">
                Cancel anytime. No hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-white border border-gray-100 p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-shrink-0 w-24 h-24 bg-[#0a0a0f] rounded-[2rem] flex items-center justify-center">
            <Headphones className="w-10 h-10 text-[#00ff88]" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-black text-[#0a0a0f] mb-4">Priority Premium Support</h2>
            <p className="text-[#64748b] text-lg leading-relaxed">
              Premium members get access to our dedicated support channel. Have a question or need technical assistance? 
              Our team of expert traders is ready to help you 24/7 with a response time of less than 2 hours.
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <Link to="/contact" className="btn-outline w-full inline-block text-center">
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badge */}
      <section className="py-20 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <ShieldCheck className="w-8 h-8 text-[#00ff88]" />
          <span className="text-2xl font-black text-[#0a0a0f]">BearBull Secure</span>
        </div>
        <p className="text-[#64748b]">Your payment is processed through secure institutional-grade encryption.</p>
      </section>
    </motion.div>
  );
};

export default Premium;
