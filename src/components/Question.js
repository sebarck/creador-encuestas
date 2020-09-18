import React, { Component } from 'react'
import { OptionQuestion } from './OptionQuestion'
import { SelectorQuestions } from './SelectorQuestions'
import { SimpleQuestion } from './SimpleQuestion'
import { SimpleQuestionLarge } from './SimpleQuestionLarge'

export class Question extends Component {
    
    constructor() {
        super()
        this.state={questionSelector: 1}
    }

    renderQuestionType = (questionType) => {
        switch(questionType) {
            case 1:
                return <SimpleQuestion />
            case 2:
                return <SimpleQuestionLarge />
            case 3: 
                return <OptionQuestion handleMultiplesOptions={this.props.handleMultiplesOptions} />
            default:
                return <p>Respuesta genérica</p>;
            
        }
        
    }


    updateQuestionSelector = (tipoPregunta) => {
        this.setState({questionSelector: tipoPregunta})
        this.props.handleQuestionSelector(this.props.index,tipoPregunta)
    }


    render () {
        return (
            <div className="contenedorPersonal" >
                <div className="input-group mb-6" >
                    <div className="col-md-9">
                        <textarea 
                            className="tittleQuestion" 
                            onChange={(e) => this.props.handleChange(this.props.index,e.target.value)} 
                            placeholder="Escribi tu pregunta"
                            value={this.props.title} 
                            aria-label="Username" 
                            aria-describedby="basic-addon1">
                        </textarea>
                    </div>    
                    <div className="col-md-3">
                        <SelectorQuestions questionType={this.updateQuestionSelector} >
                            Seleccioná tu pregunta
                        </SelectorQuestions>
                    </div>
                </div>
                <div className="container">  
                    {this.renderQuestionType(this.state.questionSelector)}
                </div>
            </div>
        )
    }
}