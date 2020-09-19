import { AppBar, CssBaseline, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import { ChevronLeft, ListAlt, Person, Menu } from '@material-ui/icons';

const DrawerMenu = () => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className="drawer-menu">
            <CssBaseline />
            <AppBar position="fixed" className="drawer-menu-appbar" />
            <Toolbar>
                <IconButton onClick={handleDrawerOpen}>
                    <Menu />
                </IconButton>
                <Typography variant="h5" style={{ flexGrow: 1 }}>
                    Creador de encuestas
                </Typography>
            </Toolbar>
            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
            >
                <div className="drawer-header" >
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeft />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button key="encuestas" onClick={console.log("Click encuestas")}>
                        <ListItemIcon>
                            <ListAlt />
                        </ListItemIcon>
                        <ListItemText primary="Encuestas" />
                    </ListItem>
                    <ListItem button key="perfil">
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText primary="Mi Perfil" />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}

export default DrawerMenu;