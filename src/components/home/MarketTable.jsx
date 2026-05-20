import React from 'react';
import { motion } from 'framer-motion';
import { useCryptoPrices } from '../../hooks/useCryptoPrices';
import { TrendingUp, TrendingDown, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

/**
 * Premium Market Table Component
 * Designed to emulate the "CoinMarketCap/Binance" professional authority.
 * Uses real-time data from useCryptoPrices hook.
 */
const MarketTable = () => {
  const { prices, loading } = useCryptoPrices(30000);

  const tableRows = loading ? Array(6).fill({}) : prices;

  return (
    <section className="section-padding !pt-0">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-brand-dark mb-4">
              Real-Time <span className="text-neon">Market Data.</span>
            </h2>
            <p className="text-brand-gray font-medium max-w-xl">
              Track the global crypto market cap and price action in real-time. No delays, no slippage, just pure market execution.
            </p>
          </div>
          <Link 
            to="/download" 
            className="flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-neon transition-colors group"
          >
            Explore 200+ more assets
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-3">
            <thead>
              <tr className="text-brand-gray text-[10px] font-black uppercase tracking-[0.2em] px-6">
                <th className="pb-4 pl-6">Asset</th>
                <th className="pb-4">Price</th>
                <th className="pb-4">24h Change</th>
                <th className="pb-4 hidden md:table-cell">Market Cap</th>
                <th className="pb-4 pr-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((coin, index) => (
                <motion.tr
                  key={coin.id || index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white border border-brand-border rounded-2xl hover:shadow-premium-lg hover:border-neon/20 transition-all duration-300"
                >
                  {/* Asset Info */}
                  <td className="py-5 pl-6 rounded-l-2xl border-y border-l border-brand-border group-hover:border-neon/20">
                    <div className="flex items-center gap-4">
                      {loading ? (
                        <div className="w-10 h-10 rounded-full bg-brand-lightGray animate-pulse" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-white font-black text-xs">
                          {coin.symbol?.[0]}
                        </div>
                      )}
                      <div>
                        {loading ? (
                          <div className="space-y-2">
                            <div className="h-4 w-20 bg-brand-lightGray animate-pulse rounded" />
                            <div className="h-3 w-12 bg-brand-lightGray animate-pulse rounded" />
                          </div>
                        ) : (
                          <>
                            <div className="font-black text-brand-dark tracking-tight">{coin.symbol}</div>
                            <div className="text-xs font-bold text-brand-gray uppercase tracking-widest">{coin.name}</div>
                          </>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="py-5 border-y border-brand-border group-hover:border-neon/20">
                    {loading ? (
                      <div className="h-5 w-24 bg-brand-lightGray animate-pulse rounded" />
                    ) : (
                      <div className="font-mono font-black text-brand-dark">
                        ${coin.price?.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </div>
                    )}
                  </td>

                  {/* 24h Change */}
                  <td className="py-5 border-y border-brand-border group-hover:border-neon/20">
                    {loading ? (
                      <div className="h-5 w-16 bg-brand-lightGray animate-pulse rounded" />
                    ) : (
                      <div className={cn(
                        "flex items-center gap-1 font-black text-sm",
                        coin.change >= 0 ? "text-neon" : "text-red-500"
                      )}>
                        {coin.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        {Math.abs(coin.change).toFixed(2)}%
                      </div>
                    )}
                  </td>

                  {/* Market Cap (Simulated Scale) */}
                  <td className="py-5 border-y border-brand-border group-hover:border-neon/20 hidden md:table-cell">
                    {loading ? (
                      <div className="h-5 w-32 bg-brand-lightGray animate-pulse rounded" />
                    ) : (
                      <div className="text-sm font-bold text-brand-gray">
                        ${(coin.price * 19000000 / 1e9).toFixed(2)}B
                      </div>
                    )}
                  </td>

                  {/* Action */}
                  <td className="py-5 pr-6 rounded-r-2xl border-y border-r border-brand-border group-hover:border-neon/20 text-right">
                    <Link 
                      to="/download"
                      className="inline-flex items-center justify-center h-10 px-6 rounded-xl bg-brand-lightGray group-hover:bg-neon group-hover:text-brand-dark font-black text-[10px] uppercase tracking-widest transition-all"
                    >
                      Trade
                    </Link>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Dynamic Disclaimer */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="flex h-1.5 w-1.5 rounded-full bg-neon animate-pulse" />
          <p className="text-[10px] font-black text-brand-gray uppercase tracking-[0.2em]">
            Institutional Liquidity Providers Active • Updated 30s ago
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketTable;
