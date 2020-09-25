import React, { Component } from 'react'

export class SelectorQuestions extends Component {
    
    buttonDescription = ['Simple corta', 'Simple Larga', 'Selección única', "Selección múltiple", "Imagen"]
    
    constructor() {
        super()
        this.state = ({questionTypeSelected: 1})
    }


    static defaultProps={
        selectedQuestion: 1
    }

    componentDidMount = () => {
        this.setState({questionTypeSelected: this.props.selectedQuestion})

    }
    componentDidUpdate = (prevProps) => {
        
        if (this.props.selectedQuestion !== prevProps.selectedQuestion) {
            this.setState({questionTypeSelected: this.props.selectedQuestion})

        }
    } 
    
    
    selectQuestion = (questionTypeSelected) => {
        this.setState({questionTypeSelected})
        this.props.questionType(questionTypeSelected)
    }

    render() {
        return (
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle buttonSelector" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {this.buttonDescription[this.state.questionTypeSelected - 1]}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button" onClick={() => this.selectQuestion(1)}>Simple corta</button>
                        <button className="dropdown-item" type="button" onClick={() => this.selectQuestion(2)}>Simple larga</button>
                        <button className="dropdown-item" type="button" onClick={() => this.selectQuestion(3)}>Selección única</button>
                        <button className="dropdown-item" type="button" onClick={() => this.selectQuestion(4)}>Selección múltiple</button>
                        <button className="dropdown-item" type="button" onClick={() => this.selectQuestion(5)}>Imágen</button>
                    </div>
                </div>        )
    }  
}