import React, { Component } from 'react'
import { Col, Container,  Row } from 'reactstrap'

export class OptionImage extends Component {
    
    constructor() {
        super()
        this.state = {
            description : "",
            maxSize : "0",
            imageType : ""
        }
    }

    updateDescription = (e) => {
        this.setState({description: e.target.value})
        return this.props.handleOptionImagen(this.state)
    }
    
    updateMaxSize = (e) => {
        this.setState({maxSize: e.target.value})
        return this.props.handleOptionImagen(this.state)

    }

    updateImageType = (e) => {
        this.setState({imageType: e.target.value})
    }

    render () {
        return (
            <Container >
                <Row className="row">
                    <Col className="col-xs-12 col-xl-12">
                        <div className="col-md-9">  
                            <input 
                                type="text" 
                                className="smallInput" 
                                placeholder="Ingresá una descripción, de ser necesario" 
                                aria-label="Username" 
                                aria-describedby="basic-addon1" 
                                onChange={this.updateDescription}    
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="row">
                    <Col className="col-xs4 col-xl-4">
                        <p className="labelComponent">
                            Tamaño máximo de archivo: 
                        </p>        
                    </Col>
                    <Col className="col-xs-8 col-xl-8">
                    <input
                        type="text"
                        className="smallInput"
                        placeholder="ingresá tu nueva opción"
                        aria-label="opcion"
                        onChange={(e) => this.updateMaxSize}
                    />       
                    </Col>
                </Row>
                <Row>
                    <Col className="col-xs-4 col-xl-4">
                        <p className="labelComponent">
                            Archivos admitidos: 
                        </p>
                    </Col>
                    <Col className="col-xs-8 col-xl-8">
                        <input
                            type="text"
                            className="smallInput"
                            aria-label="opcion"
                            onChange={(e) => this.updateImageType}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="col-xs-4 col-xl-4">
                        <p className="labelComponent">
                            Seleccionar archivo:
                        </p>
                    </Col>
                    <Col className="col-xs-8 col-xl-8">
                        <input
                            type="file"
                            className="smallInput"
                            aria-label="opcion"
                            disabled
                        />
                    </Col>
                </Row>
            </Container>
)
    }
}