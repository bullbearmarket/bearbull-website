import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Premium SEO Component
 * Handles dynamic metadata, OpenGraph, and Twitter tags for all pages.
 */
const SEO = ({ 
  title, 
  description, 
  canonical = "https://bearbullmarket.in", 
  ogType = "website",
  ogImage = "https://bearbullmarket.in/og-image.jpg"
}) => {
  const siteTitle = "BearBull Crypto Simulator";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Theme Color for Mobile Browsers */}
      <meta name="theme-color" content="#ffffff" />
      
      {/* Structured Data (JSON-LD) - Software Application */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "BearBull Crypto Simulator",
          "operatingSystem": "iOS, Android, Web",
          "applicationCategory": "FinanceApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "1250"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
