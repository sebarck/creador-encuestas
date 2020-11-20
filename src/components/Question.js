import React, { Component } from 'react'
import { OptionQuestion } from './OptionQuestions/OptionQuestion'
import { SelectorQuestions } from './SelectorQuestions'
import { SimpleQuestion } from './SimpleQuestion'
import { SimpleQuestionLarge } from './SimpleQuestionLarge'
import { OptionImage } from './OptionImage'

export class Question extends Component {
  
    constructor() {
        super()
        this.state={questionSelector: 1}
    }

    renderQuestionType = (questionType) => {
        
        switch(this.props.question.tipoPregunta) {
            case 1:
                return <SimpleQuestion />
            case 2:
                return <SimpleQuestionLarge />
            case 3: 
                return <OptionQuestion handleMultiplesOptions={this.props.handleMultiplesOptions} multiple="false" question={this.props.question.multiplesOptions} />
            case 4: 
                return <OptionQuestion handleMultiplesOptions={this.props.handleMultiplesOptions} multiple="true"question={this.props.question.multiplesOptions} />
            default:
                return <OptionImage handleOptionImagen={this.props.handleOptionImagen}/>
            
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
                            value={this.props.question.titulo} 
                            aria-label="Username" 
                            aria-describedby="basic-addon1">
                        </textarea>
                    </div>    
                    <div className="col-md-3">
                        <SelectorQuestions questionType={this.updateQuestionSelector} selectedQuestion={this.props.question.tipoPregunta}>
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