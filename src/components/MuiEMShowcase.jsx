// src/components/MuiEMShowcase.js
import React from 'react';
import { Box, Typography, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Hardcoded EM_PROJECTS data from the uploaded image
const EM_PROJECTS = [
    { project: 'Ranni Perunad Power Project', client: 'Kerala State Electricity Board', capacity: '2X2 MW SHEP' },
    { project: 'Perunchani Mini Power Project', client: 'Tamil Nadu Electricity Board', capacity: '0.650X2 MW SHEP' },
    { project: 'Aliyar Small Hydel Power Project', client: 'Tamil Nadu Electricity Board', capacity: '2X1.25 MW SHEP' },
    { project: 'SYNGENE PROJECT', client: 'SIEMENS LTD Mangalore', capacity: 'Fire Alarm panels' },
];

const MuiEMShowcase = () => {
    // Consolidated works from both uploaded 'Our Works' images
    const detailedWorks = [
        "Installation, Testing, Commissioning and Maintenance of Generators, Transformers, Switchgears, Circuit Breakers, Control Panels, CT & PTs, Capacitor Banks, Battery Banks, Lightening Arrestors, Earthing etc.",
        "Power and Control Cable Laying, Termination & Wiring for Hydel Power Generating Stations, Switch Yards, Control Rooms, Substations etc.",
        "Cable Trays & Raceways assembling, Insulators Assembling & Cable Stringing, Bus bar Trunking.",
        "Assembly and Erection of structures in Switch Yards & Substations etc.",
        "Installation, Testing & Commissioning of Medium Voltage Switchgears & Panels.",
        "Installation, Testing & Commissioning of DG Sets & UPS systems.",
        "Installation, Testing & Commissioning of Distribution Boards of Various sizes for Lighting / Power, UPS power etc.",
        "Installation, Testing & Commissioning of Fire Detection & Fire Fighting equipments.",
        "Installation of Networking cable, Data & Voice Outlets.",
        "Assembly, Erection, Testing, Commissioning & Maintenance works carried out in Hydraulic, Mechanical and Pneumatic Machineries for Hydroelectric Power Projects etc.",
        "Fabrication and Erection of Light and Heavy Duty Structures for Industrial Projects.",
        "Transformers oil filtration and equipment hire.",
    ];
    
    // We will show a representative selection of the detailed works in the list for brevity on the UI
    const representativeWorks = [
        "Installation, Testing, Commissioning, and Maintenance of Generators, Transformers, and Switchgears.",
        "Power and Control Cable Laying, Termination & Wiring for Hydel Power Generating Stations, Switch Yards, Substations etc.",
        "Assembly, Erection, Testing, Commissioning & Maintenance for Hydraulic, Mechanical, and Pneumatic Machineries.",
        "Fabrication and Erection of Light and Heavy Duty Structures for Industrial Projects.",
        "Installation, Testing & Commissioning of Distribution Boards, UPS, Fire Detection & Networking Systems.",
    ];

    return (
        <Box sx={{ py: { xs: 6, sm: 8, md: 10, lg: 12 }, bgcolor: '#f9f9f9' }} id="showcase">
            <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
                <Typography
                    variant="h3"
                    component="h2"
                    mb={{ xs: 4, sm: 6, md: 8 }}
                    textAlign="center"
                    sx={{
                        fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                        px: { xs: 2, sm: 0 }
                    }}
                >
                    Specialized Engineering: From Structural Integrity to Power Commissioning
                </Typography>

                <Grid container spacing={{ xs: 3, sm: 4, md: 5, lg: 6 }}>
                    {/* Left Column: Capability Focus */}
                    <Grid item xs={12} lg={6}>
                        <Typography
                            variant="h4"
                            component="h3"
                            color="secondary"
                            mb={{ xs: 2, sm: 3 }}
                            sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' } }}
                        >
                            Electrical & Mechanical (E&M) Works
                        </Typography>
                        <List sx={{ ml: { xs: 0, sm: 2 } }}>
                            {representativeWorks.map((work, index) => (
                                <ListItem key={index} disableGutters sx={{ alignItems: 'flex-start' }}>
                                    <ListItemIcon sx={{ minWidth: { xs: 36, sm: 40 }, mt: 0.5 }}>
                                        <CheckCircleIcon color="primary" sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={work.split("} /> {/* Clean citation from display if present */}
                                        primaryTypographyProps={{
                                            fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem' },
                                            lineHeight: 1.6
                                        }}
                                    />
                                </ListItem>
                            ))}
                            {/* You could also iterate over the detailedWorks array to show everything */}
                        </List>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{
                                mt: { xs: 3, sm: 4 },
                                px: { xs: 3, sm: 4, md: 5 },
                                fontSize: { xs: '0.875rem', sm: '1rem' },
                                width: { xs: '100%', sm: 'auto' }
                            }}
                        >
                            View Our Full E&M Capability Profile (PDF)
                        </Button>
                    </Grid>

                    {/* Right Column: Project Evidence Table */}
                    <Grid item xs={12} lg={6}>
                        <Typography
                            variant="h4"
                            component="h3"
                            color="secondary"
                            mb={{ xs: 2, sm: 3 }}
                            sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' } }}
                        >
                            Project Evidence: Client Trust in Power Solutions
                        </Typography>

                        {/* Mobile: Show scroll hint */}
                        <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{
                                display: { xs: 'block', sm: 'none' },
                                mb: 1,
                                fontStyle: 'italic'
                            }}
                        >
                            Scroll horizontally to view all details →
                        </Typography>

                        <TableContainer
                            component={Paper}
                            elevation={4}
                            sx={{
                                overflowX: 'auto',
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
                            <Table size="small" sx={{ minWidth: { xs: 500, sm: 'auto' } }}>
                                <TableHead>
                                    <TableRow sx={{ bgcolor: 'primary.main' }}>
                                        <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Project</TableCell>
                                        <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Client</TableCell>
                                        <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Capacity/Scope</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {EM_PROJECTS.map((project, index) => (
                                        <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f0f0f0' } }}>
                                            <TableCell component="th" scope="row" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{project.project}</TableCell>
                                            <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{project.client}</TableCell>
                                            <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{project.capacity}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default MuiEMShowcase;