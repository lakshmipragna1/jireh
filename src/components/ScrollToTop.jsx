// src/components/ScrollToTop.jsx
import React, { useState, useEffect } from 'react';
import { Fab, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <Zoom in={isVisible}>
            <Fab
                onClick={scrollToTop}
                color="secondary"
                size="medium"
                aria-label="scroll back to top"
                sx={{
                    position: 'fixed',
                    bottom: { xs: 16, md: 24 },
                    right: { xs: 16, md: 24 },
                    zIndex: 1000,
                    boxShadow: '0 4px 12px rgba(229, 62, 62, 0.4)',
                    '&:hover': {
                        boxShadow: '0 6px 16px rgba(229, 62, 62, 0.5)',
                        transform: 'translateY(-4px)',
                    },
                    transition: 'all 0.3s ease',
                }}
            >
                <KeyboardArrowUpIcon />
            </Fab>
        </Zoom>
    );
};

export default ScrollToTop;

