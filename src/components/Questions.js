import React, { Component } from 'react'

export class Questions extends Component {

    _handleTitle = () => {
        
    }

    render () {
        return (
            
            this.props.questions.map((question,index) => {
                return (
                    <div key={index} className="nput-group mb-12" >
                        <div className="input-group mb-6" >
                            <div className="col-md-9">
                                <textarea className="tittleQuestion" onBlur={(e) => this.props.handleChange(index,e.target.value)} placeholder="Escribi tu pregunta" aria-label="Username" aria-describedby="basic-addon1">
                                </textarea>
                            </div>    
                        </div>
                        <div className="input-group mb-6">
                            <div className="col-md-6">  
                                <input type="text" disabled className="smallInput" placeholder="Máximo 150 palabras" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>
                )})
        )
    }
}
            



