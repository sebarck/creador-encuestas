import React, { Component } from 'react'
import { SimpleQuestion } from './SimpleQuestion'
import { ViewSimpleQuestion } from './ViewSimpleQuestion'

export class View extends Component {

    state = {
        pregunta: ""
    }

    _addSimpleNewQuestion = (pregunta) => {
        console.log('Agregando pregunta')
        this.setState({pregunta})
    }

    render () {
        return (
            <div>
                <SimpleQuestion addNewQuestion={this._addSimpleNewQuestion} />
                <ViewSimpleQuestion pregunta={this.state.pregunta} />
            </div>
        )
    }
}
