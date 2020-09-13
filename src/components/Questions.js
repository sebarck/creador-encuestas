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

    render () {
        return (
            this.props.questions.map((question,index) => {
                return (
                    <div key={index}>
                        <Question index={index} handleChange={this.actualizadorTitulo} handleQuestionSelector={this.actualizadorTipoPregunta}/>
                    </div>
                    
                )})
        )
    }
}
            



