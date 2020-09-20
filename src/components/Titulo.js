import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export function Titulo(props) {
    return (
        <Container className="contenedorPersonal">
            <Row>
                <Col className="col-xs-12 col-xl-12">
                    <div>
                        <textarea
                            className="title"
                            onChange={(e)=> (props.handleTitle(e.target.value))}
                            placeholder="Escribí el título de tu encuesta"
                        />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="col-xs-12 col-xl-12">
                    <div>
                        <input type="text" 
                            className="descripcionTitulo" 
                            onChange={(e)=> (props.handleDescription(e.target.value))}
                            placeholder="Aclará una descripción" 
                        />
                    </div>
                </Col>
            </Row>
        </Container>
        
    )
}