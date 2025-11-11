// src/data.js

export const CONTACT_INFO = {
    phone: '080-23470818',
    whatsapp: '+91-9632766465',
    email: 'jirehtech1@gmail.com',
    phones: ['080-23470818', '+91-8151009111', '+91-9632766465'],
    emails: ['jirehtech1@gmail.com', 'admin@jireh-tech.com', 'jireh_tech@rediffmail.com'],
    address: '42/2, Goverdhan building, 1st main, 3rd cross, Mathikere main road, Yeshwanthpur, Bangalore – 560022',
    // Google Map embed URL for Jireh Technologies - Official Google Maps location
    // Location: 13.0256901, 77.5574948 (Jireh Technologies, Bangalore)
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4!2d77.5574948!3d13.0256901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d6390c4d8a3%3A0xb3aa3e4744d70b22!2sJireh%20Technologies!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
};



export const EM_PROJECTS = [
    { project: 'Ranni Perunad Power Project', client: 'Kerala State Electricity Board', capacity: '2X2 MW SHEP' },
    { project: 'Perunchani Mini Power Project', client: 'Tamil Nadu Electricity Board', capacity: '0.650X2 MW SHEP' },
    { project: 'Aliyar Small Hydel Power Project', client: 'Tamil Nadu Electricity Board', capacity: '2X1.25 MW SHEP' },
    { project: 'SYNGENE PROJECT', client: 'SIEMENS LTD Mangalore', capacity: 'Fire Alarm panels' },
];

const SERVICES_LIST = [
    { id: 1, name: 'Waterproofing', benefit: 'Complete Protection: Eliminating dampness, leaks, and moisture ingress for long-term structural health.', icon: '💧', category: 'A' },
    { id: 2, name: 'Structural Renovation and Restoration', benefit: 'Renewed Strength: Expert restoration of compromised structures to enhance stability and safety.', icon: '🏗️', category: 'B' },
    { id: 3, name: 'Interior & Exterior Painting', benefit: 'Aesthetic & Durable Finishes: High-quality decorative and protective coatings for visual appeal and asset longevity.', icon: '🎨', category: 'C' },
    { id: 4, name: 'Concrete Preservation', benefit: 'Stop the Decay: Specialized treatments to halt corrosion, cracking, and deterioration in concrete elements.', icon: '🧱', category: 'B' },
    { id: 5, name: 'Anti-Carbonization', benefit: 'Rebar Defense: Applying protective systems to prevent rebar corrosion caused by atmospheric carbon dioxide.', icon: '🛡️', category: 'B' },
    { id: 6, name: 'Thermal Insulation Systems', benefit: 'Energy Efficiency: Advanced insulation to regulate temperatures, reduce HVAC load, and cut energy costs.', icon: '🌡️', category: 'A' },
    { id: 7, name: 'Stone Cleaning and Wood Preservation', benefit: 'Material Integrity: Cleaning and preservation techniques to restore and protect natural stone and wooden surfaces.', icon: '🌳', category: 'C' },
    { id: 8, name: 'Expansion Joint Sealing', benefit: 'Movement Security: Flexible, high-performance sealing of building joints to accommodate movement and prevent water entry.', icon: '🚧', category: 'A' },
    { id: 9, name: 'Epoxy Floor Coating', benefit: 'Industrial-Grade Floors: Durable, seamless, and chemical-resistant coatings for high-traffic, hygienic industrial spaces.', icon: '🏭', category: 'C' },
    { id: 10, name: 'Civil Construction Works', benefit: 'New Infrastructure: End-to-end civil works including minor construction, foundations, and site development.', icon: '🛠️', category: 'D' },
    { id: 11, name: 'Project Management', benefit: 'On-Time, On-Budget Delivery: Professional oversight to ensure seamless coordination, quality control, and schedule adherence.', icon: '📋', category: 'D' },
    { id: 12, name: 'Sump and OHT Tank Cleaning', benefit: 'Hygienic Maintenance: Thorough, chemical-free cleaning of water storage tanks to maintain clean water quality.', icon: '🚰', category: 'D' },
    { id: 13, name: 'Rainwater Harvesting', benefit: 'Sustainable Solutions: Design and implementation of systems to conserve water and maximize utility through efficient collection.', icon: '🌧️', category: 'D' },
    { id: 14, name: 'Ceasefire Fire Extinguisher', benefit: 'Essential Safety Supply: Procurement, supply, and maintenance of certified fire safety equipment for compliance and protection.', icon: '🔥', category: 'D' },
];

export const SERVICE_CATEGORIES = [
    { id: 'A', title: 'Asset Protection & Sealing', icon: '💧🛡️', description: 'Addressing leaks, damp, and temperature issues.' },
    { id: 'B', title: 'Structural Integrity & Restoration', icon: '🏗️🔨', description: 'Focus on the core building health and durability.' },
    { id: 'C', title: 'Finishing, Coatings & Aesthetics', icon: '✨🎨', description: 'Focus on durable, high-performance surface treatments.' },
    { id: 'D', title: 'Specialized & Civil Works', icon: '⚙️✅', description: 'Addressing essential infrastructure, safety, and management.' },
];

export const SERVICES = SERVICES_LIST.map(service => ({
    ...service,
    categoryTitle: SERVICE_CATEGORIES.find(cat => cat.id === service.category).title
}));

// Client logos - 20 prestigious clients
export const CLIENTS = [
    { name: 'Brigade Group', logo: '/clients/brigade.jpg', alt: 'Brigade Group' },
    { name: 'CAE', logo: '/clients/cae.jpg', alt: 'CAE' },
    { name: 'Cluny', logo: '/clients/cluny.jpg', alt: 'Cluny' },
    { name: 'Embassy Group', logo: '/clients/embassy.jpg', alt: 'Embassy Group' },
    { name: 'ENV', logo: '/clients/env.jpg', alt: 'ENV' },
    { name: 'Good Shepherd', logo: '/clients/goodshephard.jpg', alt: 'Good Shepherd' },
    { name: 'HSBC', logo: '/clients/hsbc.jpg', alt: 'HSBC' },
    { name: 'Kirloskar', logo: '/clients/kirloskar.jpg', alt: 'Kirloskar' },
    { name: 'Leela', logo: '/clients/leela.jpg', alt: 'Leela' },
    { name: 'Martha', logo: '/clients/martha.jpg', alt: 'Martha' },
    { name: 'Pai Group', logo: '/clients/pai.jpg', alt: 'Pai Group' },
    { name: 'Prestige', logo: '/clients/prestige.jpg', alt: 'Prestige' },
    { name: 'Qual', logo: '/clients/qual.jpg', alt: 'Qual' },
    { name: 'Religare', logo: '/clients/religare.jpg', alt: 'Religare' },
    { name: 'RMJ', logo: '/clients/rmj.jpg', alt: 'RMJ' },
    { name: 'Synergy', logo: '/clients/synergy.jpg', alt: 'Synergy' },
    { name: 'TM', logo: '/clients/tm.jpg', alt: 'TM' },
    { name: 'TPM', logo: '/clients/tpm.jpg', alt: 'TPM' },
    { name: 'TTP', logo: '/clients/ttp.jpg', alt: 'TTP' },
];

// Construction Chemical Brands - Authorized Applicators
export const AUTHORIZED_BRANDS = [
    { name: 'ALG Chemicals', logo: '/brands/1.png', alt: 'ALG Chemicals - Chemistry for Hygiene and Healthy Life' },
    { name: 'Ardex Endura', logo: '/brands/2.png', alt: 'Ardex Endura' },
    { name: 'Asian Paints', logo: '/brands/3.png', alt: 'Asian Paints' },
    { name: 'MC Bauchemie', logo: '/brands/9.png', alt: 'MC - Be Sure Build Sure' },
    { name: 'MYK Arment', logo: '/brands/10.png', alt: 'MYK Arment' },
    { name: 'Perma', logo: '/brands/11.png', alt: 'Perma Construction Aids' },
    { name: 'Pidilite', logo: '/brands/12.png', alt: 'Pidilite Industries' },
    { name: 'Roff', logo: '/brands/13.png', alt: 'Roff' },
    { name: 'Sika', logo: '/brands/14.png', alt: 'Sika - Building Trust' },
    { name: 'Super Tech', logo: '/brands/15.png', alt: 'Super Tech - Measuring Beyond Expectations' },
    { name: 'Brand 11', logo: '/brands/16.png', alt: 'Construction Chemical Brand' },
];