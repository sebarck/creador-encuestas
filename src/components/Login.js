import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom'

import Logo from '../images/observatoriopyme.png'
import { MensajeError } from './mensajeria/mensajeError';
import { CircularProgress, Typography } from '@material-ui/core';

import { login } from '../controller/loginController'




export class Login extends Component {
  componentDidMount = () => { this.props.isDrawerVisibleFalse(); }


  constructor() {
    super()
    this.state = ({
      isLogged: false,
      mensajeError: '',
      values: 1,
      email: 'usuario33@gmail.com',
      password: 'Una clave nueva',
      isLoading: false
    })
  }

  Copyright() {

    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" to="https://www.observatoriopyme.org.ar/">
          Fundación Observatorio Pyme
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

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
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  classes = this.useStyles

  handleLogin = (e) => {
    e.preventDefault()
    this.setState({ isLoading: true });

    let formData = new URLSearchParams()
    formData.append('email', this.state.email)
    formData.append('password', this.state.password)
    login(formData
      , (data => {
        if (data.ok) {
          this.setState({ isLoading: false });
          this.setState({ isLogged: true })
          localStorage.setItem('token', data.token)
          sessionStorage.setItem('usuario', JSON.stringify(data.usuario))
          sessionStorage.setItem('rolUsuario', data.usuario.role)
          sessionStorage.setItem('userLogged', true)
          this.props.isDrawerVisibleTrue()
          this.props.history.push('/encuestas')
        }
        else {
          this.setState({ isLoading: false });
          this.setState({ mensajeError: data.err.message })
        }
      })
      , (e) => {
        this.setState({ isLoading: false });
        this.setState({ mensajeError: "Error de sistema" })
      }
    )
  }

  render() {

    return (

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <br />
        <div className={this.classes.paper}>
          <img
            src={Logo}
            className="imagenObservatorioPyme"
            alt="Obs pyme"
            width="128"
            height="128"
          />
          <MensajeError className="mensajeError">
            {this.state.mensajeError}
          </MensajeError>

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
              value={this.state.email}
              onChange={(e) => { this.setState({ email: e.target.value }) }}
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
              value={this.state.password}
              onChange={(e) => { this.setState({ password: e.target.value }) }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordarme"
            />
            {/* <Grid container>
              <Grid item xs>
                
                <Link href="#" variant="body2">
                  Olvidé mi contraseña
                </Link>
              
              </Grid>
            </Grid> */}
          </form>
          <Container maxWidth="md">
            {this.state.isLoading
              ? <CircularProgress style={{ marginLeft: 150 }} />
              : (
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
              )
            }
          </Container>
        </div>
        <br />
        <Box mt={8}>
          {this.Copyright}
        </Box>
      </Container>
    )
  }
}

export default withRouter(Login);