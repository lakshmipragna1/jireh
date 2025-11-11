// src/components/MuiFooter.js
import React from 'react';
import { Box, Typography, Container, Grid, IconButton } from '@mui/material';
import { CONTACT_INFO } from '../data';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import JirehLogo from '../assets/jireh white.png';

const ServiceLink = ({ children }) => (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 1,
            color: '#ccc',
            cursor: 'pointer',
            transition: 'all 0.3s',
            '&:hover': {
                color: 'white',
                transform: 'translateX(5px)'
            }
        }}
    >
        <ChevronRightIcon sx={{ fontSize: '0.9rem', mr: 0.5, color: 'secondary.main' }} />
        <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
            {children}
        </Typography>
    </Box>
);

const MuiFooter = () => {
    return (
        <Box sx={{ bgcolor: 'primary.main', color: '#ccc', py: 4 }} component="footer">
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    {/* Column 1: Logo & Description */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{ mb: 2 }}>
                            <img
                                src={JirehLogo}
                                alt="Jireh Technologies"
                                style={{ height: '45px', marginBottom: '12px' }}
                            />
                        </Box>
                        <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.7, color: '#ccc', fontSize: '0.85rem' }}>
                            Leading Contractors and Engineers for Waterproofing, Thermal Insulation, Epoxy Floor Coating, Expansion Joint Sealing, Interior & Exterior Painting, and Renovation across India.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton
                                sx={{
                                    bgcolor: 'rgba(255,255,255,0.1)',
                                    color: 'white',
                                    '&:hover': { bgcolor: 'secondary.main' },
                                    width: 34,
                                    height: 34
                                }}
                            >
                                <FacebookIcon sx={{ fontSize: '1.1rem' }} />
                            </IconButton>
                            <IconButton
                                sx={{
                                    bgcolor: 'rgba(255,255,255,0.1)',
                                    color: 'white',
                                    '&:hover': { bgcolor: 'secondary.main' },
                                    width: 34,
                                    height: 34
                                }}
                            >
                                <TwitterIcon sx={{ fontSize: '1.1rem' }} />
                            </IconButton>
                            <IconButton
                                sx={{
                                    bgcolor: 'rgba(255,255,255,0.1)',
                                    color: 'white',
                                    '&:hover': { bgcolor: 'secondary.main' },
                                    width: 34,
                                    height: 34
                                }}
                            >
                                <PinterestIcon sx={{ fontSize: '1.1rem' }} />
                            </IconButton>
                            <IconButton
                                sx={{
                                    bgcolor: 'rgba(255,255,255,0.1)',
                                    color: 'white',
                                    '&:hover': { bgcolor: 'secondary.main' },
                                    width: 34,
                                    height: 34
                                }}
                            >
                                <InstagramIcon sx={{ fontSize: '1.1rem' }} />
                            </IconButton>
                        </Box>
                    </Grid>

                    {/* Column 2: Contact Info */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="h6"
                            color="white"
                            fontWeight={600}
                            mb={2}
                            sx={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}
                        >
                            CONTACT INFO
                        </Typography>

                        <Box sx={{ mb: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                                <LocationOnIcon sx={{ fontSize: '1.1rem', mr: 1.2, color: 'secondary.main', mt: 0.2 }} />
                                <Typography variant="body2" sx={{ lineHeight: 1.6, color: '#ccc', fontSize: '0.85rem' }}>
                                    {CONTACT_INFO.address}
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ mb: 1.5 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                <PhoneIcon sx={{ fontSize: '1.1rem', mr: 1.2, color: 'secondary.main' }} />
                                <Box>
                                    <Typography variant="body2" sx={{ color: '#ccc', fontSize: '0.85rem' }}>
                                        080-23470818
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#ccc', fontSize: '0.85rem' }}>
                                        +91-8151009111
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#ccc', fontSize: '0.85rem' }}>
                                        +91-9632766465
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <EmailIcon sx={{ fontSize: '1.1rem', mr: 1.2, color: 'secondary.main' }} />
                            <Box>
                                <Typography variant="body2" sx={{ color: '#ccc', fontSize: '0.85rem' }}>
                                    jirehtech1@gmail.com
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#ccc', fontSize: '0.85rem' }}>
                                    admin@jireh-tech.com
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#ccc', fontSize: '0.85rem' }}>
                                    jireh_tech@rediffmail.com
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Column 3: Our Services (First Set) */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="h6"
                            color="white"
                            fontWeight={600}
                            mb={2}
                            sx={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}
                        >
                            OUR SERVICES
                        </Typography>
                        <ServiceLink>Waterproofing</ServiceLink>
                        <ServiceLink>Structural Renovation</ServiceLink>
                        <ServiceLink>Interior & Exterior Painting</ServiceLink>
                        <ServiceLink>Concrete Preservation</ServiceLink>
                        <ServiceLink>Anti-Carbonization</ServiceLink>
                        <ServiceLink>Thermal Insulation Systems</ServiceLink>
                        <ServiceLink>Stone Cleaning & Wood Preservation</ServiceLink>
                    </Grid>

                    {/* Column 4: Our Services (Second Set) */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="h6"
                            color="white"
                            fontWeight={600}
                            mb={2}
                            sx={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px', visibility: 'hidden' }}
                        >
                            SERVICES
                        </Typography>
                        <ServiceLink>Expansion Joint Sealing</ServiceLink>
                        <ServiceLink>Epoxy Floor Coating</ServiceLink>
                        <ServiceLink>Civil Construction Works</ServiceLink>
                        <ServiceLink>Project Management</ServiceLink>
                        <ServiceLink>Sump & OHT Tank Cleaning</ServiceLink>
                        <ServiceLink>Rainwater Harvesting</ServiceLink>
                        <ServiceLink>Ceasefire Fire Extinguisher</ServiceLink>
                    </Grid>
                </Grid>

                {/* Copyright */}
                <Box
                    mt={3}
                    pt={2.5}
                    borderTop="1px solid rgba(255,255,255,0.1)"
                    textAlign="center"
                >
                    <Typography variant="body2" sx={{ color: '#999', fontSize: '0.8rem' }}>
                        © {new Date().getFullYear()} Jireh Technologies. All Rights Reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default MuiFooter;