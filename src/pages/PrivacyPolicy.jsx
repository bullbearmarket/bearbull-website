import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  Eye,
  Bell,
  Globe,
  Smartphone,
  Database,
  UserCheck,
  Mail,
  AlertTriangle,
  Wallet
} from 'lucide-react';

const PolicySection = ({ title, icon: Icon, children }) => (
  <div className="mb-14">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 rounded-2xl bg-[#00ff88]/10 flex items-center justify-center border border-[#00ff88]/20">
        <Icon className="w-6 h-6 text-[#00ff88]" />
      </div>
      <h2 className="text-2xl lg:text-3xl font-bold text-[#0a0a0f]">
        {title}
      </h2>
    </div>
    <div className="space-y-5 text-[#64748b] leading-8 text-base lg:text-lg">
      {children}
    </div>
  </div>
);

const PrivacyPolicy = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#f8fafc] min-h-screen pt-24"
    >
      <section className="px-6 lg:px-10 pb-14">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 lg:p-14 shadow-sm overflow-hidden relative">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#00ff88]/5 blur-3xl rounded-full" />

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/20 mb-6">
                <Shield className="w-4 h-4 text-[#00ff88]" />
                <span className="text-sm font-semibold text-[#0a0a0f]">
                  Privacy, Data & Legal Disclaimers
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-black text-[#0a0a0f] leading-tight mb-6">
                Privacy Policy & Rules
              </h1>

              <p className="text-lg text-[#64748b] max-w-3xl leading-8">
                BearBull values your privacy and is committed to protecting your
                personal information. This comprehensive policy explains how we
                collect data, process reward withdrawals, prevent fraud, and our strict legal guidelines regarding cash rewards.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="px-5 py-3 rounded-2xl bg-[#f8fafc] border border-gray-200">
                  <p className="text-sm text-[#64748b]">Last Updated</p>
                  <p className="font-bold text-[#0a0a0f]">{lastUpdated}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-8 lg:p-14">

            <PolicySection title="Information We Collect" icon={Eye}>
              <p>
                We collect essential personal and technical information to
                ensure a seamless simulation experience and to process legitimate reward payouts.
              </p>
              <ul className="list-disc ml-6 space-y-3">
                <li>
                  <span className="font-semibold text-[#0a0a0f]">Account Information:</span>{' '}
                  Name, email address, profile image, and login authentication details. Your email must be real and verifiable.
                </li>
                <li>
                  <span className="font-semibold text-[#0a0a0f]">Simulator Activity:</span>{' '}
                  Virtual trades, portfolio performance, and leaderboard rankings.
                </li>
                <li>
                  <span className="font-semibold text-[#0a0a0f]">Device Information:</span>{' '}
                  Device IPs, app versions, and anonymous identifiers used actively to detect multiple-account abuse.
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="Withdrawal & Payment Information" icon={Wallet}>
              <p>
                To process cash rewards earned from the monthly leaderboards, we require specific details. We do not require full identity cards (KYC), but we do require:
              </p>
              <ul className="list-disc ml-6 space-y-3">
                <li><span className="font-semibold text-[#0a0a0f]">Full Name & Email:</span> The email provided during the withdrawal request MUST exactly match your registered account email.</li>
                <li><span className="font-semibold text-[#0a0a0f]">Crypto Wallet Address:</span> For global users wishing to withdraw via supported cryptocurrencies.</li>
                <li><span className="font-semibold text-[#0a0a0f]">UPI ID (Indian Users Only):</span> For users based in India, we collect your UPI ID to process direct bank transfers.</li>
              </ul>
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 mt-6">
                <p className="font-semibold text-yellow-800">Reward Disclaimer & Legal Claim</p>
                <p className="mt-2 text-yellow-900 text-sm leading-relaxed">
                  The monthly rewards, cash prizes, and leaderboard payouts are completely discretionary and provided as promotional gifts to our top users. <strong>These rewards do NOT constitute a legal claim, debt, or financial obligation from BearBull to the user.</strong> We reserve the absolute right to change, modify, cancel, or withhold the reward structure at any time, without prior notice.
                </p>
              </div>
            </PolicySection>

            <PolicySection title="Anti-Fraud & Account Ban Policy" icon={AlertTriangle}>
              <p>
                We maintain a zero-tolerance policy towards cheating. Since real cash rewards are involved, our systems actively monitor for suspicious behavior.
              </p>
              <ul className="list-disc ml-6 space-y-3">
                <li><span className="font-semibold text-[#0a0a0f]">Fraudulent Activity:</span> Using bots, exploiting API bugs, creating multiple accounts to manipulate the leaderboard, or providing fake/mismatched email addresses during withdrawal will result in an immediate and permanent account ban.</li>
                <li><span className="font-semibold text-[#0a0a0f]">Forfeiture of Rewards:</span> Any account banned for fraud will instantly forfeit all virtual balances and pending cash withdrawals. BearBull's decision on fraud detection is final.</li>
              </ul>
            </PolicySection>

            <PolicySection title="How We Use Your Data" icon={Database}>
              <ul className="list-disc ml-6 space-y-3">
                <li>Operate the virtual crypto trading simulator.</li>
                <li>Verify your identity and email for reward processing.</li>
                <li>Prevent fraud, sybil attacks, and unauthorized access.</li>
                <li>Deliver technical support and respond to user inquiries.</li>
              </ul>
              <div className="bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-2xl p-5 mt-6">
                <p className="font-semibold text-[#0a0a0f]">
                  BearBull DOES NOT sell your personal information to third parties.
                </p>
              </div>
            </PolicySection>

            <PolicySection title="Data Security" icon={Lock}>
              <p>
                We use industry-standard security practices to protect user
                information, especially your withdrawal details (UPI / Wallet addresses).
              </p>
              <ul className="list-disc ml-6 space-y-3">
                <li>Encrypted HTTPS/SSL communication.</li>
                <li>Secure cloud databases and restricted administrative access.</li>
              </ul>
              <div className="bg-red-50 border border-red-100 rounded-2xl p-5 mt-6">
                <p className="font-semibold text-[#0a0a0f]">No Private Keys Required</p>
                <p className="mt-2 text-[#64748b]">
                  We will NEVER ask for your cryptocurrency private keys, seed phrases, or banking passwords. We only need your public receiving address or UPI ID.
                </p>
              </div>
            </PolicySection>

            <PolicySection title="Google Play Compliance" icon={Smartphone}>
              <p>
                BearBull follows all Google Play policies related to user privacy,
                data transparency, and account protection.
              </p>
              <ul className="list-disc ml-6 space-y-3">
                <li>Permissions are requested only when technically necessary.</li>
                <li>Users can request complete account deletion and data removal at any time directly through the app.</li>
              </ul>
            </PolicySection>

            <PolicySection title="Contact Us" icon={Mail}>
              <p>
                For any questions regarding this Privacy Policy, your account data, or withdrawal support, you can contact our team anytime:
              </p>
              <div className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 mt-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#0a0a0f]">BearBull Support Team</p>
                  <p className="text-green-600 font-bold mt-2">
                    <a href="mailto:moneymaker.earnmoney@gmail.com" className="hover:underline">moneymaker.earnmoney@gmail.com</a>
                  </p>
                </div>
              </div>
            </PolicySection>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PrivacyPolicy;
