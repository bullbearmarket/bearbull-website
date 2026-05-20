import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, RefreshCcw } from 'lucide-react';
import { useCryptoPrices } from '../../hooks/useCryptoPrices';
import { cn } from '../../lib/utils';

/**
 * Premium Price Marquee Component
 * Uses real-time data from the useCryptoPrices hook.
 * Features smooth infinite scrolling and live price updates.
 */
const PriceMarquee = () => {
  const { prices, loading, error } = useCryptoPrices(30000);

  if (error) return null;

  // Duplicate items for seamless infinite loop
  const displayPrices = [...prices, ...prices, ...prices];

  return (
    <div className="w-full bg-white border-y border-gray-100 py-4 overflow-hidden relative">
      {/* Subtle Side Gradients for Fade Effect */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center whitespace-nowrap"
        animate={{
          x: loading ? 0 : [0, -1035],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {loading ? (
          // Skeleton Loading State
          <div className="flex gap-12 px-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center gap-3 animate-pulse">
                <div className="w-8 h-8 bg-gray-100 rounded-full" />
                <div className="w-16 h-4 bg-gray-100 rounded-md" />
                <div className="w-12 h-4 bg-gray-50 rounded-md" />
              </div>
            ))}
          </div>
        ) : (
          displayPrices.map((coin, index) => (
            <div
              key={`${coin.id}-${index}`}
              className="flex items-center gap-8 px-12 border-r border-gray-50 last:border-0"
            >
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <span className="text-sm font-black text-[#0a0a0f] tracking-tighter">
                    {coin.symbol}
                  </span>
                  <span className="text-[10px] text-[#64748b] font-bold uppercase tracking-widest">
                    {coin.name}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <span className="text-sm font-mono font-bold text-[#0a0a0f]">
                  ${coin.price?.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </span>
                <div
                  className={cn(
                    "flex items-center gap-1 text-[11px] font-bold",
                    coin.change >= 0 ? "text-[#00ff88]" : "text-red-500"
                  )}
                >
                  {coin.change >= 0 ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                  {Math.abs(coin.change).toFixed(2)}%
                </div>
              </div>
            </div>
          ))
        )}
      </motion.div>

      {/* Live Indicator */}
      <div className="absolute top-1/2 -translate-y-1/2 right-6 z-20 hidden lg:flex items-center gap-2 bg-white/80 backdrop-blur-sm pl-4">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#00ff88]/10 border border-[#00ff88]/20">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00ff88]"></span>
          </span>
          <span className="text-[9px] font-black text-[#0a0a0f] uppercase tracking-tighter">Live Market Data</span>
        </div>
      </div>
    </div>
  );
};

export default PriceMarquee;
