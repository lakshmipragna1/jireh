// src/components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
    title = "Jireh Technologies - Leading Waterproofing & Construction Solutions in Bangalore, India",
    description = "ISO 9001:2015 certified waterproofing, thermal insulation, epoxy floor coating, structural renovation, and construction services in Bangalore. Expert contractors with 15+ years experience. Free site assessment available.",
    keywords = "waterproofing Bangalore, thermal insulation, epoxy floor coating, structural renovation, construction contractors Bangalore, expansion joint sealing, interior painting, exterior painting, concrete preservation, anti-carbonization, rainwater harvesting, fire extinguisher, civil construction, project management, ISO certified contractors, Jireh Technologies",
    ogImage = "https://jirehtechnologies.com/og-image.jpg",
    url = "https://jirehtechnologies.com/",
    type = "website"
}) => {
    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={ogImage} />
            
            {/* Canonical URL */}
            <link rel="canonical" href={url} />
        </Helmet>
    );
};

export default SEO;

