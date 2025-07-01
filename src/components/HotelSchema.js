// components/HotelSchema.js
import React from "react";
import { Helmet } from "react-helmet";

const HotelSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Hotel Harikrishna Park Gandhipuram Coimbatore",
    "description":
      "Welcome to Hotel Harikrishna Park. Experience Luxury & Comfort. A home away from home – Unparalleled hospitality, cozy rooms, and top-notch services.",
    "image":
      "https://harikrishnapark.in/static/media/logo.17ff0a4b9f97ed9f7d87.jpg",
    "url": "https://www.harikrishnapark.in",
    "telephone": "+91-9585512307",
    "email": "harikrishnaparkreservation@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress":
        "Ambiga Layout, 106-A, Water Tank Rd, opp. Govt.Girls High School, Siddhapudur, New Siddhapudur",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641044",
      "addressCountry": "IN"
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Free breakfast (on request)", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Free parking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Air-conditioned", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Laundry service", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Room service", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Child friendly", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Smoke-free", "value": true }
    ],
    "openingHours": "Mo-Su 00:00-23:59",
    "sameAs": [
      "https://www.facebook.com/harikrishnapark",
      "https://www.instagram.com/hotel_harikrishna_park/?locale=ko",
      "https://www.linkedin.com/in/gautam-b-r-a33555330/?originalSubdomain=in"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

export default HotelSchema;
