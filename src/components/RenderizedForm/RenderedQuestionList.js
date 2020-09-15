import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';

const RenderedQuestionList = ({ questions }) => {
    // Aca lo que hago es recibir el arrray con las preguntas y renderizarlas con el map
    const renderedQuestionList = questions.map((question) => {
        // Aca simplemente genero un UUID random para usarlo de key en la lista
        // Esto es porque React cuando usas listas te pide que uses una unique key
        const uuid = uuidv4();
        return (
            <ListGroupItem key={uuid}>
                <ListGroupItemHeading>{question.titulo}</ListGroupItemHeading>
                <ListGroupItemText>{question.descripcion}</ListGroupItemText>
            </ListGroupItem>
        );
    });
    return (
        // Y todo ese map de preguntas que ahora tienen estructura de ListGroupItem
        // las clavo aca adentro
        <ListGroup>{renderedQuestionList}</ListGroup>
    );
}

export default RenderedQuestionList;