import React, { Component } from 'react'
import Radio from '@material-ui/core/Radio'
import Image from '../images/delete.png'
import { Col, Container, Row } from 'reactstrap'


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
        this.setState({options: opciones})
        this.props.handleMultiplesOptions(this.state.options)
    }

    updateOption = (index,valueOption) => {
        var opciones = this.state.options
        opciones[index].valueOption = valueOption
        this.setState({options: opciones})
        this.props.handleMultiplesOptions(this.state.options)
    }

    deleteOption = (index) => {
        var opciones = this.state.options
        opciones.splice(index,1)
        this.setState({options: opciones})
        this.props.handleMultiplesOptions(this.state.options)
    }
    render () {
        return (
            <div className="container-fluid">
                {this.state.options.map((opcion,index) => {
                
                    return(
                        <div key={index} className="container-fluid">
                            <Container >
                                <Row className="row">
                                    <Col className="col-xs-1 col-xl-1">
                                        <Radio
                                            value="d"
                                            color="default"
                                            disabled
                                    />
                                    </Col>
                                    <Col className="col-xs-9 col-xl-9">
                                        <input 
                                            type="text" 
                                            className="smallInput" 
                                            placeholder="ingresá tu nueva opción"
                                            aria-label="opcion" 
                                            onChange={(e) => this.updateOption(index,e.target.value)}
                                            value={opcion.valueOption}
                                        />    
                                    </Col>
                                    <Col className="col-xs-2 col-xl-2">
                                        <figure className="image" value="unvalue">
                                            <img 
                                                src={Image} 
                                                alt="Girl in a jacket" 
                                                width="25" 
                                                height="25" 
                                                onClick={() => this.deleteOption(index)}
                                            />
                                        </figure>
                                    </Col>

                                </Row>
                            </Container>
                            
                            
                            
                    </div>
                    )})
                }
                <Container>
                    <Row>
                        <Col>
                            <Radio
                                value="d"
                                color="default"
                                disabled
                            />
                        </Col>
                        <Col>
                            <span onClick={this.addOption}>
                                nueva opción
                            </span>
                        </Col>
                    </Row>
                </Container>
                
                
                <Radio
                    value="d"
                    color="default"
                    disabled
                />
                <span onClick={this.addOption}>
                    nueva opción
                </span>
            </div>
        )
    }
        
}