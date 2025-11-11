// src/components/MuiTools.jsx
import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';

const MuiTools = () => {
    const electricalTools = [
        { name: '500 V Megger', quantity: '1no.' },
        { name: 'HT testing kit', quantity: '1no.' },
        { name: '5 KV Megger', quantity: '1no.' },
        { name: 'Hydraulic crimping tool', quantity: '1no.' },
        { name: 'Nose pliers', quantity: '6nos.' },
        { name: 'Clamp tester', quantity: '2 nos.' },
        { name: 'Screw driver set', quantity: '6nos.' },
        { name: 'Wire stripper', quantity: '10nos.' },
        { name: 'Hacksaw frame blade set', quantity: '6nos.' },
        { name: 'Tacho meter', quantity: '1no.' },
        { name: 'Holes cutter', quantity: '3 sets.' },
        { name: 'Letter punch', quantity: '3 sets.' },
        { name: 'Box spanner set', quantity: '3 sets.' },
        { name: 'Screw spanner 12"', quantity: '4nos.' },
        { name: 'Center punch', quantity: '4nos.' },
        { name: 'Hand drill m/c', quantity: '2nos.' },
        { name: 'Drill bits', quantity: '' },
        { name: '3 KV Megger', quantity: '1no.' },
        { name: 'Sound level meter', quantity: '1no.' },
        { name: 'Crimping tools', quantity: '6nos.' },
        { name: 'Monkey pliers', quantity: '6nos.' },
        { name: 'Line tester', quantity: '12nos.' },
        { name: 'Continuity tester', quantity: '6nos.' },
        { name: 'Wire cutter', quantity: '4nos.' },
        { name: 'Sniper', quantity: '6nos.' },
        { name: 'Phase sequence meter', quantity: '1no.' },
        { name: 'Mini hacksaw frame blade set', quantity: '6nos.' },
        { name: 'Spanner sets', quantity: '6 sets.' },
        { name: 'Number punches', quantity: '3 sets.' },
        { name: 'Screw spanner 9"', quantity: '3nos.' },
        { name: 'Ratchet set', quantity: '2nos.' },
        { name: 'Head light', quantity: '6nos.' },
        { name: 'Magnetic drill', quantity: '1no.' },
        { name: 'Files smooth & rough', quantity: '' },
    ];

    const mechanicalTools = [
        { name: 'Welding m/c – 450A', quantity: '3nos.' },
        { name: 'DG set – 63 KVA', quantity: '1no.' },
        { name: 'Chain blocks -10T', quantity: '2nos.' },
        { name: 'Chain blocks -3T', quantity: '6nos.' },
        { name: 'D-links – 5T', quantity: '10nos.' },
        { name: 'U-clamps', quantity: '12nos.' },
        { name: 'C-links -3T', quantity: '6nos.' },
        { name: 'Rope – 12mm', quantity: '100mtrs.' },
        { name: 'Ball pin hammers', quantity: '4nos.' },
        { name: 'Hammer -5lbs', quantity: '6nos.' },
        { name: 'Spanner set (10-90) double end and ring', quantity: '2 set.' },
        { name: 'Micro meter -300mm – inside', quantity: '1no.' },
        { name: 'Micro meter -1000mm – out', quantity: '1no.' },
        { name: 'Vernier caliper 300mm', quantity: '4nos.' },
        { name: 'Screw gauge – 12"', quantity: '1no.' },
        { name: 'Master level 200 –Metereo', quantity: '2no.' },
        { name: 'Right angle -12"', quantity: '4no.' },
        { name: 'Steel rule -1mt', quantity: '5nos.' },
        { name: 'Divider (in & out)', quantity: '150mm -1no.' },
        { name: 'Drilling m/c (pistol type)', quantity: '2nos.' },
        { name: 'Grinding m/c A.G 5', quantity: '4nos.' },
        { name: 'Pipe wrench 24"', quantity: '2nos.' },
        { name: 'Box spanner', quantity: '2 set.' },
        { name: 'Spirit level', quantity: '2nos.' },
        { name: 'Plumb level', quantity: '6nos.' },
        { name: 'Filler gauge 300 mm', quantity: '2no.' },
        { name: 'Stick micro meter 300mm', quantity: '1no.' },
        { name: 'Torque wrench', quantity: '1no.' },
        { name: 'Telescopic gauge', quantity: '1no.' },
        { name: 'Fiber hammer', quantity: '4nos.' },
        { name: 'Brass rod ø50mm- 300mm', quantity: '2no.' },
        { name: 'Blow lamp', quantity: '2nos.' },
        { name: 'Screw jack 10T', quantity: '6nos.' },
        { name: 'Hydraulic jack -25T', quantity: '4nos.' },
        { name: 'Pipe wise 6"', quantity: '1no.' },
        { name: 'Chain wrench -12"', quantity: '2nos.' },
        { name: 'Grease gun', quantity: '4nos.' },
        { name: 'Oil stone', quantity: '6nos.' },
        { name: 'Weighing m/c 10kg', quantity: '1no.' },
        { name: 'Half round file rough & smooth', quantity: '3 sets each.' },
        { name: 'Welding m/c – 650A', quantity: '1no' },
        { name: 'Gas cutting set', quantity: '3nos.' },
        { name: 'Chain blocks -5T', quantity: '4nos.' },
        { name: 'D-links – 10T', quantity: '8nos' },
        { name: 'D-links – 3T', quantity: '10nos' },
        { name: 'C-links -10T', quantity: '8nos.' },
        { name: 'Wire rope 1"', quantity: '100mtrs.' },
        { name: 'Rope – 25mm', quantity: '100mtrs.' },
        { name: '6Hammer – 2lbs', quantity: '6nos.' },
        { name: 'Hammer – 10lbs', quantity: '5nos.' },
        { name: 'Dial gauges (Metereo- 0.01mm)', quantity: '6nos.' },
        { name: 'Micro meter -300mm – out side', quantity: '1no.' },
        { name: 'Micro meter -1000mm – in side', quantity: '1no.' },
        { name: 'Screw gauge – 6"', quantity: '1no.' },
        { name: 'Master level 250 –Metereo', quantity: '2no.' },
        { name: 'Master level 150 –RSK', quantity: '2no.' },
        { name: 'Right angle 6"', quantity: '4no.' },
        { name: 'Steel rule 300mm', quantity: '4nos.' },
        { name: 'Divider (in & out)', quantity: '300mm -1no.' },
        { name: 'Grinding m/c A.G 7', quantity: '2nos.' },
        { name: 'Bench wise 3"', quantity: '2no.' },
        { name: 'Pipe wrench 12"', quantity: '2nos.' },
        { name: 'Hacksaw frame blade', quantity: '4nos.' },
        { name: 'Height gauge', quantity: '1no.' },
        { name: 'Filler gauge -150 mm', quantity: '2no.' },
        { name: 'Filler gauge 1000 mm', quantity: '1no.' },
        { name: 'Block level', quantity: '1no.' },
        { name: 'Slip gauge ½ mm 25mm', quantity: '1no.' },
        { name: 'Rubber hammer', quantity: '4nos.' },
        { name: 'Brass hammer', quantity: '2no.' },
        { name: 'Copper rod ø50mm- 300mm', quantity: '2no.' },
        { name: 'Air blower', quantity: '2no.' },
        { name: 'Screw jack 40T', quantity: '6nos.' },
        { name: 'C – clamps', quantity: '8nos.' },
        { name: 'Pipe wise – 4"', quantity: '1no.' },
        { name: 'Puller 10T', quantity: '2nos.' },
        { name: 'Oil gun', quantity: '4nos.' },
        { name: 'Tin cutter', quantity: '4nos.' },
        { name: 'Flat file rough & smooth', quantity: '3 sets each.' },
        { name: 'Triangles file rough & smooth', quantity: '3 sets each.' },
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
                    Our Tools & Equipment
                </Typography>

                {/* Electrical and Mechanical Tools - 2 Column Layout */}
                <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
                    {/* Electrical Tools Column - Left */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ height: '100%' }}>
                            <Typography
                                variant="h3"
                                component="h2"
                                fontWeight={700}
                                color="white"
                                sx={{
                                    bgcolor: 'primary.main',
                                    p: { xs: 1.5, sm: 2 },
                                    mb: { xs: 2, sm: 3 },
                                    borderRadius: '4px',
                                    textAlign: 'center',
                                    fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                                    textTransform: 'uppercase',
                                    letterSpacing: { xs: '0.5px', md: '1px' },
                                }}
                            >
                                Electrical Tools
                            </Typography>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, sm: 2 } }}>
                                {electricalTools.map((tool, index) => (
                                    <Paper
                                        key={index}
                                        elevation={0}
                                        sx={{
                                            p: { xs: 1.5, sm: 2 },
                                            bgcolor: 'white',
                                            border: '1px solid #e0e0e0',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                boxShadow: '0 4px 12px rgba(4,33,97,0.1)',
                                                borderColor: 'secondary.main',
                                                transform: 'translateY(-2px)',
                                            }
                                        }}
                                    >
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: 'text.primary',
                                                fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.95rem' },
                                            }}
                                        >
                                            <Box component="span" sx={{ fontWeight: 600 }}>
                                                {tool.name}
                                            </Box>
                                            {tool.quantity && (
                                                <Box component="span" sx={{ color: 'text.secondary', ml: 1 }}>
                                                    - {tool.quantity}
                                                </Box>
                                            )}
                                        </Typography>
                                    </Paper>
                                ))}
                            </Box>
                        </Box>
                    </Grid>

                    {/* Mechanical Tools Column - Right */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ height: '100%' }}>
                            <Typography
                                variant="h3"
                                component="h2"
                                fontWeight={700}
                                color="white"
                                sx={{
                                    bgcolor: 'primary.main',
                                    p: { xs: 1.5, sm: 2 },
                                    mb: { xs: 2, sm: 3 },
                                    borderRadius: '4px',
                                    textAlign: 'center',
                                    fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                                    textTransform: 'uppercase',
                                    letterSpacing: { xs: '0.5px', md: '1px' },
                                }}
                            >
                                Mechanical Tools
                            </Typography>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, sm: 2 } }}>
                                {mechanicalTools.map((tool, index) => (
                                    <Paper
                                        key={index}
                                        elevation={0}
                                        sx={{
                                            p: { xs: 1.5, sm: 2 },
                                            bgcolor: 'white',
                                            border: '1px solid #e0e0e0',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                boxShadow: '0 4px 12px rgba(4,33,97,0.1)',
                                                borderColor: 'secondary.main',
                                                transform: 'translateY(-2px)',
                                            }
                                        }}
                                    >
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: 'text.primary',
                                                fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.95rem' },
                                            }}
                                        >
                                            <Box component="span" sx={{ fontWeight: 600 }}>
                                                {tool.name}
                                            </Box>
                                            {tool.quantity && (
                                                <Box component="span" sx={{ color: 'text.secondary', ml: 1 }}>
                                                    - {tool.quantity}
                                                </Box>
                                            )}
                                        </Typography>
                                    </Paper>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default MuiTools;

