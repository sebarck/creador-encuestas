import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom'

import Logo from '../images/observatoriopyme.png'
import { MensajeError } from './mensajeria/mensajeError';



export class Login extends Component {
  
  constructor() {
    super()
    this.state = ({
      isLogged: false,
      mensajeError: '',
      values: 1,
      email: 'usuario1gmail.com',
      password: 'Una clave nueva'

    } )
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
    
    let formData = new URLSearchParams()   
    formData.append('email', this.state.email)
    formData.append('password', this.state.password)
    const url='http://localhost:8080/api/v1/login'
    const myHeaders = new Headers({
        'Accept':'application/x-www-form-urlencoded',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': "http://localhost:3000"
    })
    const myInit = {
        method: 'POST',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
        body: formData
    };

    fetch(url,myInit)
        .then(response => {
            this.setState({isLogged: response.ok})
            return (response.json())
        })
        .then(data => {
            console.log(data);
            if (this.state.isLogged) {
                this.props.history.push('/encuestas')
            }
            else {
                console.log('is logged?',this.state.isLogged)
                console.log(data.err);
                this.setState({mensajeError: data.err.message})
            }
        })
    .catch((e) => {
        console.log(e);
        this.setState({mensajeError: "Error de sistema"})
    })
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
            onChange={(e)=>{this.setState({email: e.target.value})}}
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
              onChange={(e) => {this.setState({password: e.target.value})}}
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
                
                <Link href="#" variant="body2">
                  Olvidé mi contraseña
                </Link>
              
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

export default withRouter(Login);