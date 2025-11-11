// src/components/MuiAnnouncementBar.js
import React from 'react';
import { Box, Typography, Divider, Link } from '@mui/material';
import { CONTACT_INFO } from '../data';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const MuiAnnouncementBar = () => {
    
    const marqueeContent = (
        <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', mx: 4 }}> 
      
            {/* --- 2. Trust Statement (ISO) --- */}
            <CheckCircleIcon sx={{ color: 'secondary.main', mr: 1, fontSize: '1rem' }} />
            <Typography component="span" fontWeight={600} mr={3} sx={{ fontSize: '0.9rem' }}>
                ISO 9001:2015 Certified Engineering Solutions! 
            </Typography>

            <Divider orientation="vertical" flexItem sx={{ bgcolor: 'white', mx: 5 }} />
            
            {/* --- 1. Primary CTA (Phone) --- */}
            <PhoneInTalkIcon sx={{ color: 'secondary.main', mr: 1, fontSize: '1rem' }} />
            <Typography component="span" mr={1} sx={{ fontSize: '0.9rem' }} fontWeight={600}>
                Book Your FREE Site Assessment:
            </Typography>
            <Link href={`tel:${CONTACT_INFO.phone}`} color="secondary" fontWeight={700} sx={{ textDecoration: 'none', fontSize: '0.9rem' }}>
                {CONTACT_INFO.phone}
            </Link>
            
            <Divider orientation="vertical" flexItem sx={{ bgcolor: 'white', mx: 5 }} />

            

            {/* --- 3. CUSTOMER SATISFACTION --- */}
            <ThumbUpIcon sx={{ color: 'secondary.main', mr: 1, fontSize: '1rem' }} />
            <Typography component="span" fontWeight={600} sx={{ fontSize: '0.9rem' }}>
                100% Customer Satisfaction and Quality Guaranteed! 
            </Typography>

            <Divider orientation="vertical" flexItem sx={{ bgcolor: 'white', mx: 5 }} />

            {/* --- 4. IN-TIME WORK/PROJECT DELIVERY --- */}
            <AccessTimeIcon sx={{ color: 'secondary.main', mr: 1, fontSize: '1rem' }} />
            <Typography component="span" fontWeight={600}  sx={{ fontSize: '0.9rem' }}>
                Proven Track Record of On-Time Project Delivery! 
            </Typography>

            <Divider orientation="vertical" flexItem sx={{ bgcolor: 'white', mx: 5 }} />

            {/* --- 5. BEST CONTRACTOR/ENGINEER --- */}
            <Typography component="span"  fontWeight={600} sx={{ fontSize: '0.9rem' }}>
                Leading Contractors Engineers for Industrial Assets.
            </Typography>
        </Box>
    );

    return (
        <Box
            sx={{
                bgcolor: '#012063',
                color: 'white',
                py: 1,
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1300,
            }}
        >
            <Box
                className="announcement-marquee"
                sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    whiteSpace: 'nowrap',
                }}
            >
                {marqueeContent}
                {marqueeContent}
                {marqueeContent}
                {marqueeContent}
            </Box>
        </Box>
    );
};

export default MuiAnnouncementBar;