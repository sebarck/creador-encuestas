import React, { Component } from 'react'

export class SelectorQuestions extends Component {
    
    buttonDescription = ['Simple corta', 'Simple Larga', 'Selección múltiple']
    
    constructor() {
        super()
        this.state = ({questionTypeSelected: "1"})
    }

    selectQuestion = (questionTypeSelected) => {
        this.setState({questionTypeSelected})
        this.props.questionType(questionTypeSelected)
    }

    render() {
        return (
            <div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {this.buttonDescription[this.state.questionTypeSelected - 1]}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button" onClick={() => this.selectQuestion(1)}>Simple corta</button>
                        <button className="dropdown-item" type="button" onClick={() => this.selectQuestion(2)}>Simple larga</button>
                        <button className="dropdown-item" type="button" onClick={() => this.selectQuestion(3)}>Selección múltiple</button>
                    </div>
                </div>
            </div>
        )
    }  
}