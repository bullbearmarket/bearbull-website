import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Bell, Globe } from 'lucide-react';

const PolicySection = ({ title, icon: Icon, children }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 bg-[#00ff88]/10 rounded-xl flex items-center justify-center">
        <Icon className="w-5 h-5 text-[#0a0a0f]" />
      </div>
      <h2 className="text-2xl font-bold text-[#0a0a0f]">{title}</h2>
    </div>
    <div className="text-[#64748b] leading-relaxed space-y-4 text-lg">
      {children}
    </div>
  </div>
);

const PrivacyPolicy = () => {
  const lastUpdated = "October 24, 2023";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 bg-[#fcfcfd]"
    >
      {/* Header */}
      <section className="section-padding !pb-12 text-center lg:text-left border-b border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-black text-[#0a0a0f] mb-6">Privacy Policy</h1>
            <p className="text-lg text-[#64748b]">
              Last updated: <span className="text-[#0a0a0f] font-semibold">{lastUpdated}</span>
            </p>
            <p className="mt-6 text-[#64748b] max-w-2xl text-lg">
              At BearBull, your privacy is our priority. This policy outlines how we handle your data and our commitment to keeping your information secure while you use our crypto simulator.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[3rem] border border-gray-100 p-8 lg:p-16 shadow-sm">
            
            <PolicySection title="Information We Collect" icon={Eye}>
              <p>
                To provide a high-quality trading simulation experience, we collect certain information when you register and interact with our platform:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li><span className="font-bold text-[#0a0a0f]">Account Information:</span> Name, email address, and profile picture (if provided via Google/Apple sign-in).</li>
                <li><span className="font-bold text-[#0a0a0f]">Trading Data:</span> Virtual transaction history, portfolio performance, and league rankings.</li>
                <li><span className="font-bold text-[#0a0a0f]">Device Information:</span> Device type, operating system version, and unique device identifiers for security purposes.</li>
              </ul>
            </PolicySection>

            <PolicySection title="How We Use Your Data" icon={Shield}>
              <p>Your data is used exclusively to improve your experience and manage the platform:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>To manage your virtual portfolio and calculate league leaderboards.</li>
                <li>To process reward requests for monthly competition winners.</li>
                <li>To provide premium features and personalized analytics for Pro members.</li>
                <li>To send critical system updates or respond to your support inquiries.</li>
              </ul>
              <p className="mt-4 font-semibold text-[#0a0a0f]">We never sell your personal data to third parties.</p>
            </PolicySection>

            <PolicySection title="Data Security & Storage" icon={Lock}>
              <p>
                We implement institutional-grade security measures to protect your information. Your data is stored on secure, encrypted servers. Access is restricted to authorized personnel only, and all external communications are encrypted via SSL/TLS.
              </p>
              <p>
                Since BearBull is a simulator, <span className="text-[#0a0a0f] font-bold">we never ask for or store your real private keys, seed phrases, or banking passwords.</span>
              </p>
            </PolicySection>

            <PolicySection title="Your Rights & Control" icon={FileText}>
              <p>You have full control over your data at BearBull:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><span className="font-bold text-[#0a0a0f]">Access:</span> You can view your data within the app settings at any time.</li>
                <li><span className="font-bold text-[#0a0a0f]">Correction:</span> You can update your profile information through your account settings.</li>
                <li><span className="font-bold text-[#0a0a0f]">Deletion:</span> You can request permanent account deletion via our "Delete Account" page, which will remove all personal data from our records.</li>
              </ul>
            </PolicySection>

            <PolicySection title="Third-Party Services" icon={Globe}>
              <p>
                We use trusted third-party providers for specific functions:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li><span className="font-bold text-[#0a0a0f]">Analytics:</span> We use aggregated, non-identifiable data to understand platform usage.</li>
                <li><span className="font-bold text-[#0a0a0f]">Cloud Hosting:</span> Our infrastructure is powered by secure global cloud providers.</li>
                <li><span className="font-bold text-[#0a0a0f]">Market Data:</span> Real-time price data is fetched via public APIs (e.g., CoinGecko, Binance).</li>
              </ul>
            </PolicySection>

            <PolicySection title="Changes to This Policy" icon={Bell}>
              <p>
                BearBull reserves the right to update this Privacy Policy as our platform evolves. We will notify you of any significant changes vi
