import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Row, Col } from 'reactstrap';
import 'date-fns';

import axios from 'axios'
const origin = process.env.REACT_APP_BACKEND_ORIGIN

function getHeaders() {
    return ({
        'Accept':'application/x-www-form-urlencoded, application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': origin,
        'Authorization': localStorage.getItem('token')
    })
}


const useStyles = makeStyles((theme) => ({
root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
}));


const userID = JSON.parse(sessionStorage.getItem("usuario"));
const url = process.env.REACT_APP_BACKEND_URI + "/usuario/" + userID._id;

  const obtenerUser = async () => await axios.get(url,{
    "headers": getHeaders()}).then((response) => response.data)



export default function SignIn() {
  const classes = useStyles();
  const [values] = React.useState({
    showPassword: false,
  });
  const[name , setName] = React.useState("");
  const[email , setEmail] = React.useState("");
  const[password , setPass] = React.useState("");
  const[user, setUser] = React.useState();

  React.useEffect(() => {
    const fetchUser = async () => {setUser(await obtenerUser())};
    fetchUser();
},[]);

  React.useEffect(()=>{
    if(user){
      setName(user.usuario.nombre);
      setEmail(user.usuario.email)
    }
  },[user]);

  async function handleClick(){
    if(password !== ""){
      console.log(name);
    const response = await axios.put(url,{"headers": getHeaders(),
      nombre:{name}, email:{email}, password:{password}});
        if(response.data.ok === true){
          alert("Se realizó el cambio");
        }else{
          alert("existió un error");
        }
    }else{
      const response = await axios.put(url,
        {"headers": getHeaders(),
          nombre:name, email:email});
      if(response.data.ok === true){
        alert("Se realizó el cambio");
      }else{
        alert("existió un error");
      }
    }
    };

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
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
            />
            </Grid>

            <Grid item xs={3}>
            <TextField
              id="Dirección de Email"
              label="Dirección de Email"
              style={{ margin: 8 }}
              placeholder="Email"
              fullWidth
              margin="normal"
              variant="outlined"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
            </Grid>


        </div>


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
      value={password}
      onChange={(e)=>{setPass(e.target.value)}}
    />
</Grid>


    <Grid item xs={3}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClick}
          >
            Realizar cambios
          </Button>
</Grid>

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
