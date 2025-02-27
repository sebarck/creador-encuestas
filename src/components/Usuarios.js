import { Container } from "@material-ui/core";
import MaterialTable from "material-table";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { obtenerTodasEncuestas } from "../controller/encuestasController";
import AlertDialogSlide from "../components/mensajeria/ModalUserDeletion";
import { eliminarUsuario } from "../controller/usuarioController";

export class SurveyList extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      action: [],
      openModal: false,
      id: 0,
      nombre: "",
      data1: {
        ok: true,
        usuarios: [
          {
            role: "ADMIN-ROLE",
            estado: true,
            _id: "5fa78a042738422892e6a4d5",
            nombre: "Usuario 33",
            email: "usuario33@gmail.com",
            __v: 0,
          },
          {
            role: "ADMIN-ROLE",
            estado: true,
            _id: "5fa78a152738422892e6a4d6",
            nombre: "Usuario 34",
            email: "usuario34@gmail.com",
            __v: 0,
          },
        ],
      },
    };
  }
  componentDidMount = () => {
    this.obtenerEncuestas();
  };

  //esto tiene que ser obtener usuarios
  obtenerEncuestas = () => {
    obtenerTodasEncuestas(
      (data) => {
        let dataState = [];
        data.data.map((encuesta) => {
          let dataListSurvey = {
            name: encuesta.poll_title,
            description: encuesta.description,
            creationDate: encuesta.createAt,
            createdBy: "Tito Perez",
            id: encuesta._id,
          };

          dataState.push(dataListSurvey);
          return true;
        });
        this.setState({ data: dataState });
      },
      (e) => console.log(e)
    );
  };


//   modificarEncuesta = (id) => {
//     this.props.history.push("/encuesta/" + id);
//   };

  eliminarUsuario = (id, name) => {
    this.setState({ id, nombre: name });
    this.abrirModal();
  };

  //esto tiene que ser para eliminar usuario
  handlerEliminar = (id) => {
    eliminarUsuario(
      id,
      (data) => {
        this.obtenerEncuestas();
      },
      (e) => console.log(e)
    );
  };

  abrirModal = () => {
    this.setState({ openModal: !this.state.openModal });
  };
  render() {
    return (
      <div>
        <AlertDialogSlide
          input={this.state.id}
          nombre={this.state.nombre}
          abrirModal={this.abrirModal}
          openModal={this.state.openModal}
          eliminar={this.handlerEliminar}
        />
        <Container maxWidth="lg">
          <MaterialTable
            title="Administración de usuarios"
            columns={[
              { title: "Nombre", field: "nombre" },
              { title: "Email", field: "email" },
              { title: "Estado", field: "estado" },
              //   { title: "Descripcion", field: "description" },
              //   { title: "Fecha de creacion", field: "creationDate" },
              //   { title: "Creado por", field: "createdBy" },
              //   { title: "id", field: "id", hidden: true },
            ]}
            data={this.state.data1.usuarios}
            actions={[
              {
                icon: "edit",
                tooltip: "Modificar usuario",
                onClick: (event, rowData) => this.modificarEncuesta(rowData.id),
              },
              {
                icon: "delete",
                tooltip: "Eliminar usuario",
                onClick: (event, rowData) =>
                  this.eliminarUsuario(rowData.id, rowData.name),
              },
            ]}
            localization={{
              body: {
                emptyDataSourceMessage: "Ningun registro para mostrar",
              },
              toolbar: {
                searchTooltip: "Buscar",
              },
              pagination: {
                labelRowsSelect: "lineas",
                labelDisplayedRows: "{count} de {from}-{to}",
                firstTooltip: "Primera página",
                previousTooltip: "Página anterior",
                nextTooltip: "Próxima página",
                lastTooltip: "Última página",
              },
            }}
          />
        </Container>
      </div>
    );
  }
}

export default withRouter(SurveyList);
