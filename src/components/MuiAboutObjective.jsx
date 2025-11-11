// src/components/MuiAboutObjective.js
import React from 'react';
import { Box, Typography, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Card, Divider } from '@mui/material';
import CheckIcon from '@mui/icons-material/CheckCircle';

// 🛑 IMPORTANT: This path requires the image file 'founder.jpeg' to be in src/assets/
import RajshekarPhoto from '../assets/founder.jpeg';
// Background image for Joy Titus section
import JoyTitusBackground from '../assets/joytitus.jpg';

// New icons for the Value Proposition Grid
import GavelIcon from '@mui/icons-material/Gavel';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const FOUNDER_IMAGE_URL = RajshekarPhoto;

const ValuePillars = [
    { 
        icon: GavelIcon, 
        title: "ISO 9001 Quality", 
        description: "Uncompromising standards ensuring long-term asset durability.", 
        color: 'secondary.main' 
    },
    { 
        icon: TrendingDownIcon, 
        title: "Cost Management", 
        description: "Competitive value by adopting rigorous cost management methodologies.", 
        color: 'error.main'
    },
    { 
        icon: DesignServicesIcon, 
        title: "Custom Engineering", 
        description: "Activities precisely tailored to your unique requirements and specifications.", 
        color: 'info.main'
    },
];

// COMBINING and REFINING objectives from the file and the uploaded image
const coreObjectives = [
    "To be a pioneer in end-to-end building solutions: Waterproofing, Interior Decoration, Structural Restoration, Fabrication, Plumbing, Carpentry, Renovation, and Electrical systems for all kinds of buildings.",
    "To ensure **Total Customer Delight and Satisfaction** in regards to quality of works and maintain uncompromising quality standards across every phase of execution.",
    "To provide the most competitive rate to the customer by adopting rigorous **Cost Management Methodologies**.",
    "To deliver guaranteed, ISO-certified engineering solutions leveraging **imported technology** and superior organic compounds.",
];


const MuiAboutObjective = () => {
    
    return (
        <Box sx={{ py: { xs: 6, sm: 8, md: 10 }, bgcolor: '#f9f9f9' }} id="about">
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    component="h2"
                    textAlign="center"
                    mb={2}
                    sx={{
                        fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' },
                        px: { xs: 2, sm: 0 }
                    }}
                >
                    Our Commitment to Engineering Excellence
                </Typography>
                <Typography
                    variant="h5"
                    color="text.secondary"
                    textAlign="center"
                    mb={{ xs: 4, sm: 6, md: 8 }}
                    sx={{
                        fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
                        px: { xs: 2, sm: 0 }
                    }}
                >
                    Building trust through specialized expertise and transparent operations.
                </Typography>

                {/* 1. FOUNDER/PERSONAL ANCHOR SECTION (Full-Width, Unique Element) */}
                <Box sx={{
                    position: 'relative',
                    bgcolor: 'primary.main',
                    color: 'white',
                    py: { xs: 3, sm: 4, md: 4 },
                    mb: { xs: 2, sm: 3 },
                    borderRadius: 2,
                    textAlign: 'center',
                    backgroundImage: `url(${JoyTitusBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 51, 102, 0.85)', // Dark blue overlay for text readability
                        borderRadius: 2,
                        zIndex: 1,
                    },
                }}>
                    <Box sx={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 2, px: { xs: 2, sm: 3, md: 0 } }}>
                        {/* Founder Photo */}
                        <Box
                            sx={{
                                width: { xs: 80, sm: 100 },
                                height: { xs: 80, sm: 100 },
                                borderRadius: '50%',
                                margin: '0 auto 15px',
                                overflow: 'hidden',
                                border: '4px solid',
                                borderColor: 'secondary.main',
                                backgroundImage: `url("${FOUNDER_IMAGE_URL}")`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center top',
                            }}
                        />
                        <Typography
                            variant="h4"
                            fontWeight={700}
                            color="white"
                            sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }}
                        >
                            Joy Titus
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="secondary.main"
                            mb={2}
                            sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}
                        >
                            Founder & Principal Engineer
                        </Typography>

                        <Typography
                            variant="h6"
                            fontStyle="italic"
                            sx={{
                                mt: 2,
                                px: { xs: 2, sm: 3, md: 4 },
                                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                                lineHeight: { xs: 1.6, md: 1.8 }
                            }}
                        >
                           "We're more than just contractors—we are ISO 9001:2015 Certified Engineers specializing in preserving your assets. Quality is our guarantee. This commitment to a proven, certified process is how we ensure every project, from structural renovation to complex E&M works, meets the highest standards. Our ultimate benchmark for success is your complete satisfaction, a fact reflected in our 116+ Happy Clients.''
                        </Typography>
                    </Box>
                </Box>
                
                {/* 1.5 NEW DYNAMIC OBJECTIVES SECTION - REMOVED */}
                {/* <Card sx={{ 
                    mb: 8, 
                    p: 4, 
                    boxShadow: 3, 
                    bgcolor: 'white', 
                    borderLeft: '8px solid', 
                    borderColor: 'secondary.main',
                    transition: '0.3s',
                    '&:hover': { 
                        boxShadow: 6, 
                        transform: 'translateY(-2px)' 
                    }
                }}>
                    <Typography variant="h4" component="h3" color="primary.dark" fontWeight={700} mb={3}>
                        Our Core Objective
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={3}>
                        Our services, which include Water Proofing systems, Interior Decoration, Structural Restoration, Fabrication, Plumbing, and more, are designed, procured, and performed as per the customer's exact requirements, providing total solutions for new and old buildings.
                    </Typography>
                    <Divider sx={{ mb: 3 }} />
                    <Grid container spacing={2}>
                        {coreObjectives.map((text, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                                <ListItem disableGutters sx={{ alignItems: 'flex-start', py: 0.5 }}>
                                    <ListItemIcon sx={{ minWidth: 40, mt: 0.5 }}>
                                        <CheckIcon color="primary" /> 
                                    </ListItemIcon>
                                    <ListItemText 
                                        primary={
                                            <Typography variant="body1" fontWeight={500}>{text}</Typography>
                                        }
                                    />
                                </ListItem>
                            </Grid>
                        ))}
                    </Grid>
                </Card> */}
                {/* END NEW DYNAMIC OBJECTIVES SECTION - REMOVED */}


                {/* 2. CORE OBJECTIVES & VALUE PILLARS (Tighter Grid Flow) - TITLE AND PILLARS REMOVED */}
                
                {/* <Typography variant="h4" component="h3" color="primary" fontWeight={700} mb={4} textAlign="center">
                    The Jireh Tech Difference
                </Typography> */}

                {/* <Grid container spacing={3} mb={6}>
                    {Value Pillars - Now more compact}
                    {ValuePillars.map((pillar, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Card elevation={0} sx={{ border: 1, borderColor: '#ddd', p: 3, height: '100%', textAlign: 'center' }}>
                                <pillar.icon sx={{ fontSize: 40, color: pillar.color, mb: 1 }} />
                                <Typography variant="h6" fontWeight={700} color="primary.dark" mb={0.5}>{pillar.title}</Typography>
                                <Typography variant="body2" color="text.secondary">{pillar.description}</Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid> */}

                {/* 3. FINAL PROFILE & OBJECTIVES (Tighter List Integration) - TARGET INDUSTRIES SECTION REMOVED */}
                <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} mt={{ xs: 3, sm: 4, md: 6 }}>
                    {/* Left Side: Objectives List - THIS IS NOW REMOVED/INTEGRATED INTO THE NEW SECTION */}
                    {/* <Grid item xs={12} md={6}>
                        <Typography variant="h5" component="h3" color="primary" fontWeight={700} mb={3}>
                            Our Core Mission
                        </Typography>
                        <List>
                            {objectivePillars.map((text, index) => (
                                <ListItem disableGutters key={index} sx={{ alignItems: 'flex-start', py: 0.5 }}>
                                    <ListItemIcon sx={{ minWidth: 40, mt: 0.5 }}>
                                        <CheckIcon color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText 
                                        primary={
                                            <Typography variant="body1" fontWeight={500}>{text}</Typography>
                                        }
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid> */}
                    
                    {/* The right side of the old grid now takes up the full width below the Value Pillars */}
                    {/* <Grid item xs={12}> 
                        <Typography variant="h5" component="h3" color="primary" fontWeight={700} mb={3}>
                            Specialized Expertise Across India
                        </Typography>
                        <Typography variant="body1" color="text.primary" mb={2}>
                            We specialize in building construction solutions for all types of industries, delivering a great service at a very competent price, without ever compromising on quality.
                        </Typography>
                        <Typography variant="body1" color="text.primary" mb={2} fontWeight={600}>
                            Target Industries Include:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Industrial complexes, Commercial complexes, Residential complexes, Software Cos., Hotels, and Resorts, where we provide Waterproofing, Structural Restoration, Renovation, and Interior Decoration services.
                        </Typography>
                    </Grid> */}
                </Grid>
            </Container>
        </Box>
    );
};

export default MuiAboutObjective;