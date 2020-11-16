import { Container } from '@material-ui/core';
import MaterialTable from 'material-table';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { obtenerTodasEncuestas } from '../../controller/encuestasController'


export  class SurveyList extends Component {

    constructor() {
        super()
        this.state = {
            data: [],
            action: []
        }
    }
    componentDidMount  =() => {
        obtenerTodasEncuestas(
            data => {
                let dataState = []
                data.data.map((encuesta) => {
                    let dataListSurvey = {
                        name: encuesta.poll_title,
                        description: encuesta.description,
                        creationDate: encuesta.createAt,
                        createdBy: 'Tito Perez',
                        id: encuesta._id
                    }

                    dataState.push(dataListSurvey) 
                    return true
                })
                this.setState({data: dataState})
            },
            (e) => console.log(e) 
        )

    }
 
    modificarEncuesta = (id) => {
        this.props.history.push('/encuesta/'+id)
    }
    render () {
        
        return (
           
                <Container maxWidth="lg">
                    <MaterialTable
                        title="Listado de encuestas creadas"
                        columns={[
                            { title: 'Nombre', field: 'name' },
                            { title: 'Descripcion', field: 'description' },
                            { title: 'Fecha de creacion', field: 'creationDate' },
                            { title: 'Creado por', field: 'createdBy' },
                            {title: 'id', field: 'id', hidden: true}
                        ]}
                        data={this.state.data}
                        actions={[
                            {
                                icon: 'library_add',
                                tooltip: 'Duplicar encuesta',
                                
                            },
                            {
                                icon: 'edit',
                                tooltip: 'Modificar encuesta',
                                onClick: (event, rowData) => this.modificarEncuesta(rowData.id)
                            },
                            {
                                icon: 'delete',
                                tooltip: 'Eliminar encuesta',
                                onClick: () => console.log("Eliminar encuesta fired")
                            }
                        ]}

                        
                        localization={{
                            body: {
                            emptyDataSourceMessage: 'Ningun registro para mostrar'
                            },
                            toolbar: {
                            searchTooltip: 'Buscar'
                            },
                            pagination: {
                            labelRowsSelect: 'lineas',
                            labelDisplayedRows: '{count} de {from}-{to}',
                            firstTooltip: 'Primera página',
                            previousTooltip: 'Página anterior',
                            nextTooltip: 'Próxima página',
                            lastTooltip: 'Última página'
                            }
                        }}

                    />
                </Container>
               
        )
    }
}

export default withRouter(SurveyList);