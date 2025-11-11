// src/pages/HomePage.jsx
import React from 'react';
import MuiHero from '../components/MuiHero';
import MuiStatsBar from '../components/MuiStatsBar';
import MuiAboutUs from '../components/MuiAboutUs';
import MuiServices from '../components/MuiServices';
import MuiAboutObjective from '../components/MuiAboutObjective';
import MuiAuthorizedApplicator from '../components/MuiAuthorizedApplicator';
import MuiClients from '../components/MuiClients';
import MuiGetInTouch from '../components/MuiGetInTouch';

const HomePage = () => {
    return (
        <main>
            <MuiHero />
            <MuiStatsBar />
            <MuiAboutUs />
            <MuiServices />
            <MuiAboutObjective />
            <MuiAuthorizedApplicator />
            <MuiClients />
            <MuiGetInTouch />
        </main>
    );
};

export default HomePage;

