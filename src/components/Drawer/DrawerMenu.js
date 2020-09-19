import { AppBar, CssBaseline, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import { ChevronLeft, ListAlt, Person, Menu, PostAddOutlined } from '@material-ui/icons';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import SurveyList from '../Survey/SurveyList';

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
            <BrowserRouter>
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
                        <ListItem button component={Link} to="/crear" key="nueva">
                            <ListItemIcon>
                                <PostAddOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Crear nueva encuesta" />
                        </ListItem>
                        <ListItem button component={Link} to="/" key="encuestas">
                            <ListItemIcon>
                                <ListAlt />
                            </ListItemIcon>
                            <ListItemText primary="Encuestas creadas" />
                        </ListItem>
                        <ListItem button component={Link} to="/perfil" key="perfil">
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary="Mi Perfil" />
                        </ListItem>
                    </List>
                </Drawer>
                <Switch>
                    <Route exact path="/">
                        <SurveyList />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default DrawerMenu;