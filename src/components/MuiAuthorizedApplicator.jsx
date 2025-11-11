// src/components/MuiAuthorizedApplicator.jsx
import React, { useRef } from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { AUTHORIZED_BRANDS } from '../data';

const MuiAuthorizedApplicator = () => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300;
            const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Box
            sx={{
                py: { xs: 4, md: 5 },
                bgcolor: 'primary.main',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(229,62,62,0.15) 0%, rgba(10,25,48,0.95) 100%)',
                    zIndex: 0,
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '-50%',
                    right: '-10%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(229,62,62,0.1) 0%, transparent 70%)',
                    zIndex: 0,
                }
            }}
            id="brands"
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography
                        variant="h3"
                        component="h2"
                        fontWeight={700}
                        color="white"
                        sx={{
                            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            mb: 2,
                            position: 'relative',
                            display: 'inline-block',
                            whiteSpace: 'nowrap',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: '-12px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '100px',
                                height: '4px',
                                bgcolor: 'secondary.main',
                                borderRadius: '2px',
                            }
                        }}
                    >
                        Construction Chemicals dealing with-and Authorized Applicator
                    </Typography>
                    <Typography
                        variant="body1"
                        color="rgba(255,255,255,0.8)"
                        sx={{ mt: 4, fontSize: '0.95rem' }}
                    >
                        Partnered with industry-leading brands for superior quality
                    </Typography>
                </Box>

            </Container>

            {/* Navigation Container - Full Width with Arrows at Extreme Ends */}
            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%', px: { xs: 1, md: 2 } }}>
                {/* Left Arrow - Extreme Left */}
                <IconButton
                    onClick={() => scroll('left')}
                    sx={{
                        zIndex: 2,
                        bgcolor: 'rgba(255,255,255,0.9)',
                        color: 'secondary.main',
                        '&:hover': {
                            bgcolor: 'white',
                            transform: 'scale(1.1)',
                        },
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                        width: { xs: 36, md: 45 },
                        height: { xs: 36, md: 45 },
                        flexShrink: 0,
                    }}
                >
                    <ChevronLeft sx={{ fontSize: { xs: 24, md: 32 } }} />
                </IconButton>

                {/* Logo Container - Full Width */}
                <Box
                    ref={scrollContainerRef}
                    sx={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        overflowX: 'auto',
                        overflowY: 'hidden',
                        gap: { xs: 3, sm: 4, md: 5 },
                        px: { xs: 2, md: 3 },
                        py: 1,
                        flex: 1,
                        justifyContent: 'flex-start',
                        scrollbarWidth: 'none', // Firefox
                        '&::-webkit-scrollbar': {
                            display: 'none', // Chrome, Safari, Edge
                        },
                    }}
                >
                    {AUTHORIZED_BRANDS.map((brand, index) => (
                        <Box
                            key={index}
                            sx={{
                                minWidth: { xs: '100px', sm: '120px', md: '140px' },
                                width: { xs: '100px', sm: '120px', md: '140px' },
                                height: { xs: '60px', sm: '70px', md: '80px' },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s ease',
                                flexShrink: 0,
                                filter: 'brightness(1)',
                                '&:hover': {
                                    transform: 'scale(1.15)',
                                    filter: 'brightness(1.1) drop-shadow(0 8px 16px rgba(229,62,62,0.4))',
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={brand.logo}
                                alt={brand.alt || brand.name}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = `<div style="color: white; font-size: 12px; font-weight: 600; text-align: center;">${brand.name}</div>`;
                                }}
                                sx={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain',
                                }}
                            />
                        </Box>
                    ))}
                </Box>

                {/* Right Arrow - Extreme Right */}
                <IconButton
                    onClick={() => scroll('right')}
                    sx={{
                        zIndex: 2,
                        bgcolor: 'rgba(255,255,255,0.9)',
                        color: 'secondary.main',
                        '&:hover': {
                            bgcolor: 'white',
                            transform: 'scale(1.1)',
                        },
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                        width: { xs: 36, md: 45 },
                        height: { xs: 36, md: 45 },
                        flexShrink: 0,
                    }}
                >
                    <ChevronRight sx={{ fontSize: { xs: 24, md: 32 } }} />
                </IconButton>
            </Box>

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, height: 0 }}>
            </Container>
        </Box>
    );
};

export default MuiAuthorizedApplicator;

