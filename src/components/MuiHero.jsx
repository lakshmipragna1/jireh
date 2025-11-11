// src/components/MuiHero.js
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import heroImage from '../heroo.png';

const CONTACT_NUMBER = '+919845478566'; 

const MuiHero = () => {
    return (
        <Box
            sx={{
                minHeight: { xs: '70vh', sm: '75vh', md: '85vh', lg: '90vh' },
                height: { xs: '70vh', sm: '75vh', md: '85vh', lg: '90vh' },
                backgroundImage: `url("${heroImage}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: { xs: 'scroll', md: 'fixed' },
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                '&::before': { // Dark overlay
                    content: '""',
                    position: 'absolute',
                    top: 0, right: 0, bottom: 0, left: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center',
                    color: 'white',
                    px: { xs: 2, sm: 3, md: 6, lg: 8, xl: 12 },
                }}
            >
                <Typography
                    variant="h1"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4.5rem', xl: '5rem' },
                        fontWeight: 800,
                        lineHeight: 1.2,
                        mb: { xs: 2, md: 3 },
                        textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
                    }}
                >
                    Protect Your Investment with India’s Most Trusted Engineering Experts.
                </Typography>
                <Typography
                    variant="h5"
                    component="p"
                    mb={{ xs: 4, md: 5 }}
                    fontWeight={300}
                    sx={{
                        fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem', lg: '1.5rem' },
                        maxWidth: '1000px',
                        mx: 'auto',
                        lineHeight: 1.6,
                        textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
                    }}
                >
                    We deliver guaranteed, ISO-certified engineering solutions for commercial, industrial, and residential assets.
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'center',
                    gap: { xs: 2, md: 3 },
                    alignItems: 'center',
                }}>
                    <Button
                        href="#contact"
                        variant="contained"
                        color="secondary"
                        size="large"
                        sx={{
                            fontWeight: 700,
                            px: { xs: 4, md: 5 },
                            py: { xs: 1.3, md: 1.5 },
                            fontSize: { xs: '0.95rem', md: '1.1rem' },
                            width: { xs: '100%', sm: 'auto' },
                            maxWidth: { xs: '350px', sm: 'none' },
                            boxShadow: '0 8px 24px rgba(229,62,62,0.4)',
                            '&:hover': {
                                boxShadow: '0 12px 32px rgba(229,62,62,0.5)',
                                transform: 'translateY(-2px)',
                            },
                            transition: 'all 0.3s ease',
                        }}
                    >
                        Get Your Free Site Assessment
                    </Button>

                    <Button
                        href={`tel:${CONTACT_NUMBER}`}
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<PhoneInTalkIcon />}
                        sx={{
                            fontWeight: 700,
                            px: { xs: 4, md: 5 },
                            py: { xs: 1.3, md: 1.5 },
                            fontSize: { xs: '0.95rem', md: '1.1rem' },
                            width: { xs: '100%', sm: 'auto' },
                            maxWidth: { xs: '350px', sm: 'none' },
                            boxShadow: '0 8px 24px rgba(4,33,97,0.4)',
                            '&:hover': {
                                boxShadow: '0 12px 32px rgba(4,33,97,0.5)',
                                transform: 'translateY(-2px)',
                            },
                            transition: 'all 0.3s ease',
                        }}
                    >
                        Call Now
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default MuiHero;