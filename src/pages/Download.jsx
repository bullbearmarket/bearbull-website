import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Download as DownloadIcon, 
  Apple, 
  PlayCircle, 
  QrCode, 
  CheckCircle2, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';

const Download = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="floating-gradient top-[-10%] right-[-10%] opacity-30" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff88]/10 text-[#00ff88] text-sm font-bold mb-8 border border-[#00ff88]/20">
              <Smartphone className="w-4 h-4" />
              NOW AVAILABLE ON MOBILE
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-[#0a0a0f] mb-8 leading-[1.1]">
              Trade Anytime, <br />
              <span className="premium-gradient-text">Anywhere.</span>
            </h1>
            <p className="text-xl text-[#64748b] mb-12 leading-relaxed">
              Experience the world's most powerful crypto simulator in the palm of your hand. 
              Real-time prices, instant execution, and global competitions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="#" 
                className="flex items-center justify-center gap-3 bg-[#0a0a0f] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#2d2d39] transition-all group shadow-xl"
              >
                <Apple className="w-6 h-6 fill-current" />
                <div className="text-left">
                  <div className="text-[10px] uppercase opacity-60 leading-none">Download on the</div>
                  <div className="text-lg leading-none">App Store</div>
                </div>
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center gap-3 bg-white text-[#0a0a0f] border-2 border-gray-100 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all group shadow-xl"
              >
                <PlayCircle className="w-6 h-6 fill-current" />
                <div className="text-left">
                  <div className="text-[10px] uppercase opacity-60 leading-none">Get it on</div>
                  <div className="text-lg leading-none">Google Play</div>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-[#64748b]">
                Join <span className="text-[#0a0a0f] font-bold">50,000+</span> traders worldwide.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-[320px] aspect-[9/19] bg-[#0a0a0f] rounded-[3rem] border-[8px] border-[#1a1a24] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-[#1a1a24] rounded-b-2xl z-20" />
              <div className="absolute inset-0 bg-white p-6 flex flex-col pt-12">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-8 h-8 bg-[#0a0a0f] rounded-lg flex items-center justify-center text-[#00ff88] text-[10px] font-bold">B</div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full" />
                </div>
                <div className="h-4 w-2/3 bg-gray-100 rounded-full mb-2" />
                <div className="h-8 w-1/2 bg-[#00ff88]/10 rounded-full mb-8" />
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-20 bg-gray-50 rounded-2xl border border-gray-100 p-4">
                      <div className="flex gap-3 h-full items-center">
                        <div className="w-10 h-10 bg-gray-200 rounded-xl" />
                        <div className="flex-1 space-y-2">
                          <div className="h-2 w-1/2 bg-gray-200 rounded-full" />
                          <div className="h-2 w-1/4 bg-gray-100 rounded-full" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#00ff88]/10 to-[#ffd700]/10 rounded-full blur-[80px]" />
          </motion.div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] border border-gray-100 p-12 lg:p-20 flex flex-col md:flex-row items-center gap-16 shadow-premium">
          <div className="bg-[#f8f9fa] p-8 rounded-[2rem] border border-gray-100 flex flex-col items-center">
            <div className="w-48 h-48 bg-white border border-gray-100 rounded-2xl flex items-center justify-center mb-6">
              <QrCode className="w-32 h-32 text-[#0a0a0f]" />
            </div>
            <span className="text-sm font-bold text-[#64748b] uppercase tracking-widest text-center">Scan to download</span>
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-black text-[#0a0a0f] mb-8">Fast Onboarding.</h2>
            <div className="grid gap-6">
              {[
                { icon: Zap, title: "1-Click Sign In", desc: "Start trading in seconds with Google or Apple ID integration." },
                { icon: ShieldCheck, title: "Biometric Security", desc: "Secure your simulated portfolio with FaceID or TouchID." },
                { icon: CheckCircle2, title: "Cloud Sync", desc: "Switch between desktop and mobile without losing a single trade." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00ff88]/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#00ff88]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a0a0f]">{item.title}</h4>
                    <p className="text-[#64748b] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App Requirements */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-[#0a0a0f] mb-12">Minimum Requirements</h2>
          <div className="grid sm:grid-cols-2 gap-8 text-left">
            <div className="p-8 rounded-3xl border border-gray-100 bg-white">
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Apple className="w-5 h-5" /> iOS
              </h4>
              <ul className="space-y-3 text-[#64748b] text-sm">
                <li>• iOS 14.0 or later</li>
                <li>• Compatible with iPhone and iPad</li>
                <li>• 150MB free space</li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl border border-gray-100 bg-white">
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <PlayCircle className="w-5 h-5" /> Android
              </h4>
              <ul className="space-y-3 text-[#64748b] text-sm">
                <li>• Android 8.0 or later</li>
                <li>• ARM64 Architecture</li>
                <li>• 120MB free space</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Download;
