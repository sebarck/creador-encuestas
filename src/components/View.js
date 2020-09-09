import React, { Component } from 'react'
import { SimpleQuestion } from './SimpleQuestion'
import { ViewSimpleQuestion } from './ViewSimpleQuestion'
import { Hola } from './Hola'

export class View extends Component {




    state = {
        pregunta: ""
    }


    componentList = [
        <Hola  mensaje='probando1'/>,
        <Hola mensaje='probando2'/>
    ]; // Change this to get the list from props or state

    _addSimpleNewQuestion = (pregunta) => {
        console.log('Agregando pregunta')
        this.setState({pregunta})
    }

    generarHola (){
        
        this.componentList.concat({Hola mensaje="otroMensaje" />})
        
    }

    render () {
        return (
            <div>
                {this.generarHola()}
                {this.componentList}
                <SimpleQuestion addNewQuestion={this._addSimpleNewQuestion} />
                <ViewSimpleQuestion pregunta={this.state.pregunta} />
            </div>
        )
    }
}
