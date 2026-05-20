import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  BarChart3,
  Globe,
  Smartphone,
  Trophy,
  Clock,
  Layers,
  Target,
  ArrowRight,
  TrendingUp,
  Activity
} from 'lucide-react';

import { Link } from 'react-router-dom';
import SEO from '../components/utils/SEO';

const features = [
  {
    icon: Zap,
    title: 'Fast Trading Engine',
    description:
      'Experience fast and realistic crypto market simulations with live-style execution.',
    color: 'text-green-500'
  },
  {
    icon: Globe,
    title: 'Live Market Data',
    description:
      'Track real-time market movements and practice strategies in a dynamic environment.',
    color: 'text-blue-500'
  },
  {
    icon: Target,
    title: 'Risk Management',
    description:
      'Use stop-loss strategies and portfolio protection techniques like professional traders.',
    color: 'text-yellow-500'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description:
      'Analyze portfolio growth, performance metrics, and trading statistics.',
    color: 'text-purple-500'
  },
  {
    icon: Trophy,
    title: 'Leaderboard System',
    description:
      'Compete with global traders and improve your ranking every season.',
    color: 'text-orange-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    description:
      'Access BearBull easily on mobile devices with a smooth interface.',
    color: 'text-pink-500'
  }
];

const Features = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <SEO
        title="BearBull Features"
        description="Explore BearBull crypto simulator features including portfolio analytics, live market simulation, leaderboards, and trading tools."
      />

      {/* Hero Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-black text-black mb-8">
            Professional Trading <br />
            Tools & Features
          </h1>

          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            BearBull provides powerful crypto simulation tools designed for
            learning, strategy testing, and competitive trading practice.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-white border border-gray-200 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="mb-6">
                <feature.icon className={`w-12 h-12 ${feature.color}`} />
              </div>

              <h3 className="text-2xl font-black text-black mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engine Section */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl lg:text-6xl font-black mb-10">
              Real-Time Trading Experience
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <Clock className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-xl mb-2">
                    Fast Execution
                  </h4>

                  <p className="text-gray-400">
                    Simulated market execution built for realistic trading practice.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Layers className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-xl mb-2">
                    Multi Asset Support
                  </h4>

                  <p className="text-gray-400">
                    Practice trading across multiple crypto assets and strategies.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Activity className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-xl mb-2">
                    Portfolio Tracking
                  </h4>

                  <p className="text-gray-400">
                    Monitor portfolio growth and trading performance in real time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-[2rem] p-10 border border-gray-800">
            <div className="text-center">
              <TrendingUp className="w-24 h-24 text-green-400 mx-auto mb-6" />

              <h3 className="text-3xl font-black mb-4">
                Market Simulation Engine
              </h3>

              <p className="text-gray-400">
                Built for learning, analysis, and competitive trading simulation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-yellow-400 rounded-[3rem] p-16 text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-black mb-8">
            Ready to Start Trading?
          </h2>

          <p className="text-black/70 text-xl mb-10 max-w-2xl mx-auto">
            Join BearBull and improve your crypto trading skills with a premium
            simulator experience.
          </p>

          <Link
            to="/download"
            className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-all"
          >
            Download Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Features;
