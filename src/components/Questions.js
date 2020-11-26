import React, { Component } from 'react'
import { Question } from './Question'

export class Questions extends Component {

    actualizadorTitulo = (index,valueQuestion) => {
        return (
            this.props.handleChange(index,valueQuestion)
        )
    }

    actualizadorTipoPregunta = (index,tipoPregunta) =>{
        return (
            this.props.handleQuestionType(index,tipoPregunta)
        )
    }
    actualizarMultiplesOpciones = (index,multiplesOpciones) => {
        return (
            
            this.props.handleMultiplesOptions(index,multiplesOpciones)
        )
    }

    actualizarOpcionImagen = (index,camposOpcionenImagen) => {
        return (
            this.props.handleImageOptions(index,camposOpcionenImagen)
        )
    }

    eliminarPregunta = (index) => {
        return (
            this.props.handleDeleteQuestion(index)
        )
    }

    render () {
        return (
            this.props.questions.map((question,index) => {
                return (
                    <div key={index}>
                        <Question 
                            index={index} 
                            handleChange={this.actualizadorTitulo} 
                            handleQuestionSelector={this.actualizadorTipoPregunta}
                            handleMultiplesOptions={(multiplesOpciones) => this.actualizarMultiplesOpciones(index,multiplesOpciones)}
                            handleImageImageOptin={(imageOptions) => this.actualizarOpcionImagen(index,imageOptions)}
                            handleDeleteQuestion={() => this.eliminarPregunta(index)}
                            title={question.titulo}

                            question={question}
                        />
                    </div>
                    
                )})
        )
    }
}
            



