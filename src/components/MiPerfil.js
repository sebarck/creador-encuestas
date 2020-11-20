import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Row, Col } from 'reactstrap';
import 'date-fns';
import Fecha from './Fecha.js'
import LogoGrande from '../images/observatoriopymegrande.jpg'

const useStyles = makeStyles((theme) => ({
root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
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
    <Container style={{ marginLeft: 20}}>


<Row>

        <Col sm={{ size: 5, order: 1}}>


            <div className={classes.paper}>

              <Typography component="h1" variant="h6">
                Perfil de usuario
              </Typography>
              <form className={classes.form} noValidate>


              <div className={classes.paper}>
                  <Grid>
                  <TextField
                    id="Nombre y apellido"
                    label="Nombre y apellido"
                    placeholder="Nombre y apellido"
                    fullWidth
                    variant="outlined"
                  />
                  </Grid>

                  <Grid>
                  <Fecha />
                  </Grid>

                  <Grid>
                  <TextField
                    id="Dirección de Email"
                    label="Dirección de Email"
                    placeholder="Email"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                  </Grid>


                  <Grid>
                  <TextField
                    id="Celular"
                    label="Celular"
                    placeholder="Celular"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                  </Grid>



          <Grid>
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

          <Grid>
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


          <Grid>
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

              </div>


              </form>
            </div>



        </Col>

<Col sm={{ size: 2, order: 2}}>
</Col>

<Col sm={{ size: 3, order: 3}}>
            <div>
            <img
                src={LogoGrande}
                className="imagenObservatorioPymeGrande"
                alt="Obs pyme"

            />
            </div>
        </Col>

              </Row>


    </Container>


  );
}
