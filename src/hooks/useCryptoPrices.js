import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Custom hook for fetching real-time crypto data.
 * Targets major assets: BTC, ETH, BNB, SOL, ADA, DOGE.
 * Implements auto-refresh and error handling for production use.
 */
export const useCryptoPrices = (refreshInterval = 30000) => {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const COIN_IDS = [
    'bitcoin',
    'ethereum',
    'binancecoin',
    'solana',
    'cardano',
    'dogecoin'
  ];

  const fetchPrices = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price`,
        {
          params: {
            ids: COIN_IDS.join(','),
            vs_currencies: 'usd',
            include_24hr_change: 'true',
            include_last_updated_at: 'true'
          }
        }
      );

      const formattedData = Object.entries(response.data).map(([id, data]) => ({
        id,
        symbol: getSymbol(id),
        name: id.charAt(0).toUpperCase() + id.slice(1),
        price: data.usd,
        change: data.usd_24h_change,
        lastUpdated: data.last_updated_at
      }));

      setPrices(formattedData);
      setError(null);
    } catch (err) {
      console.error('Price Fetch Error:', err);
      setError('Failed to fetch real-time market data.');
    } finally {
      setLoading(false);
    }
  };

  const getSymbol = (id) => {
    const symbols = {
      bitcoin: 'BTC',
      ethereum: 'ETH',
      binancecoin: 'BNB',
      solana: 'SOL',
      cardano: 'ADA',
      dogecoin: 'DOGE'
    };
    return symbols[id] || id.toUpperCase();
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, refreshInterval);
    return () => clearInterval(interval);
  }, [refreshInterval]);

  return { prices, loading, error, refetch: fetchPrices };
};
