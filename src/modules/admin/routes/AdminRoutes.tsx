import React, { useState } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../../shared/contexts/AuthContext';
import { UserRole } from '../../auth/models/UserRoleTypes';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton,
    Tabs,
    Tab,
    Avatar,
    Menu,
    MenuItem,
    Divider,
} from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import QuizIcon from '@mui/icons-material/Quiz';
import BarChartIcon from '@mui/icons-material/BarChart';
import { AdminHomePage } from '../pages/AdminHomePage';

const navItems = [
    { text: 'Dashboard', icon: <HomeIcon /> },
    { text: 'Trainings', icon: <SchoolIcon /> },
    { text: 'Videos', icon: <OndemandVideoIcon /> },
    { text: 'Quizzes', icon: <QuizIcon /> },
    { text: 'Progress', icon: <BarChartIcon /> },
];

function ProtectedLayout() {
    const { user, logout } = useAuth();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedTab, setSelectedTab] = useState(0);

    const handleOpenMenu = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
    const handleCloseMenu = () => setAnchorEl(null);
    const handleLogout = () => { handleCloseMenu(); logout(); };
    
    const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };
                                                                                                                                                                                                                                                                                                                                                                          
    return (
        <Box display={"flex"} flexDirection={"column"} height={"100vh"} >              
            <AppBar position="fixed" color="inherit" elevation={0}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>                        
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <RocketLaunchIcon fontSize="large" />
                        <Typography variant="h6" fontWeight="bold">                                                       
                            WellcomeHub                                                                                                                                               
                        </Typography>
                    </Box>

                    <Box display={"flex"} alignItems={"center"} >
                        <IconButton onClick={handleOpenMenu} size="small">
                            <Avatar alt={user?.name} src="" />
                        </IconButton>
                        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
                            <MenuItem onClick={handleCloseMenu}>Configurações</MenuItem>
                            <MenuItem onClick={handleLogout}>Sair</MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
                <Divider />
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    {navItems.map((item) => (
                        <Tab
                            key={item.text}
                            label={item.text}
                            icon={item.icon}
                            iconPosition="start"
                        />
                    ))}
                </Tabs>
            </AppBar>

            <Box
                component="main"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                   
                }}
            >
                <Outlet />
            </Box>
        </Box>
    );
}

export function AdminRoutes() {
    const { isAuthenticated, user } = useAuth();
    if (!isAuthenticated || user?.role !== UserRole.ADMIN) return <Navigate to="/login" replace />;
    return (
        <Routes>
            <Route element={<ProtectedLayout />}>
                <Route index element={<Navigate to="home" replace />} />
                <Route path="home" element={<AdminHomePage />} />
            </Route>
        </Routes>
    );
}
