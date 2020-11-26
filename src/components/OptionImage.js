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

    componentDidMount = () => {
        this.setState({description: this.props.imageOptions.description})
        this.setState({imageType: this.props.imageOptions.imageType})
        this.setState({maxSize: this.props.imageOptions.maxSize}) 
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.imageOptions.description !== prevProps.imageOptions.description) {
            this.setState({description: this.props.imageOptions.description}) 
        }
        if (this.props.imageOptions.imageType !== prevProps.imageOptions.imageType) {
            this.setState({imageType: this.props.imageOptions.imageType}) 
        }
        if (this.props.imageOptions.maxSize !== prevProps.imageOptions.maxSize) {
            this.setState({maxSize: this.props.imageOptions.maxSize}) 
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
        return this.props.handleOptionImagen(this.state)
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
                                onChange={(e) => this.updateDescription(e)}  
                                value={this.state.description}
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
                        onChange={(e) => this.updateMaxSize(e)}
                        value={this.state.maxSize}
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
                            onChange={(e) => this.updateImageType(e)}
                            value={this.state.imageType}
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