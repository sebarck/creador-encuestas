import { Container } from "@material-ui/core";
import MaterialTable from "material-table";
import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { obtenerTodosUsuarios, eliminarUsuario, actualizarUsuario } from "../controller/usuarioController";
import axios from "axios";
const origin = process.env.REACT_APP_BACKEND_ORIGIN;

function getHeaders() {
  return {
    Accept: "application/x-www-form-urlencoded, application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": origin,
    Authorization: localStorage.getItem("token"),
  };
}

let url = process.env.REACT_APP_BACKEND_URI + "/usuario";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Usuarios2() {
  const classes = useStyles();
  const { useState } = React;

  

  const [userData, setUserData] = useState();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseCrear = () => {
    setOpen(false);
    handleClickCrearUsuario();
  };

  const handleCloseCancelar = () => {
    setOpen(false);
  };

  const [role, setRole] = React.useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  //obtener usuarios

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  function obtenerUsuarios() {
    console.log("disparar evento obtención usuarios");
    obtenerTodosUsuarios(
      (data) => {
        let dataState = [];
        console.log(data);
        data.usuarios.map((usuario) => {
          let dataListUsuario = {
            role: usuario.role,
            nombre: usuario.nombre,
            email: usuario.email,
            id: usuario._id,
            estado: usuario.estado,
          };

          dataState.push(dataListUsuario);
          return true;
        });
        setUserData(dataState);
      },
      (e) => console.log(e)
    );
  }

  async function handleClickCrearUsuario() {
    if (password !== "") {
      console.log(name);
      const response = await axios.post(url, {
        headers: getHeaders(),
        nombre: name,
        email: email,
        password:password,
        role:role,
      });
      if (response.data.ok === true) {
        alert("El usuario fue creado");
        obtenerUsuarios();
      } else {
        alert("Existió un error");
      }
    }
  }

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPass] = React.useState("");

  return (
    <div>
      <Container maxWidth="lg">
        <MaterialTable
          title="Administración de usuarios"
          columns={[
            { title: "Nombre", field: "nombre" },
            { title: "E-mail", field: "email" },
            { title: "Rol", field: "role" },
          ]}
          data={userData}
            editable={{
              onRowUpdate: (newData, oldData) => {
                actualizarUsuario(newData.id,
                    newData,
                    data => console.log(data),
                    (e) => console.log(e))
                return (
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataUpdate = [...userData];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setUserData([...dataUpdate]);

                    resolve();
                  }, 1000);
                })
                )},
              onRowDelete: (oldData) => {
                
                eliminarUsuario(oldData.id,
                    data => console.log(data),
                    (e) => console.log(e))


                console.log('pasando por aca')
                return (
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataDelete = [...userData];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setUserData([...dataDelete]);

                    resolve();
                  }, 1000);
                })
                )},
            }}
        />
        <br />
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Crear usuario
        </Button>
      </Container>
      <div>
        <Dialog
          open={open}
          onClose={handleCloseCancelar}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Creación de usuario</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Por favor, ingrese los siguientes campos
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="nombre"
              label="Nombre"
              type="text"
              fullWidth
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              margin="dense"
              id="name"
              label="Email"
              type="email"
              fullWidth
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <TextField
              margin="dense"
              id="pass"
              label="Contraseña"
              type="password"
              fullWidth
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            <br />
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Tipo de rol</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={role}
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value={"ADMIN-ROLE"}>ADMIN-ROLE</MenuItem>
                <MenuItem value={"USER_ROLE"}>USER_ROLE</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseCancelar} color="primary">
              Cancelar
            </Button>
            <Button onClick={handleCloseCrear} color="primary">
              Crear
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
