import { AppBar, CssBaseline, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import { ChevronLeft, ListAlt, Person, Menu, PostAddOutlined } from '@material-ui/icons';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import SurveyList from '../Survey/SurveyList';
import { NuevaEncuesta } from '../NuevaEncuesta';
import InicioDeSesión from '../InicioDeSesión';
import MiPerfil from '../MiPerfil';


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
            <BrowserRouter></BrowserRouter>
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
                        <ListItem button component={Link} to="/login" key="sesion" onClick={handleDrawerClose}>
                            <ListItemIcon>
                              <Person />
                            </ListItemIcon>
                            <ListItemText primary="Iniciar Sesión" />
                        </ListItem>
                        <ListItem button component={Link} to="/encuesta/0" key="nueva" onClick={handleDrawerClose}>
                            <ListItemIcon>
                                <PostAddOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Crear nueva encuesta" />
                        </ListItem>
                        <ListItem button component={Link} to="/" key="encuestas" onClick={handleDrawerClose}>
                            <ListItemIcon>
                                <ListAlt />
                            </ListItemIcon>
                            <ListItemText primary="Encuestas creadas" />
                        </ListItem>
                        <ListItem button component={Link} to="/MiPerfil" key="MiPerfil" onClick={handleDrawerClose}>
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary="Mi Perfil" />
                        </ListItem>

                    </List>
                </Drawer>
                <Switch>
                    <Route path="/encuesta/:id" component={NuevaEncuesta} />
                    <Route exact path="/" component={SurveyList} />
										<Route exact path="/login" component={InicioDeSesión} />
                    <Route exact path="/MiPerfil" component={MiPerfil} />
                </Switch>

        </div>
    );
}

export default DrawerMenu;
