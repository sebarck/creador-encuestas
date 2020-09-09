import React, { Component } from 'react'
import { SimpleQuestion } from './SimpleQuestion'


export default class GeneratorQuestions extends Component {
    
    state = {
        pregunta: ""
    }

    _addNewQuestion = (pregunta) => {
        console.log('seteando nueva pregunta', pregunta)
        this.setState({pregunta})
    }
    
    render () {
        return (
            <SimpleQuestion addQuestion={this._addNewQuestion}/>
        )
    }
}