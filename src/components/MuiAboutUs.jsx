// src/components/MuiAboutUs.jsx
import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Button, Paper, Card, CardContent } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import BuildIcon from '@mui/icons-material/Build';
import PaletteIcon from '@mui/icons-material/Palette';

const MuiAboutUs = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleViewServices = () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const services = [
        { icon: WaterDropIcon, title: 'Waterproofing', color: '#2196F3' },
        { icon: ElectricalServicesIcon, title: 'Electrical Works', color: '#FF9800' },
        { icon: BuildIcon, title: 'Construction', color: '#4CAF50' },
        { icon: PaletteIcon, title: 'Interior Design', color: '#9C27B0' },
    ];

    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                background: '#000',
            }}
            id="about-us"
        >
            {/* Video Background */}
            <Box
                component="video"
                autoPlay
                loop
                muted
                playsInline
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                    opacity: 0.7,
                }}
            >
                <source src="https://v1.pinimg.com/videos/mc/720p/bc/d5/96/bcd5960c9abfa02b2dfc3f44b263321f.mp4" type="video/mp4" />
            </Box>

            {/* Light Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(4,33,97,0.4) 0%, rgba(0,0,0,0.3) 100%)',
                    zIndex: 1,
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 10 }}>
                {/* Section Header */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: '#E60023',
                            fontWeight: 700,
                            fontSize: { xs: '1.5rem', md: '2rem' },
                            letterSpacing: 2,
                            mb: 2,
                            display: 'block',
                            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                        }}
                    >
                        WHO WE ARE
                    </Typography>
                    <Typography
                        variant="h2"
                        component="h2"
                        fontWeight={800}
                        sx={{
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            mb: 3,
                            color: '#fff',
                            textShadow: '0 4px 8px rgba(0,0,0,0.7)',
                        }}
                    >
                        Building Excellence Since 2009
                    </Typography>
                </Box>

                {/* Main Content Grid */}
                <Grid container spacing={4} sx={{ mb: 8 }}>
                    {/* Company Description - Full Width */}
                    <Grid item xs={12}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: 4,
                                borderRadius: '20px',
                                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                                border: '1px solid rgba(4,33,97,0.1)',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 2.5,
                                    lineHeight: 1.9,
                                    fontSize: '1.05rem',
                                    color: 'text.primary',
                                    position: 'relative',
                                    pl: 3,
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: 4,
                                        background: 'linear-gradient(180deg, #042161 0%, #E53E3E 100%)',
                                        borderRadius: '4px',
                                    }
                                }}
                            >
                                We are one of India's leading contractors and engineers specializing in
                                <strong> Waterproofing, Thermal Insulation, Epoxy Floor Coating, Expansion Joint Sealing,
                                Interior Decoration, Painting & Renovation</strong> using quality organic compounds
                                in association with ISO 9001:2015 certified standards and imported technology.
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 2.5,
                                    lineHeight: 1.9,
                                    fontSize: '1.05rem',
                                    color: 'text.primary',
                                }}
                            >
                                Our expertise extends to <strong>waterproofing systems, structural restoration
                                of monument buildings, and comprehensive renovation projects</strong>. We serve
                                diverse sectors including industrial complexes, commercial buildings, residential
                                projects, software companies, hotels, and resorts.
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 3,
                                    lineHeight: 1.9,
                                    fontSize: '1.05rem',
                                    color: 'text.primary',
                                    fontWeight: 600,
                                }}
                            >
                                We deliver exceptional service at competitive prices while maintaining our
                                unwavering commitment to quality excellence.
                            </Typography>

                            <Button
                                onClick={handleViewServices}
                                variant="contained"
                                color="secondary"
                                size="large"
                                sx={{
                                    fontWeight: 700,
                                    px: 5,
                                    py: 2,
                                    fontSize: '1.05rem',
                                    borderRadius: '12px',
                                    boxShadow: '0 8px 24px rgba(229, 62, 62, 0.3)',
                                    alignSelf: 'flex-start',
                                    '&:hover': {
                                        boxShadow: '0 12px 32px rgba(229, 62, 62, 0.4)',
                                        transform: 'translateY(-2px)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                Explore Our Services →
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>

                {/* ISO Certification Badge */}
                <Box
                    sx={{
                        mt: 8,
                        p: 4,
                        borderRadius: '20px',
                        background: 'linear-gradient(135deg, #042161 0%, #0a3a7a 100%)',
                        position: 'relative',
                        overflow: 'hidden',
                        textAlign: 'center',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: -50,
                            right: -50,
                            width: 200,
                            height: 200,
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                        }
                    }}
                >
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} md={8}>
                            <Typography
                                variant="h4"
                                fontWeight={700}
                                sx={{
                                    color: 'white',
                                    mb: 1,
                                    fontSize: { xs: '1.5rem', md: '2rem' },
                                    textAlign: { xs: 'center', md: 'left' }
                                }}
                            >
                                ISO 9001:2015 Certified Company
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'rgba(255,255,255,0.9)',
                                    fontSize: '1.05rem',
                                    textAlign: { xs: 'center', md: 'left' }
                                }}
                            >
                                Committed to international quality standards and excellence in every project we deliver
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: { xs: 'center', md: 'flex-end' },
                                    gap: 2
                                }}
                            >
                                <VerifiedIcon sx={{ fontSize: '4rem', color: '#4CAF50' }} />
                                <Box sx={{ textAlign: 'left' }}>
                                    <Typography
                                        variant="h3"
                                        fontWeight={800}
                                        sx={{ color: 'white', lineHeight: 1 }}
                                    >
                                        ISO
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        fontWeight={600}
                                        sx={{ color: '#4CAF50' }}
                                    >
                                        9001:2015
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default MuiAboutUs;

