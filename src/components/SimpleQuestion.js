import React, { Component } from 'react'
import '../style/simpleQuestion.css'

export class SimpleQuestion extends Component {
    valorPregunta = ''
    

    _handleInput = (e) => {
        this.valorPregunta = e.target.value
    }

    _agregarPregunta = () => {
        console.log('button de Agregar preugnta')
        this.props.addNewQuestion(this.valorPregunta)
    }

    render () {
        return (
            <div>
                <div className="input-group mb-6">
                    <div className="col-md-9">
                        <textarea className="tittleQuestion" onChange={this._handleInput} placeholder="Escribi tu pregunta" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>    
                </div>
                <div className="input-group mb-6">
                    <div className="col-md-6">  
                        <input type="text" className="smallInput" placeholder="Máximo 150 palabras" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="col-md-6">  
                        <button type="button" onClick={this._agregarPregunta} className="btn btn-primary">Generar pregunta</button>
                    </div>
                </div>
            </div>
        )
    }
}
