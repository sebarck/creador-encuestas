import React from 'react';
import { Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';

const FormCreator = () => {
    return (
        <Form>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="questionTitle">Titulo de pregunta</Label>
                        <Input type="text" name="title" id="questionTitle" placeholder="Coloca aca el titulo de la pregunta" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="questionDescription">Descripcion de pregunta</Label>
                        <Input type="text" name="description" id="questionDescription" placeholder="Coloca aca la descripcion de la pregunta" />
                    </FormGroup>
                </Col>
            </Row>
        </Form >
    );
}
export default FormCreator;