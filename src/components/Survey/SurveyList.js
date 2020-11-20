import { Container } from "@material-ui/core";
import MaterialTable from "material-table";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { obtenerTodasEncuestas } from "../../controller/encuestasController";
import AlertDialogSlide from "./Modal";
import {
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
    console.log("disparar evento");
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

  modificarEncuesta = (id) => {
    this.props.history.push("/encuesta/" + id);
  };

  duplicarEncuesta = (id) => {
    duplicarEncuesta(
      id,
      (data) => {
        console.log("Duplicacion OK");
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
        console.log("eliminacion OK");
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
              { title: "Fecha de creacion", field: "creationDate" },
              { title: "Creado por", field: "createdBy" },
              { title: "id", field: "id", hidden: true },
            ]}
            data={this.state.data}
            actions={[
              {
                icon: "library_add",
                tooltip: "Duplicar encuesta",
                onClick: (event, rowData) => {
                  this.duplicarEncuesta(rowData.id);
                },
              },
              {
                icon: "edit",
                tooltip: "Modificar encuesta",
                onClick: (event, rowData) => this.modificarEncuesta(rowData.id),
              },
              {
                icon: "delete",
                tooltip: "Eliminar encuesta",
                onClick: (event, rowData) =>
                  this.eliminarEncuesta(rowData.id, rowData.name),
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
