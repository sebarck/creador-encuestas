import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import '../../style/simpleQuestion.css'
import Agregar from '../../images/agregar.png'


export class Titulo extends Component {

    state = {
        title: ''
    };

    updateTitle = (event) => {
        this.setState({title: event.target.value});
    }

    agregarPregunta = () => {
        this.props.handleButton(this.state);
        this.setState({title: ''})
    }

    render() {
        return (

            <Container className="contenedorPersonal">
                <Row>
                    <Col xs="9">
                        <div>
                            <textarea
                                className="tittleQuestion"
                                onChange={this.updateTitle}
                                placeholder="Escribi tu pregunta"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                value={this.state.title}
                                />
                        </div>
                    </Col>
                    <Col xs="3">
                        <div className="botonAgregar">
                                <img 
                                    src={Agregar} 
                                    className="imagenAgregar"
                                    alt="Girl in a jacket" 
                                    width="26" 
                                    height="26" 
                                    onClick={this.agregarPregunta} 
                                />
                        </div>
                    </Col>
                </Row>
            </Container>



        )
    }
}

