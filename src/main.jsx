import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

// -----------------------------------------------------------
// 🛡️ ENTERPRISE ERROR BOUNDARY (Prevents White Screen Crashes)
// -----------------------------------------------------------
class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service here (like Sentry)
    console.error("BearBull Critical Error Caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ backgroundColor: '#0a0a0f', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'Inter, sans-serif', textAlign: 'center', padding: '20px' }}>
          <h1 style={{ fontSize: '4rem', fontWeight: '900', color: '#ef4444', marginBottom: '10px' }}>Market Crashed!</h1>
          <p style={{ color: '#9ca3af', fontSize: '1.2rem', maxWidth: '500px', marginBottom: '30px' }}>
            Our servers experienced a sudden bear market drop. Don't worry, your data is safe. Please refresh the page or download our App to continue trading.
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button onClick={() => window.location.reload()} style={{ padding: '15px 30px', backgroundColor: 'white', color: 'black', fontWeight: 'bold', borderRadius: '50px', cursor: 'pointer', border: 'none' }}>
              Refresh Page
            </button>
            <a href="https://play.google.com/store/apps/details?id=com.bearbull.cryptosimulator" target="_blank" rel="noopener noreferrer" style={{ padding: '15px 30px', backgroundColor: '#00ff88', color: 'black', fontWeight: 'bold', borderRadius: '50px', textDecoration: 'none' }}>
              Download Free App
            </a>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// -----------------------------------------------------------
// 🚀 DEVELOPER EASTER EGG (Visible only in Browser Console)
// -----------------------------------------------------------
if (typeof window !== 'undefined') {
  console.log(
    "%c🐻 BearBull Crypto Simulator 🚀",
    "color: #00ff88; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px rgba(0,255,136,0.5);"
  );
  console.log(
    "%cWelcome, Developer! Ready to dominate the market? Download our App and win $500 monthly cash rewards!",
    "color: #9ca3af; font-size: 14px;"
  );
}

// -----------------------------------------------------------
// ⚡ APP INITIALIZATION
// -----------------------------------------------------------
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </GlobalErrorBoundary>
  </React.StrictMode>
);
