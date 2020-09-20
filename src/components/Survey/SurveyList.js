import { Container } from '@material-ui/core';
import MaterialTable from 'material-table';
import React from 'react';

const SurveyList = () => {
    return (
        <Container maxWidth="lg">
            <MaterialTable
                title="Listado de encuestas creadas"
                columns={[
                    { title: 'Nombre', field: 'name' },
                    { title: 'Descripcion', field: 'description' },
                    { title: 'Fecha de creacion', field: 'creationDate' },
                    { title: 'Creado por', field: 'createdBy' }
                ]}
                data={[
                    {
                        name: 'Encuesta de satisfaccion 2020',
                        description: 'Encuesta dirigida a clientes para conocer su grado de satisfaccion',
                        creationDate: '19/09/2020',
                        createdBy: 'Jose Perez'
                    },
                    {
                        name: 'Benchmarking marketing Abril 2020',
                        description: 'Encuesta para medir el grado de llegada del marketing realizado en Abril',
                        creationDate: '15/09/2020',
                        createdBy: 'Tito Lopez'
                    }
                ]}
                actions={[
                    {
                        icon: 'library_add',
                        tooltip: 'Duplicar encuesta',
                        onClick: () => console.log("Duplicar encuesta fired")
                    },
                    {
                        icon: 'edit',
                        tooltip: 'Modificar encuesta',
                        onClick: () => console.log("Modificar encuesta fired")
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
    );
}

export default SurveyList;