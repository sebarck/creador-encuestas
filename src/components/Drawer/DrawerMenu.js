import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import {
  ChevronLeft,
  ListAlt,
  Person,
  Menu,
  PostAddOutlined,
} from "@material-ui/icons";
import { Link, useHistory} from "react-router-dom";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const DrawerMenu = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const handleDrawerCloseLogin = () => {
    sessionStorage.clear();
    localStorage.clear();
    setOpen(false);
  };

  const history = useHistory();

  if (!sessionStorage.getItem('userLogged')) {
    history.push("/");
  }

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
      <Drawer variant="persistent" anchor="left" open={open}>
        <div className="drawer-header">
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>

        </div>
        <Divider />
        <List>
          <ListItem
            button
            component={Link}
            to="/"
            key="sesion"
            onClick={handleDrawerCloseLogin}
          >
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Cerrar Sesion" />
          </ListItem>
          {!(sessionStorage.getItem("rolUsuario") === "ADMIN-ROLE") && (
          <ListItem
            button
            component={Link}
            to="/encuesta/0"
            key="nueva"
            onClick={handleDrawerClose}
          >
            <ListItemIcon>
              <PostAddOutlined />
            </ListItemIcon>
            <ListItemText primary="Crear nueva encuesta" />
          </ListItem>)}
          <ListItem
            button
            component={Link}
            to="/encuestas"
            key="encuestas"
            onClick={handleDrawerClose}
          >
            <ListItemIcon>
              <ListAlt />
            </ListItemIcon>
            <ListItemText primary="Encuestas creadas" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/perfil"
            key="perfil"
            onClick={handleDrawerClose}
          >
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Mi Perfil" />
          </ListItem>
          {(sessionStorage.getItem("rolUsuario") === "ADMIN-ROLE") && (
            <ListItem
              button
              component={Link}
              to="/usuarios"
              key="usuarios"
              onClick={handleDrawerClose}
            >
              <ListItemIcon>
                <SupervisorAccountIcon />
              </ListItemIcon>
              <ListItemText primary="Usuarios" />
            </ListItem>
          )}
        </List>
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
