import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Globe2, 
  ShieldCheck, 
  TrendingUp, 
  Award,
  Zap,
  CheckCircle2
} from 'lucide-react';

const StatCard = ({ label, value }) => (
  <div className="p-8 rounded-3xl bg-white border border-gray-100 text-center hover:shadow-premium transition-all">
    <div className="text-4xl font-black text-[#0a0a0f] mb-2">{value}</div>
    <div className="text-[#64748b] font-medium text-sm uppercase tracking-widest">{label}</div>
  </div>
);

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      {/* Mission Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="floating-gradient top-[-10%] right-[-10%] opacity-30" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff88]/10 text-[#00ff88] text-sm font-bold mb-8 border border-[#00ff88]/20">
              <Target className="w-4 h-4" />
              OUR MISSION
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-[#0a0a0f] mb-8 leading-tight">
              Democratizing <br />
              <span className="premium-gradient-text">Financial Education.</span>
            </h1>
            <p className="text-xl text-[#64748b] mb-12 leading-relaxed">
              BearBull was born out of a simple realization: the crypto market is the greatest wealth-creation tool of our generation, 
              but it is also the most unforgiving. We built a bridge for the millions of people who want to learn without the fear of losing their hard-earned savings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard label="Active Traders" value="50K+" />
          <StatCard label="Countries" value="120+" />
          <StatCard label="Trades Simulated" value="2.5M+" />
          <StatCard label="Rewards Paid" value="$15K+" />
        </div>
      </section>

      {/* The Vision Section */}
      <section className="section-padding bg-muted/30">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0a0a0f] mb-8 leading-tight">
              Why we built <br /> BearBull Market.
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Risk-Free Mastery",
                  desc: "We believe the best way to learn is by doing. Our simulator provides a consequence-free environment to develop 'market feel'.",
                  icon: ShieldCheck
                },
                {
                  title: "Institutional Accuracy",
                  desc: "Simulation is only useful if it's accurate. We use the same data feeds used by professional trading desks.",
                  icon: Zap
                },
                {
                  title: "Community & Rewards",
                  desc: "Trading can be lonely. We've added a competitive layer to make learning social, engaging, and rewarding.",
                  icon: Award
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
                    <item.icon className="w-6 h-6 text-[#00ff88]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0a0a0f] mb-2">{item.title}</h4>
                    <p className="text-[#64748b] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] bg-white border border-gray-100 p-4 shadow-2xl rotate-3">
              <div className="w-full h-full rounded-[2.5rem] bg-[#0a0a0f] flex items-center justify-center overflow-hidden">
                <Globe2 className="w-48 h-48 text-[#00ff88]/20 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-black text-2xl tracking-tighter">GLOBAL REACH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-[#0a0a0f] mb-6">Our Core Values</h2>
          <p className="text-[#64748b] text-lg">The principles that guide every feature we ship.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Transparency First",
              desc: "From how our data is sourced to how rewards are distributed, we maintain absolute transparency."
            },
            {
              title: "User Centricity",
              desc: "Every update is driven by community feedback. We build for the traders of tomorrow."
            },
            {
              title: "Financial Safety",
              desc: "Our primary goal remains protecting users from financial ruin through proper risk education."
            }
          ].map((value, i) => (
            <div key={i} className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00ff88]/10 mb-6 text-[#00ff88]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a0a0f] mb-4">{value.title}</h3>
              <p className="text-[#64748b] leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team/Contact CTA */}
      <section className="section-padding pt-0">
        <div className="bg-[#0a0a0f] rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#00ff8811_0%,transparent_70%)]" />
          <Users className="w-16 h-16 text-[#00ff88] mx-auto mb-8" />
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-8">Join our global community.</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            Whether you're a seasoned developer, a crypto native, or just starting your journey, 
            there's a place for you at BearBull.
          </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:support@bearbullmarket.in" className="btn-primary">Get in Touch</a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
