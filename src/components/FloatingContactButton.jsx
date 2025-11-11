// src/components/FloatingContactButton.jsx
import React, { useState } from 'react';
import { Box, IconButton, Tooltip, Zoom, Fade } from '@mui/material';
import { Chat as ChatIcon, WhatsApp, Phone, Close } from '@mui/icons-material';

const FloatingContactButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Contact information
    const whatsappNumber = '919632766465'; // WhatsApp number (country code + number, no spaces or +)
    const phoneNumber = '080-23470818'; // Phone number

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    };

    const handlePhoneClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: { xs: 20, md: 30 },
                left: { xs: 20, md: 30 },
                zIndex: 1000,
            }}
        >
            {/* Contact Options - WhatsApp and Phone */}
            <Fade in={isOpen}>
                <Box
                    sx={{
                        display: isOpen ? 'flex' : 'none',
                        flexDirection: 'column',
                        gap: 2,
                        mb: 2,
                    }}
                >
                    {/* WhatsApp Button */}
                    <Zoom in={isOpen} style={{ transitionDelay: isOpen ? '100ms' : '0ms' }}>
                        <Tooltip title="Chat on WhatsApp" placement="right" arrow>
                            <IconButton
                                onClick={handleWhatsAppClick}
                                sx={{
                                    bgcolor: '#25D366',
                                    color: 'white',
                                    width: { xs: 50, md: 56 },
                                    height: { xs: 50, md: 56 },
                                    boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
                                    '&:hover': {
                                        bgcolor: '#128C7E',
                                        transform: 'scale(1.1)',
                                        boxShadow: '0 6px 20px rgba(37, 211, 102, 0.6)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                <WhatsApp sx={{ fontSize: { xs: 28, md: 32 } }} />
                            </IconButton>
                        </Tooltip>
                    </Zoom>

                    {/* Phone Button */}
                    <Zoom in={isOpen} style={{ transitionDelay: isOpen ? '200ms' : '0ms' }}>
                        <Tooltip title="Call Us" placement="right" arrow>
                            <IconButton
                                onClick={handlePhoneClick}
                                sx={{
                                    bgcolor: '#E53935',
                                    color: 'white',
                                    width: { xs: 50, md: 56 },
                                    height: { xs: 50, md: 56 },
                                    boxShadow: '0 4px 12px rgba(229, 57, 53, 0.4)',
                                    '&:hover': {
                                        bgcolor: '#C62828',
                                        transform: 'scale(1.1)',
                                        boxShadow: '0 6px 20px rgba(229, 57, 53, 0.6)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                <Phone sx={{ fontSize: { xs: 28, md: 32 } }} />
                            </IconButton>
                        </Tooltip>
                    </Zoom>
                </Box>
            </Fade>

            {/* Main Chat Button */}
            <Tooltip title={isOpen ? "Close" : "Contact Us"} placement="right" arrow>
                <IconButton
                    onClick={handleToggle}
                    sx={{
                        bgcolor: 'primary.main',
                        color: 'white',
                        width: { xs: 56, md: 64 },
                        height: { xs: 56, md: 64 },
                        boxShadow: '0 6px 20px rgba(4, 33, 97, 0.4)',
                        '&:hover': {
                            bgcolor: 'secondary.main',
                            transform: 'rotate(90deg) scale(1.1)',
                            boxShadow: '0 8px 28px rgba(229, 62, 62, 0.5)',
                        },
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                    }}
                >
                    {isOpen ? (
                        <Close sx={{ fontSize: { xs: 32, md: 36 } }} />
                    ) : (
                        <ChatIcon sx={{ fontSize: { xs: 32, md: 36 } }} />
                    )}
                </IconButton>
            </Tooltip>
        </Box>
    );
};

export default FloatingContactButton;

