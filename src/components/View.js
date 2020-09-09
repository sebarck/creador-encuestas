import React, { Component } from 'react'
import { SimpleQuestion } from './SimpleQuestion'
import { ViewSimpleQuestion } from './ViewSimpleQuestion'
import { Hola } from './Hola'

export class View extends Component {
       
    constructor () {
        super()
        this.state = {componentList: [<Hola  mensaje='probando1'/>,
                                    <Hola mensaje='probando2'/>],
                      pregunta: ""
}
    }
    
    _addSimpleNewQuestion = (pregunta) => {
        console.log('Agregando pregunta')
        this.setState({pregunta})
    }

    _agregarComponente = () => {
        var unComponente = this.state.componentList
        unComponente.push(<Hola mensaje='nuevo elemento hola' />)
        this.setState({componentList: unComponente})
    }

    render () {
        return (
            <div>

                {this.state.componentList}
                <SimpleQuestion addNewQuestion={this._addSimpleNewQuestion} />
                <ViewSimpleQuestion pregunta={this.state.pregunta} />
                <button onClick={this._agregarComponente}>Probando agregar</button>
            </div>
        )
    }
}
