import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';

const RenderedQuestionList = ({ questions }) => {
    const uuid = uuidv4();

    // Aca lo que hago es recibir el arrray con las preguntas y renderizarlas con el map
    const renderedQuestionList = questions.map((question) => {
        return (
            <ListGroupItem key={uuid}>
                <ListGroupItemHeading>{question.titulo}</ListGroupItemHeading>
                <ListGroupItemText>Descripcion</ListGroupItemText>
            </ListGroupItem>
        );
    });
    return (
        <ListGroup>{renderedQuestionList}</ListGroup>
    );
}

export default RenderedQuestionList;