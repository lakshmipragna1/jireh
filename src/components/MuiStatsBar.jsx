// src/components/MuiStatsBar.js
import React, { useState, useEffect, useRef } from 'react';
import { Box, Grid, Typography, Container, useTheme } from '@mui/material';
// You must install the 'react-countup' library for a smooth final effect: npm install react-countup
// import CountUp from 'react-countup'; 

// 🔴 Import your four icon images from the assets folder.
import ProjectsIcon from '../assets/count1.png'; 
import ExperienceIcon from '../assets/count2.png';
import ClientsIcon from '../assets/count3.png';
import RestoredIcon from '../assets/count4.png';

// 🔴 Define the STATS array with the imported image variables
const STATS_DATA = [
    { icon: ProjectsIcon, value: '20+', label: 'Products' },
    { icon: ExperienceIcon, value: '300+', label: 'Projects Completed' },
    { icon: ClientsIcon, value: '26+', label: 'Experience' },
    { icon: RestoredIcon, value: '400+', label: 'Happy Clients' },
];

// --- 1. ICON COMPONENT: Displays the Imported Image ---
const StatIcon = ({ src }) => (
    <Box 
        component="img" 
        src={src} 
        alt="Stat Icon" 
        sx={{ 
            width: { xs: 50, md: 70 }, 
            height: { xs: 50, md: 70 }, 
            mr: { xs: 1, md: 2 }
        }} 
    />
);

// --- 2. COUNTUP COMPONENT: Handles the Counting Animation ---
const AnimatedCount = ({ value, suffix = '', duration = 2.5, shouldStart }) => {
    const [count, setCount] = useState(0);
    const theme = useTheme();

    useEffect(() => {
        if (!shouldStart) return; // Only start counting when visible

        let start = 0;
        const end = parseInt(value.replace(/[^0-9]/g, ''));
        if (isNaN(end)) return;

        const increment = end / (duration * 60);

        const timer = setInterval(() => {
            start += increment;
            if (start > end) {
                start = end;
                clearInterval(timer);
            }
            setCount(Math.ceil(start));
        }, 1000 / 60);

        return () => clearInterval(timer);
    }, [value, duration, shouldStart]);

    return (
        <Typography
            variant="h3"
            color="secondary"
            sx={{
                fontSize: { xs: '3rem', md: '4rem' },
                fontWeight: 800,
                lineHeight: 1.1
            }}
        >
            {count.toLocaleString()}
            {suffix}
        </Typography>
    );
};
// ----------------------------------------------------

const MuiStatsBar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Start counting when section is 30% visible
                if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
                    setIsVisible(true);
                }
            },
            {
                threshold: [0, 0.3, 0.5, 1], // Multiple thresholds for better detection
                rootMargin: '0px',
            }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    return (
        <Box
            ref={statsRef}
            sx={{ bgcolor: 'primary.main', py: 4 }}
            id="stats"
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={{ xs: 6, md: 10 }}
                    justifyContent="center"
                    textAlign="center"
                >
                    {STATS_DATA.map((stat) => (
                        <Grid item xs={6} sm={3} key={stat.label}>

                            {/* Icon and Number on the same line (Flexbox) */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mb: 1
                                }}
                            >
                                {/* Icon Image */}
                                <StatIcon src={stat.icon} />

                                {/* Number Count */}
                                <AnimatedCount
                                    value={stat.value.replace(/[^0-9.]/g, '')}
                                    suffix={stat.value.replace(/[0-9.]/g, '')}
                                    shouldStart={isVisible}
                                />
                            </Box>

                            {/* Label, which is positioned below the number/icon block */}
                            <Typography variant="subtitle1" color="white" sx={{ fontWeight: 500, letterSpacing: 1, mt: 0.5 }}>
                                {stat.label}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default MuiStatsBar;