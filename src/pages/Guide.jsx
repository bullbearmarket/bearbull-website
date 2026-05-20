import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  TrendingUp,
  RefreshCw,
  Zap
} from 'lucide-react';

import SEO from '../components/utils/SEO';

const GuideSection = ({ title, icon: Icon, children }) => {
  return (
    <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
          <Icon className="w-6 h-6 text-black" />
        </div>

        <h2 className="text-2xl font-black text-black">
          {title}
        </h2>
      </div>

      {children}
    </div>
  );
};

const Guide = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-50 min-h-screen"
    >
      <SEO
        title="Trading Guide"
        description="Learn how BearBull simulator works and improve your trading skills."
      />

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white font-bold mb-8">
            <ShieldCheck className="w-4 h-4" />
            BearBull Trading Guide
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-black mb-8">
            Learn Before <br />
            You Trade
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Understand the platform and improve your trading discipline.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid gap-10">

          <GuideSection
            title="Risk Management"
            icon={TrendingUp}
          >
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Proper risk management is important for long-term success.
              </p>

              <div className="bg-gray-100 rounded-2xl p-6">
                <ul className="space-y-3">
                  <li>• Never risk your full balance.</li>
                  <li>• Always use stop-loss protection.</li>
                  <li>• Avoid emotional trading.</li>
                </ul>
              </div>
            </div>
          </GuideSection>

          <GuideSection
            title="Trading Features"
            icon={Zap}
          >
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                BearBull provides realistic market simulation tools.
              </p>

              <div className="bg-gray-100 rounded-2xl p-6">
                <ul className="space-y-3">
                  <li>• Live market sync</li>
                  <li>• Real-time PnL tracking</li>
                  <li>• Leaderboard system</li>
                </ul>
              </div>
            </div>
          </GuideSection>

          <GuideSection
            title="Monthly Reset System"
            icon={RefreshCw}
          >
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                BearBull uses a monthly seasonal reset cycle.
              </p>

              <div className="bg-gray-100 rounded-2xl p-6">
                <ul className="space-y-3">
                  <li>• Portfolios reset monthly</li>
                  <li>• Positions close automatically</li>
                  <li>• Rewards finalize before reset</li>
                </ul>
              </div>
            </div>
          </GuideSection>

        </div>
      </section>
    </motion.div>
  );
};

export default Guide;
