import React, { Component } from 'react'


export class Titulo extends Component{

    updateTitle = (a) => {
        this.props.handleTitle(a.target.value)
    
    }

    updateDescription = (e) => {
        this.props.handleDescription(e.target.value)
    }

    agregarPregunta = () => {
        this.props.handleButton(1)
    }



    render () {
        return (
            <div className="input-group mb-12" >
                <div className="input-group mb-6" >
                    <div className="col-md-9">
                        <textarea 
                            className="tittleQuestion" 
                            onBlur={this.updateTitle} 
                            placeholder="Escribi tu pregunta" 
                            aria-label="Username" 
                            aria-describedby="basic-addon1">
                                {this.props.titulo}
                        </textarea>
                    </div>    
                </div>
                <div className="input-group mb-6">
                    <div className="col-md-6">  
                        <input 
                            aria-label="Username" 
                            aria-describedby="basic-addon1" 
                            className="smallInput" 
                            onBlur={this.updateDescription}
                            placeholder="Máximo 150 palabras" 
                            type="text" 
                            value={this.props.description}
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