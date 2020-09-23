import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import 'date-fns';
import Fecha from './Fecha.js'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [values] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });


  return (
    <Container fixed>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Perfil de usuario
        </Typography>
        <form className={classes.form} noValidate>


        <div className={classes.root}>
            <Grid item xs={3}>
            <TextField
              id="Nombre y apellido"
              label="Nombre y apellido"

              placeholder="Nombre y apellido"
              fullWidth
              variant="outlined"
            />
            </Grid>


            <Grid item xs={3}>
            <Fecha />
            </Grid>





            <Grid item xs={3}>
            <TextField
              id="Dirección de Email"
              label="Dirección de Email"
              style={{ margin: 8 }}
              placeholder="Email"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            </Grid>


            <Grid item xs={3}>
            <TextField
              id="outlined-full-width"
              label="Celular"
              style={{ margin: 8 }}
              placeholder="Celular"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            </Grid>

        </div>

    <Grid item xs={3}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="contraseña actual"
          label="Contraseña actual"
          type={values.showPassword ? 'text' : 'password'}
          id="contraseña"
          autoComplete="contraseña-actual"
        />
</Grid>

<Grid item xs={3}>
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name="Contraseña Nueva"
      label="Contraseña nueva"
      type={values.showPassword ? 'text' : 'password'}
      id="contraseñanueva"
    />
</Grid>


    <Grid item xs={3}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Realizar cambios
          </Button>
</Grid>




        </form>
      </div>
    </Container>
  );
}
