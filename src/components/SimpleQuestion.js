import React from 'react'
import '../style/simpleQuestion.css'

export function SimpleQuestion (props) {
    return (

        <div>
            <div className="input-group mb-6">
                <div className="col-md-9">
                    <textarea className="tittleQuestion" placeholder="Escribi tu pregunta" aria-label="Username" aria-describedby="basic-addon1" />
                </div>    
            </div>
            <div className="input-group mb-6">
                <div className="col-md-6">  
                <input type="text" className="smallInput" placeholder="Máximo 150 palabras" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
            </div>
        </div>
    )
}
