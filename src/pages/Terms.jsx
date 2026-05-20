import React from 'react';
import { motion } from 'framer-motion';
import { Scale, ShieldAlert, Gavel, AlertCircle, Ban, History } from 'lucide-react';

const TermsSection = ({ title, icon: Icon, children }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 bg-[#ffd700]/10 rounded-xl flex items-center justify-center">
        <Icon className="w-5 h-5 text-[#0a0a0f]" />
      </div>
      <h2 className="text-2xl font-bold text-[#0a0a0f]">{title}</h2>
    </div>
    <div className="text-[#64748b] leading-relaxed space-y-4 text-lg">
      {children}
    </div>
  </div>
);

const Terms = () => {
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
            <h1 className="text-4xl lg:text-6xl font-black text-[#0a0a0f] mb-6">Terms of Service</h1>
            <p className="text-lg text-[#64748b]">
              Last updated: <span className="text-[#0a0a0f] font-semibold">{lastUpdated}</span>
            </p>
            <p className="mt-6 text-[#64748b] max-w-2xl text-lg">
              By accessing BearBull Crypto Simulator, you agree to be bound by these Terms of Service. Please read them carefully before using our platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[3rem] border border-gray-100 p-8 lg:p-16 shadow-sm">
            
            <TermsSection title="Nature of Service" icon={AlertCircle}>
              <p className="font-bold text-[#0a0a0f]">
                BearBull is a simulation platform only.
              </p>
              <p>
                All "trading" performed on the platform is conducted with virtual currency (USDT) and does not involve real money or real crypto assets. We do not provide financial advice, and our platform should not be used as the sole basis for real-world investment decisions.
              </p>
              <p>
                The virtual balances and assets within BearBull have no real-world value and cannot be transferred to external wallets or converted into legal tender.
              </p>
            </TermsSection>

            <TermsSection title="User Eligibility" icon={Scale}>
              <p>To use BearBull, you must:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Be at least 18 years of age (or the legal age of majority in your jurisdiction).</li>
                <li>Not be a resident of any country under international financial sanctions.</li>
                <li>Provide accurate and complete information during the registration process.</li>
              </ul>
              <p className="mt-4">
                We reserve the right to suspend or terminate accounts that provide false information or violate eligibility criteria.
              </p>
            </TermsSection>

            <TermsSection title="Reward Program Terms" icon={Gavel}>
              <p>Participation in our monthly reward program is subject to the following rules:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><span className="font-bold text-[#0a0a0f]">Minimum Payout:</span> Users must accumulate at least $25 in rewards before requesting a withdrawal.</li>
                <li><span className="font-bold text-[#0a0a0f]">No Cash:</span> Rewards are issued exclusively as digital gift cards (Amazon, Google Play, etc.). No cash or direct bank transfers are permitted.</li>
                <li><span className="font-bold text-[#0a0a0f]">Anti-Cheating:</span> Any attempt to manipulate rankings through multiple accounts, botting, or exploiting technical bugs will result in immediate disqualification and account ban.</li>
                <li><span className="font-bold text-[#0a0a0f]">Taxes:</span> Users are responsible for any taxes applicable to rewards received in their respective jurisdictions.</li>
              </ul>
            </TermsSection>

            <TermsSection title="Pro Membership" icon={ShieldAlert}>
              <p>
                Subscriptions for Premium (Pro) features are billed on a recurring monthly basis. You can cancel your subscription at any time through the app settings or your app store account.
              </p>
              <p>
                Refunds are subject to the policies of the respective app store (Apple App Store or Google Play Store) through which the purchase was made.
              </p>
            </TermsSection>

            <TermsSection title="Prohibited Conduct" icon={Ban}>
              <p>Users agree not to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Use the service for any illegal or unauthorized purpose.</li>
                <li>Interfere with or disrupt the integrity or performance of the platform.</li>
                <li>Attempt to gain unauthorized access to our systems or user accounts.</li>
                <li>Decompile, reverse engineer, or attempt to extract the source code of the app.</li>
              </ul>
            </TermsSection>

            <TermsSection title="Limitation of Liability" icon={History}>
              <p>
                BearBull Market and its affiliates shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of the simulator. This includes, but is not limited to, losses incurred in real-world trading after using our platform.
              </p>
              <p>
                Market data is provided "as is" and may occasionally experience delays or inaccuracies due to external API performance.
              </p>
            </TermsSection>

            <div className="mt-16 pt-10 border-t border-gray-100 bg-[#f8f9fa] -mx-8 lg:-mx-16 px-8 lg:px-16 py-10 rounded-b-[3rem]">
              <h3 className="text-xl font-bold text-[#0a0a0f] mb-4">Acceptance</h3>
              <p className="text-[#64748b]">
                By clicking "Agree" or by using the BearBull platform, you acknowledge that you have read, understood, and agreed to be bound by these Terms. If you do not agree, please discontinue use immediately.
              </p>
              <p className="mt-6 text-sm text-[#64748b]">
                Questions? Email us at <a href="mailto:support@bearbullmarket.in" className="text-[#0a0a0f] font-bold underline">support@bearbullmarket.in</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Terms;
