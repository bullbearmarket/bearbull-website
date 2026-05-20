import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trash2, 
  AlertTriangle, 
  ShieldCheck, 
  Info, 
  ArrowRight,
  CheckCircle2,
  Mail
} from 'lucide-react';

const DeleteAccount = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRequest = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request processing
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-[#fcfcfd]"
    >
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Trash2 className="w-8 h-8 text-red-500" />
            </div>
            <h1 className="text-4xl font-black text-[#0a0a0f] mb-4 text-balance">Delete Account Request</h1>
            <p className="text-[#64748b] text-lg">
              We're sorry to see you go. Please follow the steps below to permanently remove your account and data.
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-premium overflow-hidden">
            {step === 1 && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-8 lg:p-12"
              >
                <h2 className="text-2xl font-bold text-[#0a0a0f] mb-6">Important Information</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-4 p-4 rounded-2xl bg-amber-50 border border-amber-100">
                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                    <p className="text-sm text-amber-800 leading-relaxed">
                      <strong>Warning:</strong> This action is permanent. Once your account is deleted, your virtual portfolio, trade history, and league rankings cannot be recovered.
                    </p>
                  </div>
                  
                  <div className="grid gap-4">
                    {[
                      "All personal profile data will be permanently removed.",
                      "Active Premium subscriptions will not be automatically refunded.",
                      "Your email will be removed from all marketing lists.",
                      "Pending reward claims will be voided upon deletion."
                    ].map((text, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#00ff88] mt-0.5" />
                        <span className="text-[#64748b] text-sm">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setStep(2)}
                    className="flex-1 bg-red-500 text-white py-4 rounded-2xl font-bold hover:bg-red-600 transition-all flex items-center justify-center gap-2"
                  >
                    I Understand, Continue
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => window.history.back()}
                    className="flex-1 bg-gray-50 text-[#0a0a0f] py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-8 lg:p-12"
              >
                <h2 className="text-2xl font-bold text-[#0a0a0f] mb-6">Request Verification</h2>
                <form onSubmit={handleRequest} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0a0a0f] ml-1">Registered Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="Enter your account email"
                      className="w-full px-6 py-4 rounded-2xl bg-[#f8f9fa] border border-transparent focus:border-red-500 focus:bg-white outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0a0a0f] ml-1">Reason for leaving (Optional)</label>
                    <textarea 
                      className="w-full px-6 py-4 rounded-2xl bg-[#f8f9fa] border border-transparent focus:border-red-500 focus:bg-white outline-none transition-all resize-none"
                      rows="3"
                      placeholder="Tell us how we can improve"
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl">
                    <input type="checkbox" required className="mt-1 accent-red-500" id="confirm" />
                    <label htmlFor="confirm" className="text-xs text-[#64748b] leading-relaxed">
                      I confirm that I want to permanently delete my BearBull account and all associated data in compliance with Privacy Regulations.
                    </label>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-red-500 text-white py-5 rounded-2xl font-bold text-lg hover:bg-red-600 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      "Confirm Permanent Deletion"
                    )}
                  </button>
                </form>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 lg:p-20 text-center"
              >
                <div className="w-20 h-20 bg-[#00ff88]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Mail className="w-10 h-10 text-[#00ff88]" />
                </div>
                <h2 className="text-3xl font-black text-[#0a0a0f] mb-4">Request Received</h2>
                <p className="text-[#64748b] text-lg mb-8 max-w-md mx-auto">
                  A verification email has been sent to your inbox. Please click the link in the email to finalize your account deletion.
                </p>
                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 inline-flex items-center gap-3 text-blue-800 text-sm font-medium">
                  <ShieldCheck className="w-5 h-5" />
                  Privacy Compliance: Request will be processed within 48 hours.
                </div>
              </motion.div>
            )}
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-6 rounded-3xl bg-white border border-gray-100">
              <Info className="w-6 h-6 text-[#64748b]" />
              <p className="text-xs text-[#64748b]">
                Your data is handled in accordance with our <a href="/privacy" className="text-[#0a0a0f] font-bold underline">Privacy Policy</a>.
              </p>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-3xl bg-white border border-gray-100">
              <ShieldCheck className="w-6 h-6 text-[#64748b]" />
              <p className="text-xs text-[#64748b]">
                For data portability requests, contact <span className="text-[#0a0a0f] font-bold">privacy@bearbullmarket.in</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default DeleteAccount;
