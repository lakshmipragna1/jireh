// src/components/MuiWorks.jsx
import React from 'react';
import { Box, Typography, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const MuiWorks = () => {
    const electricalWorks = [
        {
            title: 'Installation, Testing, Commissioning and Maintenance',
            description: 'Installation, Testing, Commissioning and Maintenance of Generators, Transformers, Switchgears, Circuit Breakers, Control Panels, CT & PTs, Capacitor Banks, Battery Banks, Lightening Arrestors, Earthing etc.'
        },
        {
            title: 'Power and Control Cable Laying',
            description: 'Power and Control Cable Laying, Termination & Wiring for Hydel Power Generating Stations, Switch Yards, Control Rooms, Substations etc'
        },
        {
            title: 'Cable Trays & Raceways',
            description: 'Cable Trays & Raceways assembling, Insulators Assembling & Cable Stringing, Bus bar Trunking.'
        },
        {
            title: 'Assembly and Erection',
            description: 'Assembly and Erection of structures in Switch Yards & Substations etc.'
        },
        {
            title: 'Medium Voltage Switchgears',
            description: 'Installation, Testing & Commissioning of Medium Voltage Switchgears & Panels'
        },
        {
            title: 'DG Sets & UPS Systems',
            description: 'Installation, Testing & Commissioning of DG Sets & UPS systems.'
        },
        {
            title: 'Distribution Boards',
            description: 'Installation, Testing & Commissioning of Distribution Boards of Various sizes for Lighting / Power, UPS power etc.'
        },
        {
            title: 'Fire Detection & Fighting',
            description: 'Installation, Testing & Commissioning of Fire Detection & Fire Fighting equipments.'
        },
        {
            title: 'Networking Infrastructure',
            description: 'Installation of Networking cable, Data & Voice Outlets'
        }
    ];

    const mechanicalWorks = [
        {
            title: 'Hydraulic & Pneumatic Machinery',
            description: 'Assembly, Erection, Testing, Commissioning & Maintenance works carried out in Hydraulic, Mechanical and Pneumatic Machineries for Hydroelectric Power Projects etc'
        },
        {
            title: 'Structural Fabrication',
            description: 'Fabrication and Erection of Light and Heavy Duty Structures for Industrial Projects.'
        },
        {
            title: 'Transformer Maintenance',
            description: 'Transformers oil filtration and equipment hire.'
        }
    ];

    const projects = [
        {
            sl: 1,
            project: 'Ranni Perunad Power Project',
            mode: 'Erection and commissioning',
            capacity: '2X2 MW SHEP',
            contractor: 'Kirloskar Brothers Limited, Pune',
            client: 'Kerala State Electricity Board',
            remark: 'Commissioned & Synchronized'
        },
        {
            sl: 2,
            project: 'Perunchani mini Power Project',
            mode: 'Maintenance',
            capacity: '0.650X2 MW SHEP',
            contractor: 'Kirloskar Brothers Limited, Pune',
            client: 'Tamil nadu Electricity Board',
            remark: 'Commissioned'
        },
        {
            sl: 3,
            project: 'Aliyar small Hydel Power Project',
            mode: 'Refurbishing works, Maintenance',
            capacity: '2X1.25 MW SHEP',
            contractor: 'Tamil nadu Electricity Board',
            client: 'Tamil nadu Electricity Board',
            remark: 'Commissioned'
        },
        {
            sl: 4,
            project: 'SYNGENE PROJECT',
            mode: 'Installation, testing and commissioning of Fire Alarm panels',
            capacity: '24V DC Power Supply Unit',
            contractor: 'SIEMENS LTD',
            client: 'SIEMENS LTD Mangalore',
            remark: 'Under Process'
        }
    ];

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#f8f9fa', py: { xs: 4, sm: 5, md: 6 } }}>
            <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
                {/* Page Title */}
                <Typography
                    variant="h2"
                    component="h1"
                    fontWeight={700}
                    color="primary.main"
                    textAlign="center"
                    sx={{
                        fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' },
                        mb: { xs: 4, sm: 5, md: 6 },
                        position: 'relative',
                        display: 'inline-block',
                        width: '100%',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: '-15px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: { xs: '80px', sm: '100px', md: '120px' },
                            height: '4px',
                            bgcolor: 'secondary.main',
                            borderRadius: '2px',
                        }
                    }}
                >
                    Our Works
                </Typography>

                {/* Electrical and Mechanical Works - 2 Column Layout */}
                <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ mb: { xs: 4, sm: 5, md: 6 } }}>
                    {/* Electrical Works Column - Left */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ height: '100%' }}>
                            <Typography
                                variant="h4"
                                component="h2"
                                fontWeight={700}
                                color="white"
                                sx={{
                                    bgcolor: 'primary.main',
                                    p: { xs: 1.5, sm: 2 },
                                    mb: { xs: 2, sm: 3 },
                                    borderRadius: '4px',
                                    textAlign: 'center',
                                    fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
                                }}
                            >
                                Electrical Works
                            </Typography>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, sm: 2.5, md: 3 } }}>
                                {electricalWorks.map((work, index) => (
                                    <Paper
                                        key={index}
                                        elevation={0}
                                        sx={{
                                            p: { xs: 2, sm: 2.5, md: 3 },
                                            bgcolor: 'white',
                                            border: '1px solid #e0e0e0',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                boxShadow: '0 4px 12px rgba(4,33,97,0.1)',
                                                borderColor: 'secondary.main',
                                                transform: 'translateY(-4px)',
                                            }
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                            <CheckCircleIcon
                                                sx={{
                                                    color: 'secondary.main',
                                                    fontSize: '1.75rem',
                                                    flexShrink: 0,
                                                    mt: 0.5
                                                }}
                                            />
                                            <Box>
                                                <Typography
                                                    variant="h6"
                                                    fontWeight={600}
                                                    color="primary.main"
                                                    sx={{ mb: 1, fontSize: '1rem' }}
                                                >
                                                    {work.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    sx={{ lineHeight: 1.7, fontSize: '0.875rem' }}
                                                >
                                                    {work.description}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Paper>
                                ))}
                            </Box>
                        </Box>
                    </Grid>

                    {/* Mechanical Works Column - Right */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ height: '100%' }}>
                            <Typography
                                variant="h4"
                                component="h2"
                                fontWeight={700}
                                color="white"
                                sx={{
                                    bgcolor: 'primary.main',
                                    p: 2,
                                    mb: 3,
                                    borderRadius: '4px',
                                    textAlign: 'center'
                                }}
                            >
                                Mechanical Works
                            </Typography>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                {mechanicalWorks.map((work, index) => (
                                    <Paper
                                        key={index}
                                        elevation={0}
                                        sx={{
                                            p: 3,
                                            bgcolor: 'white',
                                            border: '1px solid #e0e0e0',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                boxShadow: '0 4px 12px rgba(4,33,97,0.1)',
                                                borderColor: 'secondary.main',
                                                transform: 'translateY(-4px)',
                                            }
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                            <CheckCircleIcon
                                                sx={{
                                                    color: 'secondary.main',
                                                    fontSize: '1.75rem',
                                                    flexShrink: 0,
                                                    mt: 0.5
                                                }}
                                            />
                                            <Box>
                                                <Typography
                                                    variant="h6"
                                                    fontWeight={600}
                                                    color="primary.main"
                                                    sx={{ mb: 1, fontSize: '1rem' }}
                                                >
                                                    {work.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    sx={{ lineHeight: 1.7, fontSize: '0.875rem' }}
                                                >
                                                    {work.description}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Paper>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                {/* Project Details Section */}
                <Box sx={{ mb: { xs: 4, sm: 5, md: 6 } }}>
                    <Typography
                        variant="h4"
                        component="h2"
                        fontWeight={700}
                        color="white"
                        sx={{
                            bgcolor: 'primary.main',
                            p: { xs: 1.5, sm: 2 },
                            mb: { xs: 2, sm: 3 },
                            borderRadius: '4px',
                            textAlign: 'center',
                            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
                        }}
                    >
                        Project Details
                    </Typography>

                    {/* Mobile: Show scroll hint */}
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            mb: 1,
                            textAlign: 'center',
                            fontStyle: 'italic'
                        }}
                    >
                        Scroll horizontally to view all details →
                    </Typography>

                    <TableContainer
                        component={Paper}
                        elevation={0}
                        sx={{
                            border: '1px solid #e0e0e0',
                            overflowX: 'auto',
                            '& .MuiTable-root': {
                                minWidth: { xs: 800, md: 900 }
                            },
                            // Custom scrollbar for better UX
                            '&::-webkit-scrollbar': {
                                height: '8px',
                            },
                            '&::-webkit-scrollbar-track': {
                                backgroundColor: '#f1f1f1',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: '#888',
                                borderRadius: '4px',
                            },
                            '&::-webkit-scrollbar-thumb:hover': {
                                backgroundColor: '#555',
                            },
                        }}
                    >
                        <Table>
                            <TableHead>
                                <TableRow sx={{ bgcolor: 'primary.main' }}>
                                    <TableCell sx={{ color: 'white', fontWeight: 700, fontSize: { xs: '0.75rem', sm: '0.875rem' }, whiteSpace: 'nowrap' }}>Sl</TableCell>
                                    <TableCell sx={{ color: 'white', fontWeight: 700, fontSize: { xs: '0.75rem', sm: '0.875rem' }, whiteSpace: 'nowrap' }}>Projects</TableCell>
                                    <TableCell sx={{ color: 'white', fontWeight: 700, fontSize: { xs: '0.75rem', sm: '0.875rem' }, whiteSpace: 'nowrap' }}>Mode of Work</TableCell>
                                    <TableCell sx={{ color: 'white', fontWeight: 700, fontSize: { xs: '0.75rem', sm: '0.875rem' }, whiteSpace: 'nowrap' }}>Capacity</TableCell>
                                    <TableCell sx={{ color: 'white', fontWeight: 700, fontSize: { xs: '0.75rem', sm: '0.875rem' }, whiteSpace: 'nowrap' }}>Principle Contractor</TableCell>
                                    <TableCell sx={{ color: 'white', fontWeight: 700, fontSize: { xs: '0.75rem', sm: '0.875rem' }, whiteSpace: 'nowrap' }}>Client</TableCell>
                                    <TableCell sx={{ color: 'white', fontWeight: 700, fontSize: { xs: '0.75rem', sm: '0.875rem' }, whiteSpace: 'nowrap' }}>Remark</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {projects.map((project) => (
                                    <TableRow 
                                        key={project.sl}
                                        sx={{
                                            '&:nth-of-type(odd)': {
                                                bgcolor: '#f9f9f9',
                                            },
                                            '&:hover': {
                                                bgcolor: 'rgba(229, 62, 62, 0.05)',
                                            }
                                        }}
                                    >
                                        <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{project.sl}</TableCell>
                                        <TableCell sx={{ fontWeight: 600, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{project.project}</TableCell>
                                        <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{project.mode}</TableCell>
                                        <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{project.capacity}</TableCell>
                                        <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{project.contractor}</TableCell>
                                        <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{project.client}</TableCell>
                                        <TableCell>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: project.remark.includes('Commissioned') ? 'success.main' : 'warning.main',
                                                    fontWeight: 600,
                                                    fontSize: { xs: '0.75rem', sm: '0.875rem' }
                                                }}
                                            >
                                                {project.remark}
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </Box>
    );
};

export default MuiWorks;

