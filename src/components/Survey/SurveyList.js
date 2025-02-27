import { Container } from "@material-ui/core";
import MaterialTable from "material-table";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { obtenerTodasEncuestas, obtenerTodasEncuestasParaAdmin } from "../../controller/encuestasController";
import AlertDialogSlide from "./Modal";
import {
  publicarEncuesta,
  desactivarEncuesta,
  eliminarEncuesta,
  duplicarEncuesta,
} from "../../controller/encuestasController";

export class SurveyList extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      action: [],
      openModal: false,
      id: 0,
      nombre: "",
    };
  }
  componentDidMount = () => {
    this.obtenerEncuestas();
  };

  obtenerEncuestas = () => {
    let role = sessionStorage.getItem('rolUsuario')
    role === 'ADMIN-ROLE' ? this.obtenerEncuestasParaAdmin() : this.obtenerEncuestasParaUsuarios()

  };

  obtenerEncuestasParaUsuarios = () => {
    obtenerTodasEncuestas(
      (data) => {
        let dataState = [];
        data.data.map((encuesta) => {
          let dataListSurvey = {
            name: encuesta.poll_title,
            description: encuesta.description,
            updatedDate: encuesta.updateAt,
            state: encuesta.poll_state,
            id: encuesta._id,
          };

          dataState.push(dataListSurvey);
          return true;
        });
        this.setState({ data: dataState });
      },
      (e) => console.log(e)
    );
  }

  obtenerEncuestasParaAdmin = () => {
    obtenerTodasEncuestasParaAdmin(
      (data) => {
        let dataState = [];
        data.data.map((encuesta) => {
          let dateFormated = new Date(encuesta.createAt)
          let dataListSurvey = {
            name: encuesta.poll_title,
            description: encuesta.description,
            creationDate: dateFormated.toLocaleDateString(), 
            state: encuesta.poll_state,
            id: encuesta._id,
          };

          dataState.push(dataListSurvey);
          return true;
        });
        this.setState({ data: dataState });
      },
      (e) => console.log(e)
    );
  }

  modificarEncuesta = (id) => {
    this.props.history.push("/encuesta/" + id);
  };

  duplicarEncuesta = (id) => {
    duplicarEncuesta(
      id,
      (data) => {
        this.obtenerEncuestas();
      },
      (e) => console.log(e)
    );
  };

  publicarEncuesta = (id) => {
    publicarEncuesta(
      id,
      (data) => {
        this.obtenerEncuestas();
      },
      (e) => console.log(e)
    );
  };

  desactivarEncuesta = (id) => {
    desactivarEncuesta(
      id,
      (data) => {
        this.obtenerEncuestas();
      },
      (e) => console.log(e)
    );
  };

  eliminarEncuesta = (id, name) => {
    this.setState({ id, nombre: name });
    this.abrirModal();
  };

  handlerEliminar = (id) => {
    eliminarEncuesta(
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
            title="Listado de encuestas creadas"
            columns={[
              { title: "Nombre", field: "name" },
              { title: "Descripcion", field: "description" },
              { title: "Últ actualización", field: "updatedDate" },
              { title: "Estado encuesta", field: "state" },
            ]}
            data={this.state.data}
            actions={[
              rowData => ({
                icon: "checker",
                tooltip: "Publicar encuesta",
                onClick: (event, rowData) => {
                  this.publicarEncuesta(rowData.id);
                },
                disabled: (rowData.state === "PUBLICADA"),
              }),
              rowData => ({
                icon: "clear",
                tooltip: "Inactivar encuesta",
                onClick: (event, rowData) =>
                  this.desactivarEncuesta(rowData.id),
                disabled: (rowData.state === "INACTIVA") || (rowData.state === "BORRADOR"),
              }),
              {
                icon: "library_add",
                tooltip: "Duplicar encuesta",
                onClick: (event, rowData) => {
                  this.duplicarEncuesta(rowData.id);
                },
              },
              rowData => ({
                icon: "edit",
                tooltip: "Modificar encuesta",
                onClick: (event, rowData) => this.modificarEncuesta(rowData.id),
                disabled: (rowData.state === "PUBLICADA"),
              }),
              rowData => ({
                icon: "delete",
                tooltip: "Eliminar encuesta",
                onClick: (event, rowData) =>
                  this.eliminarEncuesta(rowData.id, rowData.name),
              disabled: (rowData.state === "PUBLICADA"),
              }),
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
