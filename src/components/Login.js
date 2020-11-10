import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Logo from '../images/observatoriopyme.png'



export default class Login extends Component {
  constructor() {
    super()
    this.state = ({values: 1} )
  }

  /*
  Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://www.observatoriopyme.org.ar/">
          Fundación Observatorio Pyme
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
*/
  useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  classes = this.useStyles


  handleLogin = async (e) => {
   e.preventDefault()

  const url='http://localhost:8080/api/v1/usuario'
  const myHeaders = new Headers({
    'Accept':'application/x-www-form-urlencoded',
    'Content-Type': 'application/x-www-form-urlencoded'
  //  'Access-Control-Allow-Origin': "http://localhost:3000"
  });
  const myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
  };


 fetch(url,myInit)
 .then(response => response.text())
 .then(contents => console.log(contents))
 .catch((e) => console.log("Can’t access " + url + " response. Blocked by browser?",e))




  

  }

  render () {
    return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={this.classes.paper}>
      <img
          src={Logo}
          className="imagenObservatorioPyme"
          alt="Obs pyme"
          width="128"
          height="128"
      />
        <Typography component="h1" variant="h5">
          ¡Bienvenido, Usuario!
        </Typography>
        <form className={this.classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="usuario"
            label="Usuario/Mail"
            name="usuario"
            autoComplete="usuario"
            autoFocus
          />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="contraseña" 
              label="Contraseña"
              type={this.state.values.showPassword ? 'text' : 'password'}
              id="contraseña"
              autoComplete="contraseña-actual"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordarme"
            />
            <Button
              onClick={this.handleLogin}
              component={Link}
              to="/encuestas"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.classes.submit}
            >
              Iniciar Sesión
            </Button>
            <Grid container>
              <Grid item xs>
               {/* 
                <Link href="#" variant="body2">
                  Olvidé mi contraseña
                </Link>
              */}
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          {this.Copyright}
        </Box>
      </Container>
    )
  }
}
