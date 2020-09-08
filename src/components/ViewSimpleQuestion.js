import React, { Component } from 'react'
import '../style/simpleQuestion.css'

export class ViewSimpleQuestion extends Component {
    state = {pregunta: '', respuesta: ''}

    _handleQuestion = (props) => {
        this.props.addQuestion(props.pregunta)
    }

    render () {
        return (
            <div>
            <div className="input-group mb-6">
                <div className="col-md-9">
                    <div className="tittleQuestion" placeholder="Escribi tu pregunta" aria-label="Username" aria-describedby="basic-addon1">
                        {this.props.pregunta}
                    </div>
                </div>    
            </div>
            <div className="input-group mb-6">
                <div className="col-md-6">  
                    <div className="smallInput, inputShortAnswer" placeholder="Máximo 150 palabras" aria-label="Username" aria-describedby="basic-addon1">
                        Escribí acá tu respuesta
                    </div>
                </div>
                <div className="col-md-6">  
                    <button type="button" onClick={this._handleQuestion} className="btn btn-primary">Enviar</button>
                </div>
            </div>
        </div>
        )
    }
}