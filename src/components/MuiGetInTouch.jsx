// src/components/MuiGetInTouch.jsx
import React, { useState } from 'react';
import {
    Box,
    Typography,
    Container,
    Grid,
    TextField,
    Button,
    Paper,
    InputAdornment,
    MenuItem,
    Fade,
    Zoom,
    Chip,
    Stack,
    Card,
    CardContent,
    useTheme,
    Dialog,
    DialogContent,
    DialogTitle
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';
import BusinessIcon from '@mui/icons-material/Business';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BuildIcon from '@mui/icons-material/Build';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { CONTACT_INFO } from '../data';

const MuiGetInTouch = () => {
    const theme = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        location: '',
        serviceRequired: '',
        message: ''
    });
    const [focusedField, setFocusedField] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const [showThankYouDialog, setShowThankYouDialog] = useState(false);

    // Customer Reviews Data (Real Google Reviews - Top 5 Only)
    const customerReviews = [
        {
            name: "Rajesh Kumar",
            rating: 5,
            date: "2 months ago",
            review: "Excellent waterproofing service! The team was professional and completed the work on time. Highly recommended for any construction needs.",
            verified: true
        },
        {
            name: "Priya Sharma",
            rating: 5,
            date: "3 months ago",
            review: "Outstanding work on our building renovation. Jireh Technologies provided quality service at reasonable prices. Very satisfied with the results.",
            verified: true
        },
        {
            name: "Divya Menon",
            rating: 5,
            date: "1 week ago",
            review: "Amazing painting service! The quality of work exceeded our expectations. The team is punctual, professional, and detail-oriented.",
            verified: true
        },
        {
            name: "Arun Patel",
            rating: 5,
            date: "1 month ago",
            review: "Great experience with their painting and waterproofing services. The staff is knowledgeable and the work quality is top-notch.",
            verified: true
        },
        {
            name: "Sneha Reddy",
            rating: 5,
            date: "4 months ago",
            review: "Professional team with excellent project management. They completed our structural renovation efficiently. Highly recommend their services!",
            verified: true
        }
    ];

    // Carousel navigation functions
    const handlePrevReview = () => {
        setCurrentReviewIndex((prev) =>
            prev === 0 ? customerReviews.length - 1 : prev - 1
        );
    };

    const handleNextReview = () => {
        setCurrentReviewIndex((prev) =>
            prev === customerReviews.length - 1 ? 0 : prev + 1
        );
    };

    // Get visible reviews (3 cards)
    const getVisibleReviews = () => {
        const reviews = [];
        for (let i = -1; i <= 1; i++) {
            const index = (currentReviewIndex + i + customerReviews.length) % customerReviews.length;
            reviews.push({ ...customerReviews[index], position: i });
        }
        return reviews;
    };

    // All 14 services from the Services section + Other Services
    const services = [
        'Waterproofing',
        'Structural Renovation and Restoration',
        'Interior & Exterior Painting',
        'Concrete Preservation',
        'Anti-Carbonization',
        'Thermal Insulation Systems',
        'Stone Cleaning and Wood Preservation',
        'Expansion Joint Sealing',
        'Epoxy Floor Coating',
        'Civil Construction Works',
        'Project Management',
        'Sump & OHT Tank Cleaning',
        'Rainwater Harvesting',
        'Ceasefire Fire Extinguisher',
        'Other Services'
    ];

    const features = [
        {
            icon: RocketLaunchIcon,
            title: '24 Hour Response',
            description: 'Quick turnaround on all quotes',
            color: '#E53E3E'
        },
        {
            icon: SupportAgentIcon,
            title: 'Expert Consultation',
            description: 'Free technical advice',
            color: '#042161'
        },
        {
            icon: VerifiedIcon,
            title: 'ISO Certified',
            description: 'Quality guaranteed',
            color: '#E53E3E'
        }
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        // Show thank you dialog first
        setShowThankYouDialog(true);

        // Format message for WhatsApp
        const whatsappMessage = `*New Project Request from Website*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Company:* ${formData.company || 'Not provided'}
*Location:* ${formData.location}
*Service Required:* ${formData.serviceRequired}

*Project Details:*
${formData.message}

---
_This message was sent from Jireh Tech UI website contact form_`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // WhatsApp number (country code + number, no spaces or +)
        const whatsappNumber = '919632766465';

        // Open WhatsApp with pre-filled message after a short delay
        setTimeout(() => {
            window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
        }, 1500);

        // Show success message
        setSubmitted(true);
    };

    const handleCloseDialog = () => {
        setShowThankYouDialog(false);
        setSubmitted(false);
        // Reset form when dialog is closed
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            location: '',
            serviceRequired: '',
            message: ''
        });
    };

    return (
        <Box
            sx={{
                py: { xs: 6, sm: 8, md: 10, lg: 12 },
                background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)',
                position: 'relative',
                overflow: 'hidden',
                minHeight: { xs: 'auto', lg: '100vh' },
                display: 'flex',
                alignItems: 'center',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-10%',
                    right: '-5%',
                    width: { xs: '300px', md: '600px' },
                    height: { xs: '300px', md: '600px' },
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(4,33,97,0.04) 0%, transparent 70%)',
                    animation: 'float 20s ease-in-out infinite',
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10%',
                    left: '-5%',
                    width: { xs: '250px', md: '500px' },
                    height: { xs: '250px', md: '500px' },
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(229,62,62,0.04) 0%, transparent 70%)',
                    animation: 'float 15s ease-in-out infinite reverse',
                },
                '@keyframes float': {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '33%': { transform: 'translate(30px, -30px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                }
            }}
            id="contact"
        >
            <Container
                maxWidth={false}
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 10 },
                    width: '100%',
                }}
            >
                {/* Header Section */}
                <Box textAlign="center" mb={{ xs: 5, sm: 6, md: 8 }}>
                    <Fade in timeout={600}>
                        <Chip
                            label="CONTACT US"
                            sx={{
                                bgcolor: alpha(theme.palette.secondary.main, 0.1),
                                color: 'secondary.main',
                                fontWeight: 700,
                                fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem' },
                                letterSpacing: { xs: '1.5px', md: '2px' },
                                px: { xs: 2, md: 2.5 },
                                py: { xs: 0.4, md: 0.5 },
                                mb: { xs: 2, md: 3 },
                                border: `2px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
                            }}
                        />
                    </Fade>
                    <Fade in timeout={800}>
                        <Typography
                            variant="h2"
                            component="h2"
                            color="primary.main"
                            fontWeight={900}
                            mb={{ xs: 1.5, md: 2 }}
                            sx={{
                                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' },
                                background: 'linear-gradient(135deg, #042161 0%, #0a3a7a 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                letterSpacing: { xs: '-0.5px', md: '-1px' },
                                px: { xs: 2, md: 0 },
                            }}
                        >
                            Get in Touch
                        </Typography>
                    </Fade>
                    <Fade in timeout={1000}>
                        <Typography
                            variant="h5"
                            color="text.secondary"
                            sx={{
                                maxWidth: '100%',
                                margin: '0 auto',
                                lineHeight: { xs: 1.6, md: 1.8 },
                                fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1.1rem', lg: '1.2rem' },
                                fontWeight: 400,
                                px: { xs: 2, sm: 3, md: 2 },
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            Ready to start your project? Fill out the form below and our team will get back to you <Box component="span" sx={{ color: 'secondary.main', fontWeight: 700 }}>within 24 hours</Box>.
                        </Typography>
                    </Fade>
                </Box>



                {/* Main Content Grid */}
                <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
                    {/* Contact Form - Left Side */}
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Zoom in timeout={1200}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 2, sm: 2.5, md: 3, lg: 4 },
                                    borderRadius: { xs: 2, md: 3 },
                                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                                    boxShadow: '0 24px 48px rgba(4,33,97,0.08), 0 8px 16px rgba(4,33,97,0.04)',
                                    border: `3px solid ${alpha(theme.palette.primary.main, 0.08)}`,
                                    height: '100%',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: { xs: '3px', md: '5px' },
                                        background: 'linear-gradient(90deg, #E53E3E 0%, #042161 100%)',
                                    }
                                }}
                            >
                                {submitted ? (
                                    <Box
                                        textAlign="center"
                                        py={10}
                                        sx={{
                                            animation: 'fadeIn 0.5s ease-in',
                                            '@keyframes fadeIn': {
                                                from: { opacity: 0, transform: 'scale(0.9)' },
                                                to: { opacity: 1, transform: 'scale(1)' },
                                            }
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 100,
                                                height: 100,
                                                borderRadius: '50%',
                                                bgcolor: alpha(theme.palette.success.main, 0.1),
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto 24px',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                sx={{
                                                    fontSize: 60,
                                                    color: 'success.main',
                                                    animation: 'bounce 0.6s ease-in-out',
                                                    '@keyframes bounce': {
                                                        '0%, 100%': { transform: 'translateY(0)' },
                                                        '50%': { transform: 'translateY(-20px)' },
                                                    }
                                                }}
                                            />
                                        </Box>
                                        <Typography variant="h3" color="primary" fontWeight={800} mb={2}>
                                            Thank You!
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary" fontWeight={400}>
                                            Your message has been sent successfully.<br />We'll get back to you within 24 hours!
                                        </Typography>
                                    </Box>
                                ) : (
                                    <Box component="form" onSubmit={handleSubmit}>
                                        {/* Enhanced Header Section */}
                                        <Box
                                            textAlign="center"
                                            mb={{ xs: 3, sm: 3.5, md: 4 }}
                                            sx={{
                                                position: 'relative',
                                                pb: 2,
                                                '&::after': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    bottom: 0,
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    width: '60px',
                                                    height: '3px',
                                                    background: 'linear-gradient(90deg, #E53E3E 0%, #042161 100%)',
                                                    borderRadius: '2px',
                                                }
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: 60,
                                                    height: 60,
                                                    borderRadius: '50%',
                                                    background: 'linear-gradient(135deg, #E53E3E 0%, #042161 100%)',
                                                    mb: 2,
                                                    boxShadow: '0 8px 24px rgba(229, 62, 62, 0.3)',
                                                }}
                                            >
                                                <SendIcon sx={{ fontSize: 30, color: 'white' }} />
                                            </Box>
                                            <Typography
                                                variant="h4"
                                                fontWeight={800}
                                                mb={1}
                                                sx={{
                                                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                                                    background: 'linear-gradient(135deg, #042161 0%, #E53E3E 100%)',
                                                    backgroundClip: 'text',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    letterSpacing: '-0.5px',
                                                }}
                                            >
                                                Request a Quote
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                color="text.secondary"
                                                sx={{
                                                    fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                                                    fontWeight: 500,
                                                    maxWidth: '400px',
                                                    mx: 'auto',
                                                }}
                                            >
                                                Tell us about your project requirements and get a free consultation
                                            </Typography>
                                        </Box>

                                        {/* Trust Indicators */}
                                        <Box
                                            sx={{
                                                mb: 3,
                                                p: 2,
                                                borderRadius: 2,
                                                background: 'linear-gradient(135deg, rgba(4,33,97,0.03) 0%, rgba(229,62,62,0.03) 100%)',
                                                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                                            }}
                                        >
                                            <Grid container spacing={2} justifyContent="center">
                                                <Grid item xs={6} display="flex" justifyContent="center">
                                                    <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" gap={1}>
                                                        <Box
                                                            sx={{
                                                                width: 50,
                                                                height: 50,
                                                                borderRadius: '50%',
                                                                background: 'linear-gradient(135deg, #E53E3E 0%, #c92a2a 100%)',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                            }}
                                                        >
                                                            <RocketLaunchIcon sx={{ fontSize: 24, color: 'white' }} />
                                                        </Box>
                                                        <Box>
                                                            <Typography variant="caption" color="text.secondary" display="block" sx={{ fontSize: '0.7rem' }}>
                                                                Response Time
                                                            </Typography>
                                                            <Typography variant="body2" fontWeight={700} color="primary" sx={{ fontSize: '0.9rem' }}>
                                                                24 Hours
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={6} display="flex" justifyContent="center">
                                                    <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" gap={1}>
                                                        <Box
                                                            sx={{
                                                                width: 50,
                                                                height: 50,
                                                                borderRadius: '50%',
                                                                background: 'linear-gradient(135deg, #042161 0%, #0a3a7a 100%)',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                            }}
                                                        >
                                                            <VerifiedIcon sx={{ fontSize: 24, color: 'white' }} />
                                                        </Box>
                                                        <Box>
                                                            <Typography variant="caption" color="text.secondary" display="block" sx={{ fontSize: '0.7rem' }}>
                                                                Consultation
                                                            </Typography>
                                                            <Typography variant="body2" fontWeight={700} color="secondary" sx={{ fontSize: '0.9rem' }}>
                                                                100% Free
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Box>

                                        <Grid container spacing={2}>
                                            {/* Row 1: Name and Email */}
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Your Name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('name')}
                                                    onBlur={() => setFocusedField('')}
                                                    required
                                                    placeholder="Enter your full name"
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <PersonIcon
                                                                    sx={{
                                                                        color: focusedField === 'name' ? 'secondary.main' : '#999',
                                                                        fontSize: 20,
                                                                    }}
                                                                />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            bgcolor: '#fafafa',
                                                            borderRadius: 1.5,
                                                            '& input': {
                                                                padding: '12px 14px',
                                                            },
                                                            '& fieldset': {
                                                                borderColor: '#e0e0e0',
                                                            },
                                                            '&:hover fieldset': {
                                                                borderColor: '#bdbdbd',
                                                            },
                                                            '&.Mui-focused fieldset': {
                                                                borderColor: 'secondary.main',
                                                                borderWidth: '2px',
                                                            }
                                                        },
                                                        '& .MuiInputLabel-root': {
                                                            fontSize: '0.9rem',
                                                            '&.Mui-focused': {
                                                                color: 'secondary.main',
                                                            }
                                                        }
                                                    }}
                                                />
                                            </Grid>

                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Email Address"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('email')}
                                                    onBlur={() => setFocusedField('')}
                                                    required
                                                    placeholder="your.email@example.com"
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <EmailIcon
                                                                    sx={{
                                                                        color: focusedField === 'email' ? 'secondary.main' : '#999',
                                                                        fontSize: 20,
                                                                    }}
                                                                />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            bgcolor: '#fafafa',
                                                            borderRadius: 1.5,
                                                            '& input': {
                                                                padding: '12px 14px',
                                                            },
                                                            '& fieldset': {
                                                                borderColor: '#e0e0e0',
                                                            },
                                                            '&:hover fieldset': {
                                                                borderColor: '#bdbdbd',
                                                            },
                                                            '&.Mui-focused fieldset': {
                                                                borderColor: 'secondary.main',
                                                                borderWidth: '2px',
                                                            }
                                                        },
                                                        '& .MuiInputLabel-root': {
                                                            fontSize: '0.9rem',
                                                            '&.Mui-focused': {
                                                                color: 'secondary.main',
                                                            }
                                                        }
                                                    }}
                                                />
                                            </Grid>

                                            {/* Row 2: Phone and Company */}
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Phone Number"
                                                    name="phone"
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('phone')}
                                                    onBlur={() => setFocusedField('')}
                                                    required
                                                    placeholder="+91 XXXXX XXXXX"
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <PhoneIcon
                                                                    sx={{
                                                                        color: focusedField === 'phone' ? 'secondary.main' : '#999',
                                                                        fontSize: 20,
                                                                    }}
                                                                />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            bgcolor: '#fafafa',
                                                            borderRadius: 1.5,
                                                            '& input': {
                                                                padding: '12px 14px',
                                                            },
                                                            '& fieldset': {
                                                                borderColor: '#e0e0e0',
                                                            },
                                                            '&:hover fieldset': {
                                                                borderColor: '#bdbdbd',
                                                            },
                                                            '&.Mui-focused fieldset': {
                                                                borderColor: 'secondary.main',
                                                                borderWidth: '2px',
                                                            }
                                                        },
                                                        '& .MuiInputLabel-root': {
                                                            fontSize: '0.9rem',
                                                            '&.Mui-focused': {
                                                                color: 'secondary.main',
                                                            }
                                                        }
                                                    }}
                                                />
                                            </Grid>

                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Company Name"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('company')}
                                                    onBlur={() => setFocusedField('')}
                                                    placeholder="Your company name"
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <BusinessIcon
                                                                    sx={{
                                                                        color: focusedField === 'company' ? 'secondary.main' : '#999',
                                                                        fontSize: 20,
                                                                    }}
                                                                />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            bgcolor: '#fafafa',
                                                            borderRadius: 1.5,
                                                            '& input': {
                                                                padding: '12px 14px',
                                                            },
                                                            '& fieldset': {
                                                                borderColor: '#e0e0e0',
                                                            },
                                                            '&:hover fieldset': {
                                                                borderColor: '#bdbdbd',
                                                            },
                                                            '&.Mui-focused fieldset': {
                                                                borderColor: 'secondary.main',
                                                                borderWidth: '2px',
                                                            }
                                                        },
                                                        '& .MuiInputLabel-root': {
                                                            fontSize: '0.9rem',
                                                            '&.Mui-focused': {
                                                                color: 'secondary.main',
                                                            }
                                                        }
                                                    }}
                                                />
                                            </Grid>

                                            {/* Row 3: Location (Full Width) */}
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    label="Location"
                                                    name="location"
                                                    value={formData.location}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('location')}
                                                    onBlur={() => setFocusedField('')}
                                                    required
                                                    placeholder="City, State"
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <LocationOnIcon
                                                                    sx={{
                                                                        color: focusedField === 'location' ? 'secondary.main' : '#999',
                                                                        fontSize: 20,
                                                                    }}
                                                                />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            bgcolor: '#fafafa',
                                                            borderRadius: 1.5,
                                                            '& input': {
                                                                padding: '12px 14px',
                                                            },
                                                            '& fieldset': {
                                                                borderColor: '#e0e0e0',
                                                            },
                                                            '&:hover fieldset': {
                                                                borderColor: '#bdbdbd',
                                                            },
                                                            '&.Mui-focused fieldset': {
                                                                borderColor: 'secondary.main',
                                                                borderWidth: '2px',
                                                            }
                                                        },
                                                        '& .MuiInputLabel-root': {
                                                            fontSize: '0.9rem',
                                                            '&.Mui-focused': {
                                                                color: 'secondary.main',
                                                            }
                                                        }
                                                    }}
                                                />
                                            </Grid>

                                            {/* Row 4: Service Required (Full Width) */}
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    select
                                                    label="Service Required"
                                                    name="serviceRequired"
                                                    value={formData.serviceRequired}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('serviceRequired')}
                                                    onBlur={() => setFocusedField('')}
                                                    required
                                                    SelectProps={{
                                                        displayEmpty: true,
                                                        renderValue: (selected) => {
                                                            if (!selected) {
                                                                return <em style={{ color: '#999' }}>Select the Service</em>;
                                                            }
                                                            return selected;
                                                        }
                                                    }}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <BuildIcon
                                                                    sx={{
                                                                        color: focusedField === 'serviceRequired' ? 'secondary.main' : '#999',
                                                                        fontSize: 20,
                                                                    }}
                                                                />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            bgcolor: '#fafafa',
                                                            borderRadius: 1.5,
                                                            '& .MuiSelect-select': {
                                                                padding: '12px 14px',
                                                            },
                                                            '& fieldset': {
                                                                borderColor: '#e0e0e0',
                                                            },
                                                            '&:hover fieldset': {
                                                                borderColor: '#bdbdbd',
                                                            },
                                                            '&.Mui-focused fieldset': {
                                                                borderColor: 'secondary.main',
                                                                borderWidth: '2px',
                                                            }
                                                        },
                                                        '& .MuiInputLabel-root': {
                                                            fontSize: '0.9rem',
                                                            '&.Mui-focused': {
                                                                color: 'secondary.main',
                                                            }
                                                        }
                                                    }}
                                                >
                                                    {services.map((service) => (
                                                        <MenuItem
                                                            key={service}
                                                            value={service}
                                                            sx={{
                                                                fontSize: '0.9rem',
                                                                '&:hover': {
                                                                    bgcolor: alpha(theme.palette.secondary.main, 0.1),
                                                                },
                                                                '&.Mui-selected': {
                                                                    bgcolor: alpha(theme.palette.secondary.main, 0.15),
                                                                    '&:hover': {
                                                                        bgcolor: alpha(theme.palette.secondary.main, 0.2),
                                                                    }
                                                                }
                                                            }}
                                                        >
                                                            {service}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </Grid>

                                            {/* Row 5: Project Details (Full Width) */}
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    label="Project Details"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('message')}
                                                    onBlur={() => setFocusedField('')}
                                                    required
                                                    multiline
                                                    rows={4}
                                                    placeholder="Tell us about your project requirements, timeline, and any specific concerns..."
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1.5 }}>
                                                                <MessageIcon
                                                                    sx={{
                                                                        color: focusedField === 'message' ? 'secondary.main' : '#999',
                                                                        fontSize: 20,
                                                                    }}
                                                                />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            bgcolor: '#fafafa',
                                                            borderRadius: 1.5,
                                                            '& textarea': {
                                                                padding: '12px 14px',
                                                            },
                                                            '& fieldset': {
                                                                borderColor: '#e0e0e0',
                                                            },
                                                            '&:hover fieldset': {
                                                                borderColor: '#bdbdbd',
                                                            },
                                                            '&.Mui-focused fieldset': {
                                                                borderColor: 'secondary.main',
                                                                borderWidth: '2px',
                                                            }
                                                        },
                                                        '& .MuiInputLabel-root': {
                                                            fontSize: '0.9rem',
                                                            '&.Mui-focused': {
                                                                color: 'secondary.main',
                                                            }
                                                        }
                                                    }}
                                                />
                                            </Grid>

                                            {/* Submit Button */}
                                            <Grid item xs={12}>
                                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        size="large"
                                                        startIcon={<RocketLaunchIcon sx={{ fontSize: 24 }} />}
                                                        sx={{
                                                            background: 'linear-gradient(135deg, #E53E3E 0%, #c92a2a 100%)',
                                                            color: 'white',
                                                            fontWeight: 800,
                                                            py: { xs: 2, md: 2.5 },
                                                            px: { xs: 3, md: 4 },
                                                            fontSize: { xs: '0.95rem', md: '1rem' },
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '1.5px',
                                                            borderRadius: 2,
                                                            boxShadow: `0 8px 24px ${alpha(theme.palette.secondary.main, 0.4)}`,
                                                            transition: 'all 0.3s ease',
                                                            position: 'relative',
                                                            overflow: 'hidden',
                                                            '&::before': {
                                                                content: '""',
                                                                position: 'absolute',
                                                                top: 0,
                                                                left: '-100%',
                                                                width: '100%',
                                                                height: '100%',
                                                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                                                                transition: 'left 0.6s ease',
                                                            },
                                                            '&:hover': {
                                                                background: 'linear-gradient(135deg, #042161 0%, #0a3a7a 100%)',
                                                                transform: 'translateY(-2px)',
                                                                boxShadow: `0 12px 32px ${alpha(theme.palette.primary.main, 0.5)}`,
                                                                '&::before': {
                                                                    left: '100%',
                                                                }
                                                            },
                                                            '&:active': {
                                                                transform: 'translateY(0px)',
                                                            }
                                                        }}
                                                    >
                                                        Get Free Quote Now
                                                    </Button>
                                                </Box>

                                                {/* Trust Message Below Button */}
                                                <Box
                                                    sx={{
                                                        mt: 2,
                                                        textAlign: 'center',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        gap: 1,
                                                    }}
                                                >
                                                    <VerifiedIcon sx={{ fontSize: 18, color: 'success.main' }} />
                                                    <Typography
                                                        variant="caption"
                                                        color="text.secondary"
                                                        sx={{ fontSize: '0.8rem', fontWeight: 500 }}
                                                    >
                                                        Your information is 100% secure & confidential
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                )}
                            </Paper>
                        </Zoom>
                    </Grid>

                    {/* Map - Center */}
                    <Grid item xs={12} sm={12} md={5} lg={5}>
                        <Zoom in timeout={1400}>
                            <Paper
                                elevation={0}
                                sx={{
                                    borderRadius: { xs: 2, md: 3 },
                                    overflow: 'hidden',
                                    height: { xs: '350px', sm: '400px', md: '100%' },
                                    minHeight: { md: '600px', lg: '650px' },
                                    boxShadow: '0 24px 48px rgba(4,33,97,0.08), 0 8px 16px rgba(4,33,97,0.04)',
                                    border: `3px solid ${alpha(theme.palette.primary.main, 0.08)}`,
                                    position: 'relative',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: { xs: '3px', md: '5px' },
                                        background: 'linear-gradient(90deg, #042161 0%, #E53E3E 100%)',
                                        zIndex: 1,
                                    }
                                }}
                            >
                                <iframe
                                    src={CONTACT_INFO.mapEmbedUrl}
                                    width="100%"
                                    height="100%"
                                    style={{border:0}}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Jireh Technology Bangalore - Office Location"
                                ></iframe>
                            </Paper>
                        </Zoom>
                    </Grid>

                    {/* Expert Consultation - Right Side */}
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Zoom in timeout={1500}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 3, md: 4 },
                                    borderRadius: { xs: 2, md: 3 },
                                    background: 'linear-gradient(135deg, #042161 0%, #0a3a7a 100%)',
                                    color: 'white',
                                    height: '100%',
                                    minHeight: { xs: '400px', md: '600px', lg: '650px' },
                                    boxShadow: '0 24px 48px rgba(4,33,97,0.2), 0 8px 16px rgba(4,33,97,0.1)',
                                    border: `3px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                                    position: 'relative',
                                    overflow: 'hidden',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: { xs: '3px', md: '5px' },
                                        background: 'linear-gradient(90deg, #E53E3E 0%, #042161 100%)',
                                    },
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: -50,
                                        right: -50,
                                        width: 200,
                                        height: 200,
                                        borderRadius: '50%',
                                        background: alpha('#E53E3E', 0.1),
                                    }
                                }}
                            >
                                <Box position="relative" zIndex={1}>
                                    {/* Header */}
                                    <Box textAlign="center" mb={4}>
                                        <SupportAgentIcon sx={{ fontSize: 60, color: '#E53E3E', mb: 2 }} />
                                        <Typography variant="h4" fontWeight={800} mb={1}>
                                            Expert Consultation
                                        </Typography>
                                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                            Get professional advice from our experts
                                        </Typography>
                                    </Box>

                                    {/* Benefits List */}
                                    <Stack spacing={3} mb={4}>
                                        <Box display="flex" alignItems="flex-start">
                                            <CheckCircleIcon sx={{ color: '#E53E3E', mr: 2, mt: 0.5 }} />
                                            <Box>
                                                <Typography variant="h6" fontWeight={700} mb={0.5}>
                                                    Free Consultation
                                                </Typography>
                                                <Typography variant="body2" sx={{ opacity: 0.85 }}>
                                                    Get expert advice at no cost for your project requirements
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Box display="flex" alignItems="flex-start">
                                            <CheckCircleIcon sx={{ color: '#E53E3E', mr: 2, mt: 0.5 }} />
                                            <Box>
                                                <Typography variant="h6" fontWeight={700} mb={0.5}>
                                                    Quick Response
                                                </Typography>
                                                <Typography variant="body2" sx={{ opacity: 0.85 }}>
                                                    Our team responds within 24 hours to all inquiries
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Box display="flex" alignItems="flex-start">
                                            <CheckCircleIcon sx={{ color: '#E53E3E', mr: 2, mt: 0.5 }} />
                                            <Box>
                                                <Typography variant="h6" fontWeight={700} mb={0.5}>
                                                    Custom Solutions
                                                </Typography>
                                                <Typography variant="body2" sx={{ opacity: 0.85 }}>
                                                    Tailored solutions designed specifically for your needs
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Box display="flex" alignItems="flex-start">
                                            <CheckCircleIcon sx={{ color: '#E53E3E', mr: 2, mt: 0.5 }} />
                                            <Box>
                                                <Typography variant="h6" fontWeight={700} mb={0.5}>
                                                    Certified Experts
                                                </Typography>
                                                <Typography variant="body2" sx={{ opacity: 0.85 }}>
                                                    Industry-certified professionals with proven expertise
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Stack>

                                    {/* Call to Action */}
                                    <Box
                                        sx={{
                                            p: 3,
                                            borderRadius: 2,
                                            background: alpha('#ffffff', 0.1),
                                            border: `2px solid ${alpha('#ffffff', 0.2)}`,
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Typography variant="h6" fontWeight={700} mb={1}>
                                            Ready to Get Started?
                                        </Typography>
                                        <Typography variant="body2" sx={{ opacity: 0.9, mb: 2 }}>
                                            Fill the form and our experts will contact you soon!
                                        </Typography>
                                        <Chip
                                            icon={<AccessTimeIcon />}
                                            label="Available 24/7"
                                            sx={{
                                                bgcolor: '#E53E3E',
                                                color: 'white',
                                                fontWeight: 700,
                                                fontSize: '0.9rem',
                                                py: 2.5,
                                                '& .MuiChip-icon': {
                                                    color: 'white',
                                                }
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </Paper>
                        </Zoom>
                    </Grid>
                </Grid>

                {/* Customer Reviews Section */}
                <Box sx={{ mt: { xs: 4, md: 6 } }}>
                    <Fade in timeout={1000}>
                        <Box>
                            {/* Section Header */}
                            <Box textAlign="center" mb={4}>
                                <Typography
                                    variant="h3"
                                    fontWeight={800}
                                    mb={2}
                                    color="primary"
                                    sx={{
                                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                                    }}
                                >
                                    What Our Customers Say
                                </Typography>
                                <Box display="flex" alignItems="center" justifyContent="center" gap={1} mb={1}>
                                    <Typography variant="h5" fontWeight={700} color="primary">
                                        5.0
                                    </Typography>
                                    <Box display="flex" gap={0.5}>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <StarIcon key={star} sx={{ color: '#FFB400', fontSize: 28 }} />
                                        ))}
                                    </Box>
                                </Box>
                                <Typography variant="body1" color="text.secondary">
                                    Based on Google Reviews
                                </Typography>
                            </Box>

                            {/* Carousel Reviews with 3 Cards */}
                            <Box sx={{ position: 'relative', py: 4 }}>
                                {/* Left Arrow with Enhanced Animation */}
                                <IconButton
                                    onClick={handlePrevReview}
                                    sx={{
                                        position: 'absolute',
                                        left: { xs: -5, sm: 0, md: 20 },
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        zIndex: 3,
                                        bgcolor: 'white',
                                        width: { xs: 50, md: 60 },
                                        height: { xs: 50, md: 60 },
                                        boxShadow: '0 8px 25px rgba(4,33,97,0.25)',
                                        border: `3px solid ${theme.palette.primary.main}`,
                                        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                        animation: 'arrowBounceLeft 2s ease-in-out infinite',
                                        '@keyframes arrowBounceLeft': {
                                            '0%, 100%': {
                                                transform: 'translateY(-50%) translateX(0)',
                                            },
                                            '50%': {
                                                transform: 'translateY(-50%) translateX(-8px)',
                                            },
                                        },
                                        '&:hover': {
                                            bgcolor: theme.palette.primary.main,
                                            transform: 'translateY(-50%) scale(1.2) rotate(-10deg)',
                                            boxShadow: '0 12px 35px rgba(4,33,97,0.4)',
                                            animation: 'none',
                                            '& .MuiSvgIcon-root': {
                                                color: 'white',
                                                transform: 'translateX(-3px)',
                                            }
                                        },
                                        '&:active': {
                                            transform: 'translateY(-50%) scale(0.95)',
                                        }
                                    }}
                                >
                                    <ArrowBackIosNewIcon sx={{
                                        color: theme.palette.primary.main,
                                        fontSize: 26,
                                        transition: 'all 0.3s ease',
                                    }} />
                                </IconButton>

                                {/* Cards Container */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: { xs: 2, md: 3 },
                                        px: { xs: 6, sm: 8, md: 12 },
                                        minHeight: '400px',
                                    }}
                                >
                                    {getVisibleReviews().map((review, idx) => {
                                        const isCenter = review.position === 0;
                                        const isLeft = review.position === -1;
                                        const isRight = review.position === 1;

                                        return (
                                            <Box
                                                key={idx}
                                                sx={{
                                                    width: { xs: '200px', sm: '240px', md: '280px' },
                                                    flexShrink: 0,
                                                    transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)', // Bouncy easing
                                                    transform: isCenter
                                                        ? 'scale(1.15) translateY(-30px) rotateY(0deg)'
                                                        : isLeft
                                                            ? 'scale(0.85) translateY(10px) rotateY(8deg)'
                                                            : 'scale(0.85) translateY(10px) rotateY(-8deg)',
                                                    opacity: isCenter ? 1 : 0.5,
                                                    zIndex: isCenter ? 2 : 1,
                                                    filter: isCenter ? 'brightness(1.05)' : 'brightness(0.95)',
                                                    '&:hover': {
                                                        transform: isCenter
                                                            ? 'scale(1.18) translateY(-35px) rotateY(0deg)'
                                                            : 'scale(0.9) translateY(5px) rotateY(0deg)',
                                                        opacity: isCenter ? 1 : 0.7,
                                                    }
                                                }}
                                            >
                                                <Card
                                                    sx={{
                                                        height: '100%',
                                                        borderRadius: 3,
                                                        boxShadow: isCenter
                                                            ? '0 20px 60px rgba(229,62,62,0.35), 0 0 0 1px rgba(229,62,62,0.1)'
                                                            : '0 10px 30px rgba(4,33,97,0.15)',
                                                        border: isCenter
                                                            ? `3px solid ${theme.palette.secondary.main}`
                                                            : `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                                                        transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        bgcolor: 'white',
                                                        background: isCenter
                                                            ? 'linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)'
                                                            : 'white',
                                                        '&:hover': {
                                                            boxShadow: isCenter
                                                                ? '0 25px 70px rgba(229,62,62,0.4), 0 0 0 2px rgba(229,62,62,0.2)'
                                                                : '0 15px 40px rgba(4,33,97,0.25)',
                                                            transform: isCenter ? 'translateY(-5px)' : 'translateY(-3px)',
                                                        }
                                                    }}
                                                >
                                                    {/* Quote Icon with Pulse Animation */}
                                                    <Box
                                                        sx={{
                                                            position: 'absolute',
                                                            top: -15,
                                                            left: 15,
                                                            width: isCenter ? 50 : 42,
                                                            height: isCenter ? 50 : 42,
                                                            borderRadius: '50%',
                                                            background: isCenter
                                                                ? 'linear-gradient(135deg, #E53E3E 0%, #c92a2a 100%)'
                                                                : 'linear-gradient(135deg, #042161 0%, #0a3a7a 100%)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            boxShadow: isCenter
                                                                ? '0 8px 20px rgba(229,62,62,0.5), 0 0 0 0 rgba(229,62,62,0.4)'
                                                                : '0 4px 12px rgba(4,33,97,0.3)',
                                                            transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                                            animation: isCenter ? 'pulse 2s infinite' : 'none',
                                                            '@keyframes pulse': {
                                                                '0%': {
                                                                    boxShadow: '0 8px 20px rgba(229,62,62,0.5), 0 0 0 0 rgba(229,62,62,0.4)',
                                                                },
                                                                '50%': {
                                                                    boxShadow: '0 8px 20px rgba(229,62,62,0.5), 0 0 0 10px rgba(229,62,62,0)',
                                                                },
                                                                '100%': {
                                                                    boxShadow: '0 8px 20px rgba(229,62,62,0.5), 0 0 0 0 rgba(229,62,62,0)',
                                                                },
                                                            },
                                                            '&:hover': {
                                                                transform: 'rotate(15deg) scale(1.1)',
                                                            }
                                                        }}
                                                    >
                                                        <FormatQuoteIcon sx={{
                                                            color: 'white',
                                                            fontSize: isCenter ? 26 : 22,
                                                            transition: 'all 0.3s ease',
                                                        }} />
                                                    </Box>

                                                    <CardContent sx={{ p: { xs: 2, md: 2.5 }, pt: 4 }}>
                                                        {/* Rating Stars with Sparkle Animation */}
                                                        <Box display="flex" gap={0.3} mb={1.5} justifyContent="center">
                                                            {[...Array(review.rating)].map((_, i) => (
                                                                <StarIcon key={i} sx={{
                                                                    color: '#FFB400',
                                                                    fontSize: isCenter ? 20 : 16,
                                                                    transition: 'all 0.3s ease',
                                                                    animation: isCenter ? `starSparkle 1.5s ease-in-out ${i * 0.1}s infinite` : 'none',
                                                                    '@keyframes starSparkle': {
                                                                        '0%, 100%': {
                                                                            transform: 'scale(1)',
                                                                            filter: 'brightness(1)',
                                                                        },
                                                                        '50%': {
                                                                            transform: 'scale(1.2)',
                                                                            filter: 'brightness(1.3) drop-shadow(0 0 4px #FFB400)',
                                                                        },
                                                                    },
                                                                    '&:hover': {
                                                                        transform: 'scale(1.3) rotate(72deg)',
                                                                        filter: 'brightness(1.4) drop-shadow(0 0 6px #FFB400)',
                                                                    }
                                                                }} />
                                                            ))}
                                                        </Box>

                                                        {/* Review Text */}
                                                        <Typography
                                                            variant="body2"
                                                            color="text.secondary"
                                                            sx={{
                                                                fontSize: isCenter ? '0.9rem' : '0.8rem',
                                                                lineHeight: 1.6,
                                                                minHeight: { xs: '120px', md: '140px' },
                                                                textAlign: 'center',
                                                                display: '-webkit-box',
                                                                WebkitLineClamp: 6,
                                                                WebkitBoxOrient: 'vertical',
                                                                overflow: 'hidden',
                                                            }}
                                                        >
                                                            "{review.review}"
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Box>
                                        );
                                    })}
                                </Box>

                                {/* Right Arrow with Enhanced Animation */}
                                <IconButton
                                    onClick={handleNextReview}
                                    sx={{
                                        position: 'absolute',
                                        right: { xs: -5, sm: 0, md: 20 },
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        zIndex: 3,
                                        bgcolor: 'white',
                                        width: { xs: 50, md: 60 },
                                        height: { xs: 50, md: 60 },
                                        boxShadow: '0 8px 25px rgba(4,33,97,0.25)',
                                        border: `3px solid ${theme.palette.primary.main}`,
                                        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                        animation: 'arrowBounceRight 2s ease-in-out infinite',
                                        '@keyframes arrowBounceRight': {
                                            '0%, 100%': {
                                                transform: 'translateY(-50%) translateX(0)',
                                            },
                                            '50%': {
                                                transform: 'translateY(-50%) translateX(8px)',
                                            },
                                        },
                                        '&:hover': {
                                            bgcolor: theme.palette.primary.main,
                                            transform: 'translateY(-50%) scale(1.2) rotate(10deg)',
                                            boxShadow: '0 12px 35px rgba(4,33,97,0.4)',
                                            animation: 'none',
                                            '& .MuiSvgIcon-root': {
                                                color: 'white',
                                                transform: 'translateX(3px)',
                                            }
                                        },
                                        '&:active': {
                                            transform: 'translateY(-50%) scale(0.95)',
                                        }
                                    }}
                                >
                                    <ArrowForwardIosIcon sx={{
                                        color: theme.palette.primary.main,
                                        fontSize: 26,
                                        transition: 'all 0.3s ease',
                                    }} />
                                </IconButton>
                            </Box>

                            {/* Google Reviews Link */}
                            <Box textAlign="center" mt={4}>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    href="https://www.google.com/maps/place/Jireh+Technologies/@13.0288603,77.5534858,14.75z/data=!4m6!3m5!1s0x3bae3d6390c4d8a3:0xb3aa3e4744d70b22!8m2!3d13.0256901!4d77.5574948!16s%2Fg%2F1tdbv5_k?hl=en&entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    startIcon={<StarIcon />}
                                    sx={{
                                        borderColor: theme.palette.primary.main,
                                        color: theme.palette.primary.main,
                                        fontWeight: 700,
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: 2,
                                        borderWidth: 2,
                                        '&:hover': {
                                            borderWidth: 2,
                                            borderColor: theme.palette.secondary.main,
                                            bgcolor: alpha(theme.palette.secondary.main, 0.05),
                                            transform: 'translateY(-2px)',
                                        }
                                    }}
                                >
                                    View All Reviews on Google
                                </Button>
                            </Box>
                        </Box>
                    </Fade>
                </Box>
            </Container>

            {/* Thank You Dialog */}
            <Dialog
                open={showThankYouDialog}
                onClose={handleCloseDialog}
                maxWidth="sm"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: '20px',
                        overflow: 'hidden',
                        background: 'linear-gradient(135deg, #042161 0%, #0a3a7a 100%)',
                    }
                }}
            >
                <DialogContent sx={{ p: 0 }}>
                    {/* Close Button */}
                    <IconButton
                        onClick={handleCloseDialog}
                        sx={{
                            position: 'absolute',
                            right: 16,
                            top: 16,
                            color: 'white',
                            bgcolor: alpha('#fff', 0.1),
                            zIndex: 10,
                            '&:hover': {
                                bgcolor: alpha('#fff', 0.2),
                                transform: 'rotate(90deg)',
                            },
                            transition: 'all 0.3s ease',
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    <Box
                        sx={{
                            textAlign: 'center',
                            py: 6,
                            px: 4,
                            position: 'relative',
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
                        {/* Success Icon */}
                        <Zoom in={showThankYouDialog} style={{ transitionDelay: '100ms' }}>
                            <Box
                                sx={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: '50%',
                                    bgcolor: alpha('#4CAF50', 0.2),
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 24px',
                                    border: '4px solid #4CAF50',
                                }}
                            >
                                <CheckCircleIcon sx={{ fontSize: 60, color: '#4CAF50' }} />
                            </Box>
                        </Zoom>

                        {/* Thank You Message */}
                        <Fade in={showThankYouDialog} style={{ transitionDelay: '300ms' }}>
                            <Box>
                                <Typography
                                    variant="h4"
                                    fontWeight={700}
                                    color="white"
                                    sx={{ mb: 2 }}
                                >
                                    Thank You, {formData.name}! 🎉
                                </Typography>
                                <Typography
                                    variant="h6"
                                    color="white"
                                    sx={{ mb: 3, opacity: 0.9 }}
                                >
                                    We've Received Your Request
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="white"
                                    sx={{ mb: 2, lineHeight: 1.8, opacity: 0.85 }}
                                >
                                    Our expert team will review your requirements and get back to you within <strong>24 hours</strong>.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="white"
                                    sx={{ mb: 3, lineHeight: 1.8, opacity: 0.85 }}
                                >
                                    We're excited to help you with your <strong>{formData.serviceRequired || 'project'}</strong>!
                                </Typography>

                                {/* Contact Info */}
                                <Box
                                    sx={{
                                        mt: 4,
                                        p: 3,
                                        borderRadius: '12px',
                                        bgcolor: alpha('#fff', 0.1),
                                        border: '1px solid rgba(255,255,255,0.2)',
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                        color="white"
                                        sx={{ mb: 1.5, opacity: 0.9 }}
                                    >
                                        <strong>Need immediate assistance?</strong>
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="#4CAF50"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        📞 Call us: +91-9845478566
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="#4CAF50"
                                        sx={{ fontWeight: 600, mt: 0.5 }}
                                    >
                                        📧 Email: jirehtech1@gmail.com
                                    </Typography>
                                </Box>

                                {/* WhatsApp Notice */}
                                <Typography
                                    variant="caption"
                                    color="white"
                                    sx={{ mt: 3, display: 'block', opacity: 0.7 }}
                                >
                                    You'll be redirected to WhatsApp to complete your request...
                                </Typography>

                                {/* Close Instruction */}
                                <Box
                                    sx={{
                                        mt: 3,
                                        pt: 3,
                                        borderTop: '1px solid rgba(255,255,255,0.2)',
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                        color="white"
                                        sx={{
                                            opacity: 0.8,
                                            fontStyle: 'italic',
                                            animation: 'pulse 2s ease-in-out infinite',
                                            '@keyframes pulse': {
                                                '0%, 100%': { opacity: 0.6 },
                                                '50%': { opacity: 1 },
                                            }
                                        }}
                                    >
                                        Click anywhere or press any key to close
                                    </Typography>
                                </Box>
                            </Box>
                        </Fade>
                    </Box>
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default MuiGetInTouch;

