import React from 'react'
import { SelectorQuestions } from './SelectorQuestions'





export function Question(props) {
    return (
        <div key={props.index} className="input-group mb-12" >
            <div className="input-group mb-6" >
                <div className="col-md-9">
                    <textarea className="tittleQuestion" onBlur={(e) => props.handleChange(props.index,e.target.value)} placeholder="Escribi tu pregunta" aria-label="Username" aria-describedby="basic-addon1">
                    </textarea>
                </div>    
                <div className="col-md-3">
                    <SelectorQuestions questionType={(tipoPregunta) => props.handleQuestionSelector(props.index,tipoPregunta)} 
                        Seleccioná el tipo de pregunta
                    />
                </div>
            </div>
            <div className="input-group mb-6">
                <div className="col-md-6">  
                    <input type="text" disabled className="smallInput" placeholder="Máximo 150 palabras" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
            </div>
        </div>
    )
}