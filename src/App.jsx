// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

// Theme and Components
import JirehTechTheme from './MuiTheme';
import MuiHeader from './components/MuiHeader';
import MuiFooter from './components/MuiFooter';
import MuiAnnouncementBar from './components/MuiAnnouncementBar';
import ScrollToTop from './components/ScrollToTop';
import FloatingContactButton from './components/FloatingContactButton';
import SEO from './components/SEO';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ToolsPage from './pages/ToolsPage';
import WorksPage from './pages/WorksPage';

function App() {
  return (
    // Applies the custom colors and resets browser styling
    <ThemeProvider theme={JirehTechTheme}>
      <CssBaseline />
      <SEO />
      <Router>
        <MuiAnnouncementBar />
        <MuiHeader />
        <Box sx={{ paddingTop: { xs: '80px', sm: '100px', md: '120px' } }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/works" element={<WorksPage />} />
          </Routes>
        </Box>
        <MuiFooter />
        <ScrollToTop />
        <FloatingContactButton />
      </Router>
    </ThemeProvider>
  );
}

export default App;