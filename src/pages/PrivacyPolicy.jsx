import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  Eye,
  FileText,
  Bell,
  Globe,
  Smartphone,
  Database,
  UserCheck,
  Mail,
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
  const lastUpdated = 'May 20, 2026';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#f8fafc] min-h-screen pt-24"
    >
      {/* Hero Section */}
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
                  Privacy & Data Protection
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-black text-[#0a0a0f] leading-tight mb-6">
                Privacy Policy
              </h1>

              <p className="text-lg text-[#64748b] max-w-3xl leading-8">
                BearBull values your privacy and is committed to protecting your
                personal information. This Privacy Policy explains how we
                collect, use, store, and protect your information when you use
                the BearBull Crypto Simulator application and related services.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="px-5 py-3 rounded-2xl bg-[#f8fafc] border border-gray-200">
                  <p className="text-sm text-[#64748b]">Last Updated</p>
                  <p className="font-bold text-[#0a0a0f]">{lastUpdated}</p>
                </div>

                <div className="px-5 py-3 rounded-2xl bg-[#f8fafc] border border-gray-200">
                  <p className="text-sm text-[#64748b]">Platform</p>
                  <p className="font-bold text-[#0a0a0f]">
                    BearBull Crypto Simulator
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="px-6 lg:px-10 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-8 lg:p-14">

            <PolicySection title="Information We Collect" icon={Eye}>
              <p>
                We may collect limited personal and technical information to
                improve the functionality, security, and user experience of the
                BearBull platform.
              </p>

              <ul className="list-disc ml-6 space-y-3">
                <li>
                  <span className="font-semibold text-[#0a0a0f]">
                    Account Information:
                  </span>{' '}
                  Name, email address, profile image, and login details when
                  signing in using Google or other providers.
                </li>

                <li>
                  <span className="font-semibold text-[#0a0a0f]">
                    Simulator Activity:
                  </span>{' '}
                  Virtual trades, portfolio performance, rankings, rewards, and
                  leaderboard activity.
                </li>

                <li>
                  <span className="font-semibold text-[#0a0a0f]">
                    Device Information:
                  </span>{' '}
                  Device model, operating system version, app version, crash
                  logs, and anonymous identifiers for security and analytics.
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="How We Use Your Data" icon={Database}>
              <p>
                Your information is used only to operate and improve the
                BearBull platform.
              </p>

              <ul className="list-disc ml-6 space-y-3">
                <li>Provide virtual crypto trading simulation features.</li>
                <li>Maintain user accounts and leaderboard rankings.</li>
                <li>Improve application performance and stability.</li>
                <li>Prevent fraud, abuse, or unauthorized access.</li>
                <li>Respond to support requests and technical issues.</li>
                <li>Deliver premium features and reward systems.</li>
              </ul>

              <div className="bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-2xl p-5 mt-6">
                <p className="font-semibold text-[#0a0a0f]">
                  BearBull does not sell your personal information to third
                  parties.
                </p>
              </div>
            </PolicySection>

            <PolicySection title="Data Security" icon={Lock}>
              <p>
                We use industry-standard security practices to protect user
                information from unauthorized access, misuse, or disclosure.
              </p>

              <ul className="list-disc ml-6 space-y-3">
                <li>Encrypted HTTPS/SSL communication.</li>
                <li>Secure cloud infrastructure and protected databases.</li>
                <li>Restricted administrative access.</li>
                <li>Continuous monitoring and abuse prevention systems.</li>
              </ul>

              <div className="bg-red-50 border border-red-100 rounded-2xl p-5 mt-6">
                <p className="font-semibold text-[#0a0a0f]">
                  BearBull is a simulator platform only.
                </p>

                <p className="mt-2 text-[#64748b]">
                  We never request or store cryptocurrency private keys, seed
                  phrases, wallet passwords, banking PINs, or sensitive payment
                  credentials.
                </p>
              </div>
            </PolicySection>

            <PolicySection title="Google Play Compliance" icon={Smartphone}>
              <p>
                BearBull follows Google Play policies related to user privacy,
                data transparency, and account protection.
              </p>

              <ul className="list-disc ml-6 space-y-3">
                <li>
                  Users are informed about the types of data collected and their
                  usage.
                </li>

                <li>
                  Permissions are requested only when required for app
                  functionality.
                </li>

                <li>
                  Sensitive user information is not shared without consent.
                </li>

                <li>
                  Users can request account deletion and data removal at any
                  time.
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="Third-Party Services" icon={Globe}>
              <p>
                BearBull may use trusted third-party providers for analytics,
                authentication, cloud hosting, and market data services.
              </p>

              <ul className="list-disc ml-6 space-y-3">
                <li>Google Sign-In Authentication</li>
                <li>Firebase & Cloud Infrastructure</li>
                <li>Crypto Market APIs (CoinGecko / Binance)</li>
                <li>Performance & Crash Analytics Tools</li>
              </ul>

              <p>
                These providers may process limited technical information as
                required to operate their services securely.
              </p>
            </PolicySection>

            <PolicySection title="User Rights & Account Deletion" icon={UserCheck}>
              <p>
                Users have full control over their account and personal data.
              </p>

              <ul className="list-disc ml-6 space-y-3">
                <li>Access and review account information.</li>
                <li>Update profile details and preferences.</li>
                <li>Request permanent account deletion.</li>
                <li>Request removal of stored personal information.</li>
              </ul>

              <p>
                Account deletion requests can be submitted through the Delete
                Account page available inside the application or website.
              </p>
            </PolicySection>

            <PolicySection title="Policy Updates" icon={Bell}>
              <p>
                We may update this Privacy Policy from time to time to reflect
                platform improvements, legal requirements, or security updates.
              </p>

              <p>
                Significant changes will be communicated through the app,
                website, or official notification channels.
              </p>
            </PolicySection>

            <PolicySection title="Contact Us" icon={Mail}>
              <p>
                If you have any questions regarding this Privacy Policy or your
                personal data, you may contact us:
              </p>

              <div className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 mt-4">
                <p className="font-semibold text-[#0a0a0f]">
                  BearBull Support Team
                </p>

                <p className="text-[#64748b] mt-2">
                  Email: support@bearbullmarket.com
                </p>

                <p className="text-[#64748b]">
                  Website: www.bearbullmarket.com
                </p>
              </div>
            </PolicySection>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PrivacyPolicy;

