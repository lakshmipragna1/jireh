// src/components/MuiHeader.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Button,
    Box,
    Container,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import JirehLogo from '../jireh_logo.png';

const MuiHeader = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const navLinks = [
        { name: 'Home', href: '/', isRoute: true },
        { name: 'Services', href: '#services', isRoute: false },
        { name: 'Works', href: '/works', isRoute: true },
        { name: 'About Us', href: '#about', isRoute: false },
        { name: 'Tools', href: '/tools', isRoute: true },
        { name: 'Contact', href: '#contact', isRoute: false },
    ];

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleNavClick = (link) => {
        if (link.isRoute) {
            navigate(link.href);
        } else {
            // For hash links, navigate to home first if not already there
            if (window.location.pathname !== '/') {
                navigate('/' + link.href);
            } else {
                window.location.hash = link.href;
            }
        }
    };

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    bgcolor: 'white',
                    borderBottom: '1px solid #eee',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    top: '40px',
                    zIndex: 1200,
                }}
            >
                <Container
                    maxWidth={false}
                    sx={{ px: { xs: 2, sm: 3, md: 6, lg: 10, xl: 12 } }}
                >
                    <Toolbar
                        disableGutters
                        sx={{
                            minHeight: { xs: '64px', md: '80px' },
                            py: { xs: 1, md: 1.5 },
                        }}
                    >
                        {/* Logo Section */}
                        <Box
                            onClick={() => navigate('/')}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mr: { xs: 2, md: 4 },
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                }
                            }}
                        >
                            <img
                                src={JirehLogo}
                                alt="Jireh Tech Logo"
                                style={{
                                    height: '60px',
                                    width: 'auto',
                                }}
                            />
                        </Box>

                        {/* Desktop Navigation */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                gap: 1,
                            }}
                        >
                            {/* Navigation Links */}
                            {navLinks.map((link) => (
                                <Button
                                    key={link.name}
                                    onClick={() => handleNavClick(link)}
                                    sx={{
                                        color: 'primary.main',
                                        fontWeight: 600,
                                        fontSize: '0.95rem',
                                        px: 2,
                                        py: 1,
                                        position: 'relative',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            color: 'secondary.main',
                                            bgcolor: 'rgba(229, 62, 62, 0.05)',
                                        },
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: 0,
                                            left: '50%',
                                            transform: 'translateX(-50%) scaleX(0)',
                                            width: '80%',
                                            height: '2px',
                                            bgcolor: 'secondary.main',
                                            transition: 'transform 0.3s ease',
                                        },
                                        '&:hover::after': {
                                            transform: 'translateX(-50%) scaleX(1)',
                                        }
                                    }}
                                >
                                    {link.name}
                                </Button>
                            ))}

                            {/* CTA Button */}
                            <Button
                                onClick={() => handleNavClick({ href: '#contact', isRoute: false })}
                                variant="contained"
                                color="secondary"
                                sx={{
                                    fontWeight: 700,
                                    px: 3,
                                    py: 1.2,
                                    ml: 2,
                                    fontSize: '0.95rem',
                                    boxShadow: '0 4px 12px rgba(229, 62, 62, 0.3)',
                                    '&:hover': {
                                        boxShadow: '0 6px 16px rgba(229, 62, 62, 0.4)',
                                        transform: 'translateY(-2px)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                Get a Free Site Assessment
                            </Button>
                        </Box>

                        {/* Mobile Menu Button */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                            <IconButton
                                onClick={toggleMobileMenu}
                                sx={{
                                    color: 'primary.main',
                                    bgcolor: 'rgba(4, 33, 97, 0.05)',
                                    '&:hover': {
                                        bgcolor: 'rgba(4, 33, 97, 0.1)',
                                    }
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer Menu */}
            <Drawer
                anchor="right"
                open={mobileMenuOpen}
                onClose={toggleMobileMenu}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: { xs: '280px', sm: '320px' },
                        bgcolor: 'white',
                        pt: 2,
                    }
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, mb: 2 }}>
                    <IconButton onClick={toggleMobileMenu} sx={{ color: 'primary.main' }}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <List>
                    {navLinks.map((link) => (
                        <ListItem key={link.name} disablePadding>
                            <ListItemButton
                                onClick={() => {
                                    handleNavClick(link);
                                    toggleMobileMenu();
                                }}
                                sx={{
                                    py: 2,
                                    px: 3,
                                    '&:hover': {
                                        bgcolor: 'rgba(4, 33, 97, 0.05)',
                                        borderLeft: '4px solid',
                                        borderColor: 'secondary.main',
                                    }
                                }}
                            >
                                <ListItemText
                                    primary={link.name}
                                    slotProps={{
                                        primary: {
                                            fontWeight: 600,
                                            color: 'primary.main',
                                            fontSize: '1.1rem',
                                        }
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                <Box sx={{ px: 3, mt: 3 }}>
                    <Button
                        onClick={() => {
                            handleNavClick({ href: '#contact', isRoute: false });
                            toggleMobileMenu();
                        }}
                        variant="contained"
                        color="secondary"
                        fullWidth
                        sx={{
                            fontWeight: 700,
                            py: 1.5,
                            fontSize: '1rem',
                        }}
                    >
                        Get a Free Site Assessment
                    </Button>
                </Box>
            </Drawer>
        </>
    );
};

export default MuiHeader;