import { useState } from "react";
import { styled, useTheme } from '@mui/material/styles';
import Badge from "@mui/material/Badge"
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/system/Box";
import { Divider, Grid, Paper, Typography } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const Notifications = () => {

    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();

    console.log(theme.palette);
    const handleDrawerClose = () => {
        setIsOpen(!isOpen);
    }

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    }));

    return (
        <>
            <IconButton onClick={handleDrawerClose}>
                <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <Drawer anchor="right"
                open={isOpen}>
                <Box
                    sx={{ width: { xs: 250, sm: 300, md: 350 } }}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronRightIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{ textAlign: "center" }}>Notificaciones</Typography>
                    </DrawerHeader>
                    <Divider sx={{ mb: 2 }} />
                    <Grid container spacing={2} columns={1} padding={1} >
                        <Grid item xs={12}>
                            <Paper elevation={3} sx={{ height: "auto", p: 1, backgroundColor: theme.palette.info.main, color: theme.palette.common.white }}>
                                <Typography>
                                    Se agrego otra opcion para las notificaciones
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper elevation={3} sx={{ height: "auto", p: 1, backgroundColor: theme.palette.info.main, color: theme.palette.common.white }}>
                                <Typography>
                                    Se agrego otra opcion para las notificaciones
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper elevation={3} sx={{ height: "auto", p: 1, backgroundColor: theme.palette.info.main, color: theme.palette.common.white }}>
                                <Typography>
                                    Se agrego otra opcion para las notificaciones
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper elevation={3} sx={{ height: "auto", p: 1, backgroundColor: theme.palette.info.main, color: theme.palette.common.white }}>
                                <Typography>
                                    Se agrego otra opcion para las notificaciones
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper elevation={3} sx={{ height: "auto", p: 1, backgroundColor: theme.palette.info.main, color: theme.palette.common.white }}>
                                <Typography>
                                    Se agrego otra opcion para las notificaciones
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper elevation={3} sx={{ height: "auto", p: 1, backgroundColor: theme.palette.info.main, color: theme.palette.common.white }}>
                                <Typography>
                                    Se agrego otra opcion para las notificaciones
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper elevation={3} sx={{ height: "auto", p: 1, backgroundColor: theme.palette.info.main, color: theme.palette.common.white }}>
                                <Typography>
                                    Se agrego otra opcion para las notificaciones
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper elevation={3} sx={{ height: "auto", p: 1, backgroundColor: theme.palette.info.main, color: theme.palette.common.white }}>
                                <Typography>
                                    Se agrego otra opcion para las notificaciones
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper elevation={3} sx={{ height: "auto", p: 1, backgroundColor: theme.palette.info.main, color: theme.palette.common.white }}>
                                <Typography>
                                    Se agrego otra opcion para las notificaciones
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper elevation={3} sx={{ height: "auto", p: 1, backgroundColor: theme.palette.info.main, color: theme.palette.common.white }}>
                                <Typography>
                                    Se agrego otra opcion para las notificaciones
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper elevation={3} sx={{ height: "auto", p: 1, backgroundColor: theme.palette.info.main, color: theme.palette.common.white }}>
                                <Typography>
                                    Se agrego otra opcion para las notificaciones
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper elevation={3} sx={{ height: "auto", p: 1, backgroundColor: theme.palette.info.main, color: theme.palette.common.white }}>
                                <Typography>
                                    Se agrego otra opcion para las notificaciones
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper elevation={3} sx={{ height: "auto", p: 1, backgroundColor: theme.palette.info.main, color: theme.palette.common.white }}>
                                <Typography>
                                    Se agrego otra opcion para las notificaciones
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper elevation={3} sx={{ height: "auto", p: 1, backgroundColor: theme.palette.info.main, color: theme.palette.common.white }}>
                                <Typography>
                                    Se agrego otra opcion para las notificaciones
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper elevation={3} sx={{ height: "auto", p: 1, backgroundColor: theme.palette.info.main, color: theme.palette.common.white }}>
                                <Typography>
                                    Se agrego otra opcion para las notificaciones
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper elevation={3} sx={{ height: "auto", p: 1, backgroundColor: theme.palette.info.main, color: theme.palette.common.white }}>
                                <Typography>
                                    Se agrego otra opcion para las notificaciones
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper elevation={3} sx={{ height: "auto", p: 1, backgroundColor: theme.palette.info.main, color: theme.palette.common.white }}>
                                <Typography>
                                    Se agrego otra opcion para las notificaciones
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Drawer>
        </>
    )
}
