import React, { Component } from 'react'


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
            <div className="input-group mb-12" >
                <div className="input-group mb-6" >
                    <div className="col-md-9">
                        <textarea
                            className="questionTitle"
                            onChange={this.updateTitle}
                            placeholder="Escribi tu pregunta"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={this.state.title}
                            />
                    </div>
                </div>
                <div className="input-group mb-6">
                    <div className="col-md-6">
                        <input
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            className="smallInput"
                            onChange={this.updateDescription}
                            placeholder="Máximo 150 palabras"
                            type="text"
                            value={this.state.description}
                        />
                    </div>
                    <div className="col-md-6">
                        <button type="button" onClick={this.agregarPregunta} className="btn btn-primary">Agregar Nueva pregunta</button>
                    </div>
                </div>
            </div>
        )
    }
}