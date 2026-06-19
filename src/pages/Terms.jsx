import React from 'react';
import { motion } from 'framer-motion';
import { Scale, ShieldAlert, Gavel, AlertCircle, History } from 'lucide-react';

const TermsSection = ({ title, icon: Icon, children }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
        <Icon className="w-5 h-5 text-green-600" />
      </div>
      <h2 className="text-2xl font-bold text-[#0a0a0f]">{title}</h2>
    </div>
    <div className="text-[#64748b] leading-relaxed space-y-4 text-lg">
      {children}
    </div>
  </div>
);

const Terms = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 bg-[#fcfcfd]"
    >
      <section className="section-padding !pb-12 text-center lg:text-left border-b border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-black text-[#0a0a0f] mb-6">Terms of Service</h1>
            <p className="text-lg text-[#64748b]">
              Last updated: <span className="text-[#0a0a0f] font-semibold">{lastUpdated}</span>
            </p>
            <p className="mt-6 text-[#64748b] max-w-2xl text-lg">
              By accessing the BearBull Crypto Simulator app and website, you agree to be bound by these legally binding Terms of Service.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[3rem] border border-gray-100 p-8 lg:p-16 shadow-sm">
            
            <TermsSection title="Nature of Service & No Gambling" icon={AlertCircle}>
              <p className="font-bold text-[#0a0a0f]">
                BearBull is exclusively a skill-based trading educational simulator. IT IS NOT A GAMBLING PLATFORM.
              </p>
              <p>
                No real money is required to participate or trade on our platform. All "trading" is conducted with virtual currency. The virtual balances within BearBull have absolutely no real-world monetary value, cannot be transferred to external crypto wallets, and cannot be purchased with real money.
              </p>
              <p>
                We do not provide financial advice. Our platform is strictly for educational purposes to help users learn market dynamics without financial risk.
              </p>
            </TermsSection>

            <TermsSection title="Cash Rewards & Tournaments" icon={Gavel}>
              <p>BearBull operates free-to-play, skill-based monthly leaderboards where top-performing users may earn cash rewards based entirely on their trading acumen.</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><span className="font-bold text-[#0a0a0f]">Skill-Based:</span> Rewards are distributed strictly based on the objective performance (Virtual PnL) of the user's simulated portfolio.</li>
                <li><span className="font-bold text-[#0a0a0f]">Withdrawals:</span> Eligible winners can withdraw cash prizes directly from the app. All withdrawals may be subject to mandatory identity verification (KYC) and Anti-Money Laundering (AML) checks to prevent fraud.</li>
                <li><span className="font-bold text-[#0a0a0f]">Anti-Cheating Policy:</span> Any attempt to manipulate rankings via multiple accounts, botting, API exploitation, or collusion will result in immediate permanent account termination and forfeiture of all pending rewards.</li>
              </ul>
            </TermsSection>

            <TermsSection title="User Eligibility" icon={Scale}>
              <p>To use BearBull and participate in reward leaderboards, you must:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Be at least 18 years of age or the legal age of majority in your jurisdiction.</li>
                <li>Not be a resident of any country under international financial sanctions.</li>
                <li>Provide accurate, truthful, and complete information when requesting reward withdrawals.</li>
              </ul>
            </TermsSection>

            <TermsSection title="Pro Membership & Google Play Billing" icon={ShieldAlert}>
              <p>
                BearBull may offer optional Premium (Pro) features. Subscriptions are billed through Google Play Billing on a recurring basis.
              </p>
              <p>
                You can cancel your subscription at any time through your Google Play Store account settings. Refunds, if applicable, are strictly governed by Google Play Store policies.
              </p>
            </TermsSection>

            <TermsSection title="Limitation of Liability" icon={History}>
              <p>
                BearBull Market and its affiliates shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of the simulator. This explicitly includes any financial losses you may incur in real-world trading on third-party exchanges after using our educational platform.
              </p>
            </TermsSection>

            <div className="mt-16 pt-10 border-t border-gray-100 bg-[#f8f9fa] -mx-8 lg:-mx-16 px-8 lg:px-16 py-10 rounded-b-[3rem]">
              <h3 className="text-xl font-bold text-[#0a0a0f] mb-4">Acceptance of Terms</h3>
              <p className="text-[#64748b]">
                By downloading our app from the Google Play Store or using our website, you legally acknowledge that you have read, understood, and agreed to be bound by these Terms of Service.
              </p>
              <p className="mt-6 text-sm text-[#64748b]">
                Legal Inquiries & Support: <a href="mailto:moneymaker.earnmoney@gmail.com" className="text-green-600 font-bold hover:underline">moneymaker.earnmoney@gmail.com</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Terms;
