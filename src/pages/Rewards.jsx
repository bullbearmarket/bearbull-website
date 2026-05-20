import React from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  ShoppingBag,
  PlayCircle,
  CheckCircle2,
  ArrowRight,
  Gift,
  Award
} from 'lucide-react';

import { Link } from 'react-router-dom';
import SEO from '../components/utils/SEO';

const rewards = [
  {
    icon: ShoppingBag,
    title: 'Amazon Gift Cards',
    description:
      'Earn digital Amazon vouchers through leaderboard performance.',
    color: 'text-orange-500'
  },
  {
    icon: PlayCircle,
    title: 'Google Play Rewards',
    description:
      'Receive Google Play gift cards from seasonal competitions.',
    color: 'text-green-500'
  },
  {
    icon: Gift,
    title: 'Special Bonus Rewards',
    description:
      'Unlock bonus seasonal rewards through active participation.',
    color: 'text-pink-500'
  }
];

const Rewards = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <SEO
        title="BearBull Rewards"
        description="Earn digital rewards and leaderboard prizes with BearBull."
      />

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 font-bold mb-8">
            <Trophy className="w-5 h-5" />
            Monthly Reward Program
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-black mb-8">
            Trade & Earn <br />
            Digital Rewards
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Practice trading, improve strategies, and unlock rewards.
          </p>

        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-gray-50 rounded-[2rem] p-10 border border-gray-200 text-center">
            <div className="text-5xl font-black text-black mb-3">
              Monthly
            </div>

            <p className="text-gray-600 font-medium">
              Reward Distribution
            </p>
          </div>

          <div className="bg-gray-50 rounded-[2rem] p-10 border border-gray-200 text-center">
            <div className="text-5xl font-black text-black mb-3">
              Global
            </div>

            <p className="text-gray-600 font-medium">
              Leaderboard Access
            </p>
          </div>

          <div className="bg-gray-50 rounded-[2rem] p-10 border border-gray-200 text-center">
            <div className="text-5xl font-black text-black mb-3">
              100%
            </div>

            <p className="text-gray-600 font-medium">
              Digital Rewards
            </p>
          </div>

        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-black mb-6">
              Supported Rewards
            </h2>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Premium digital rewards for active traders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {rewards.map((reward, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="bg-white rounded-[2rem] border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all"
              >

                <reward.icon
                  className={`w-14 h-14 mb-6 ${reward.color}`}
                />

                <h3 className="text-2xl font-black text-black mb-4">
                  {reward.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {reward.description}
                </p>

                <div className="flex items-center gap-2 font-semibold text-black">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Verified Digital Rewards
                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="bg-black text-white rounded-[3rem] p-12 lg:p-16">

            <div className="flex items-center gap-4 mb-8">
              <Award className="w-10 h-10 text-yellow-400" />

              <h2 className="text-4xl font-black">
                Reward Rules
              </h2>
            </div>

            <ul className="space-y-5 text-gray-300 text-lg leading-relaxed">
              <li>
                • Rewards are based on leaderboard performance.
              </li>

              <li>
                • Suspicious activity may cause disqualification.
              </li>

              <li>
                • Monthly resets maintain fair competition.
              </li>

              <li>
                • Rewards are distributed digitally.
              </li>
            </ul>

          </div>

        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-yellow-400 rounded-[3rem] p-16 text-center">

          <h2 className="text-4xl lg:text-6xl font-black text-black mb-8">
            Start Competing Today
          </h2>

          <p className="text-black/70 text-xl mb-10 max-w-2xl mx-auto">
            Improve your skills and climb the leaderboard.
          </p>

          <Link
            to="/download"
            className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-all"
          >
            Download App
            <ArrowRight className="w-5 h-5" />
          </Link>

        </div>
      </section>

    </motion.div>
  );
};

export default Rewards;
