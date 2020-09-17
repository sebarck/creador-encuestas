import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import '../../style/simpleQuestion.css'
import Agregar from '../../images/agregar.png'


export class Titulo extends Component {

    state = {
        title: '',
        description: ''
    };

    updateTitle = (event) => {
        this.setState({title: event.target.value});
    }

    updateDescription = (event) => {
        this.setState({description: event.target.value});
    }

    agregarPregunta = () => {
        this.props.handleButton(this.state);
    }

    render() {
        return (

            <Container>
                <Row>
                    <Col xs="12">
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
                </Row>
                <Row>
                    <Col xs="9">
                        <div>
                            <input
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                className="descriptionQuestion"
                                onChange={this.updateDescription}
                                placeholder="Máximo 150 palabras"
                                type="text"
                                value={this.state.description}
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

