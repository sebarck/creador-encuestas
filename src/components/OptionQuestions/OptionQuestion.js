import React, { Component } from 'react'
import { Button, Col, Container, CustomInput, Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


export class OptionQuestion extends Component {
    constructor() {
        super()
        this.state = {
            options: []
        }
    }

    addOption = () => {
        var opciones = this.state.options
        var opcion = {}
        opcion.valueOption = ""
        opciones.push(opcion)
        this.setState({ options: opciones })
        this.props.handleMultiplesOptions(this.state.options)
    }

    updateOption = (index, valueOption) => {
        var opciones = this.state.options
        opciones[index].valueOption = valueOption
        this.setState({ options: opciones })
        this.props.handleMultiplesOptions(this.state.options)
    }

    deleteOption = (index) => {
        var opciones = this.state.options
        opciones.splice(index, 1)
        this.setState({ options: opciones })
        this.props.handleMultiplesOptions(this.state.options)
    }

    renderTypeButton = () => {
        if (this.props.multiple==="true") {
            return <CustomInput type="checkbox" id="checkbox" name="checkbox" disabled/>
        }
        else {
            return <CustomInput type="radio" id="radio" name="radio" disabled/>
        }
    }

    render() {
        return (
            <Container className="themed-container" fluid={true}>
                {this.state.options.map((opcion, index) => {
                    return (
                        <div key={index} className="container-fluid">
                            <Container >
                                <Row className="row">
                                    <Col className="col-xs-1 col-xl-1">
                                        {this.renderTypeButton()}
                                    </Col>
                                    <Col className="col-xs-9 col-xl-9">
                                        <input
                                            type="text"
                                            className="smallInput"
                                            placeholder="ingresá tu nueva opción"
                                            aria-label="opcion"
                                            onChange={(e) => this.updateOption(index, e.target.value)}
                                            value={opcion.valueOption}
                                        />
                                    </Col>
                                    <Col className="col-xs-2 col-xl-2">
                                        <Button className="btn-icon btn-rmv" outline color="danger" type="button" onClick={this.deleteOption}>
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    )
                })
                }
                <Container>
                    <Row>
                        <Col>
                            <Button outline color="primary" onClick={this.addOption}>Añadir nueva opción</Button>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }

}