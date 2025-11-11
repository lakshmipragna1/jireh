// src/components/MuiServices.js
import React, { useRef } from 'react';
import { Box, Typography, Button, Container, Card, CardContent, CardMedia, IconButton, useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Import service images - All 14 services mapped correctly
import Image1 from '../assets/service-waterproofing.jpg';
import Image2 from '../assets/service-structural.jpg';
import Image3 from '../assets/service-painting.jpg';
import Image4 from '../assets/service-concrete.jpg';
import Image5 from '../assets/service-carbonization.jpg';
import Image6 from '../assets/service-thermal.jpg';
import Image7 from '../assets/service-stone.jpg';
import Image8 from '../assets/service-expansion.jpg';
import Image9 from '../assets/service-epoxy.jpg';
import Image10 from '../assets/service-civil.jpg';
import Image11 from '../assets/service-project.jpg';
import Image12 from '../assets/service-sump.jpg';
import Image13 from '../assets/service-rainwater.jpg';
import Image14 from '../assets/service-fire.jpg';

// Added a 'subDescription' property for the extra line
const SERVICES_DATA = [
    { 
        id: 1, 
        name: 'Waterproofing', 
        description: 'Complete Protection: Eliminating dampness, leaks, and moisture ingress for long-term structural health.',
        image: Image1 
    },
    { 
        id: 2, 
        name: 'Structural Renovation and Restoration', 
        description: 'Renewed Strength: Expert restoration of compromised structures to enhance stability and safety.', 
        image: Image2 
    },
    { 
        id: 3, 
        name: 'Interior & Exterior Painting', 
        description: 'Aesthetic & Durable Finishes: High-quality decorative and protective coatings for visual appeal and asset longevity.', 
        image: Image3 
    },
    { 
        id: 4, 
        name: 'Concrete Preservation', 
        description: 'Stop the Decay: Specialized treatments to halt corrosion, cracking, and deterioration in concrete elements.',
        image: Image4 
    },
    { 
        id: 5, 
        name: 'Anti-Carbonization', 
        description: 'Rebar Defense: Applying protective systems to prevent rebar corrosion caused by atmospheric carbon dioxide.', 
        image: Image5 
    },
    { 
        id: 6, 
        name: 'Thermal Insulation Systems', 
        description: 'Energy Efficiency: Advanced insulation to regulate temperatures, reduce HVAC load, and cut energy costs.', 
        image: Image6 
    },
    { 
        id: 7, 
        name: 'Stone Cleaning and Wood Preservation', 
        description: 'Material Integrity: Cleaning and preservation techniques to restore and protect natural stone and wooden surfaces.', 
        image: Image7 
    },
    { 
        id: 8, 
        name: 'Expansion Joint Sealing', 
        description: 'Movement Security: Flexible, high-performance sealing of building joints to accommodate movement and prevent water entry.', 
        image: Image8 
    },
    { 
        id: 9, 
        name: 'Epoxy Floor Coating', 
        description: 'Industrial-Grade Floors: Durable, seamless, and chemical-resistant coatings for high-traffic, hygienic industrial spaces.', 
        image: Image9 
    },
    { 
        id: 10, 
        name: 'Civil Construction Works', 
        description: 'New Infrastructure: End-to-end civil works including minor construction, foundations, and site development.', 
        image: Image10 
    },
    { 
        id: 11, 
        name: 'Project Management', 
        description: 'On-Time, On-Budget Delivery: Professional oversight to ensure seamless coordination, quality control, and schedule adherence.', 
        image: Image11 
    },
    { 
        id: 12, 
        name: 'Sump & OHT Tank Cleaning', 
        description: 'Hygienic Maintenance: Thorough, chemical-free cleaning of water storage tanks to maintain clean water quality.', 
        image: Image12 
    },
    { 
        id: 13, 
        name: 'Rainwater Harvesting', 
        description: 'Sustainable Solutions: Design and implementation of systems to conserve water and maximize utility through efficient collection.', 
        image: Image13 
    },
    { 
        id: 14, 
        name: 'Ceasefire Fire Extinguisher', 
        description: 'Essential Safety Supply: Procurement, supply, and maintenance of certified fire safety equipment for compliance and protection.', 
        image: Image14 
    },
];

// --- 1. Service Card Component ---
// IMPROVED DESIGN: Service name always visible at bottom
const ServiceCard = ({ image, name, description }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <Card
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{
                minWidth: { xs: 280, sm: 300, md: 320 },
                maxWidth: { xs: 280, sm: 300, md: 320 },
                height: { xs: 420, sm: 440, md: 460 },
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                borderRadius: 3,
                boxShadow: isHovered ? '0 20px 60px rgba(4,33,97,0.3)' : '0 4px 20px rgba(0,0,0,0.1)',
                transform: isHovered ? 'translateY(-15px) scale(1.03)' : 'translateY(0) scale(1)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                border: isHovered ? '3px solid #E53E3E' : '3px solid transparent',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Image Container with Overlay */}
            <Box
                sx={{
                    position: 'relative',
                    height: 240,
                    width: '100%',
                    overflow: 'hidden',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(4,33,97,0.95) 0%, rgba(229,62,62,0.85) 100%)',
                        opacity: isHovered ? 0.95 : 0,
                        transition: 'opacity 0.4s ease',
                        zIndex: 1,
                    },
                }}
            >
                {/* Card Image with zoom effect */}
                <CardMedia
                    component="img"
                    image={image}
                    alt={name}
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        transition: 'transform 0.4s ease',
                        transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                    }}
                />

                {/* Hover Content - Shows over image */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: 3,
                        zIndex: 2,
                        opacity: isHovered ? 1 : 0,
                        transition: 'opacity 0.4s ease',
                        pointerEvents: isHovered ? 'auto' : 'none',
                    }}
                >
                    <Typography
                        variant="body1"
                        color="white"
                        textAlign="center"
                        sx={{
                            lineHeight: 1.7,
                            fontSize: '0.95rem',
                            mb: 3,
                            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                        }}
                    >
                        {description}
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => {
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                                contactSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        sx={{
                            bgcolor: 'white',
                            color: '#042161',
                            fontWeight: 700,
                            px: 4,
                            py: 1.5,
                            borderRadius: 2,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                            '&:hover': {
                                bgcolor: '#E53E3E',
                                color: 'white',
                                transform: 'scale(1.05)',
                                boxShadow: '0 6px 20px rgba(229,62,62,0.4)',
                            },
                            transition: 'all 0.3s ease',
                        }}
                    >
                        Know More
                    </Button>
                </Box>
            </Box>

            {/* Service Name - ALWAYS VISIBLE at bottom */}
            <CardContent
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: { xs: 2, sm: 2.5, md: 3 },
                    minHeight: { xs: '100px', sm: '110px', md: '120px' },
                    bgcolor: isHovered ? '#042161' : 'white',
                    transition: 'all 0.4s ease',
                }}
            >
                <Typography
                    variant="h5"
                    component="h3"
                    color={isHovered ? 'white' : 'primary.main'}
                    fontWeight={700}
                    textAlign="center"
                    sx={{
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                        lineHeight: 1.3,
                        transition: 'color 0.4s ease',
                    }}
                >
                    {name}
                </Typography>
            </CardContent>
        </Card>
    );
};

// --- 2. Main Services Component ---
const MuiServices = () => {
    // NEW: Ref for the scrollable container
    const scrollContainerRef = useRef(null);
    const theme = useTheme();
    // Use 'md' breakpoint for better control over arrow visibility
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); 
    
    // Function to scroll the container
    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            // Smaller scroll amount for mobile, larger for desktop
            const scrollAmount = isMobile ? 250 : 350; 
            const newScrollLeft = 
                scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            
            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        // Removed py: 12 from Box to allow arrows to reach the corners
        <Box id="services"> 
            {/* Set max width to 'false' to allow the arrow icons to use the full screen width, 
                and add vertical padding here */}
            <Container maxWidth={false} sx={{ position: 'relative', py: 12 }}> 
                <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
                    <Typography variant="h2" component="h2" mb={4}>
                        Our Services
                    </Typography>
                </Container>

                {/* Horizontal Scroll Container */}
                <Box sx={{ position: 'relative' }}>
                    
                    {/* --- Left Arrow - Positioned to the very left corner, visible on all screens */}
                    <IconButton 
                        onClick={() => scroll('left')} 
                        size="large"
                        sx={{ 
                            position: 'absolute', 
                            left: 0, // Positioned at the very left edge of the screen
                            top: '50%', 
                            transform: 'translateY(-50%)', 
                            zIndex: 10,
                            // Use a more prominent background for the corners
                            bgcolor: 'primary.main', 
                            color: 'white',
                            height: '100%', // Stretch vertically to cover the whitespace on the side
                            width: { xs: 'auto', md: '50px' }, // Set a fixed width on desktop for visual balance
                            borderRadius: 0, // Square corners
                            boxShadow: 5,
                            '&:hover': { bgcolor: 'primary.dark', color: 'white' },
                            // Hide on extra small screens if desired, but keeping it visible to use the space
                            display: 'flex' 
                        }}
                    >
                        {/* Smaller icon size on mobile for less intrusion */}
                        <ArrowBackIosNewIcon sx={{ fontSize: { xs: 20, md: 30 } }} />
                    </IconButton>

                    {/* --- Scrollable Cards Container - Confined within max width container for centering */}
                    <Container maxWidth="lg" disableGutters>
                        <Box
                            ref={scrollContainerRef}
                            sx={{
                                display: 'flex',
                                overflowX: 'auto', 
                                py: 2, 
                                scrollSnapType: 'x mandatory', 
                                gap: 3, 
                                '&::-webkit-scrollbar': { display: 'none' }, 
                                msOverflowStyle: 'none', 
                                scrollbarWidth: 'none', 
                                px: { xs: 2, md: 0 } // Add horizontal padding on small screens if needed
                            }}
                        >
                            {SERVICES_DATA.map((service) => (
                                <Box
                                    key={service.id}
                                    sx={{
                                        scrollSnapAlign: 'start',
                                        flexShrink: 0,
                                    }}
                                >
                                    <ServiceCard {...service} />
                                </Box>
                            ))}
                        </Box>
                    </Container>

                    {/* --- Right Arrow - Positioned to the very right corner, visible on all screens */}
                    <IconButton 
                        onClick={() => scroll('right')} 
                        size="large"
                        sx={{ 
                            position: 'absolute', 
                            right: 0, // Positioned at the very right edge of the screen
                            top: '50%', 
                            transform: 'translateY(-50%)', 
                            zIndex: 10,
                            // Use a more prominent background for the corners
                            bgcolor: 'primary.main', 
                            color: 'white',
                            height: '100%', // Stretch vertically to cover the whitespace on the side
                            width: { xs: 'auto', md: '50px' }, // Set a fixed width on desktop for visual balance
                            borderRadius: 0, // Square corners
                            boxShadow: 5,
                            '&:hover': { bgcolor: 'primary.dark', color: 'white' },
                            display: 'flex'
                        }}
                    >
                        {/* Smaller icon size on mobile for less intrusion */}
                        <ArrowForwardIosIcon sx={{ fontSize: { xs: 20, md: 30 } }} />
                    </IconButton>
                </Box>
                
                {/* --- Final CTA - ENHANCED STYLING APPLIED HERE --- */}
                <Box
                    mt={4}
                    py={3}
                    px={0}
                    bgcolor="grey.50"
                    borderRadius={0}
                    boxShadow={3}
                    sx={{ textAlign: 'center', width: '100%' }}
                >
                    <Typography
                        variant="h5"
                        component="p"
                        color="text.primary"
                        mb={3}
                        fontWeight={600}
                    >
                        Every service we offer is backed by our ISO-certified commitment to quality and engineering excellence.
                    </Typography>
                    <Button
                        href="#contact"
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{
                            color: 'white',
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            px: 6,
                            py: 1.5,
                            borderRadius: 1,
                            '&:hover': {
                                bgcolor: 'secondary.main',
                            }
                        }}
                    >
                        Request a Consultation on Your Project Now
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default MuiServices;