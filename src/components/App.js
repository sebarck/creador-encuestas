import React, {Component} from 'react';
import { View} from './View'
import { SimpleQuestion } from './SimpleQuestion'
import { ViewSimpleQuestion } from './ViewSimpleQuestion'
import { Hola } from './Hola'
import { Questions } from './Questions'
import { Titulo} from './Titulo'

class App extends Component {

    constructor () {
        super()
        this.state = {componentList: [{titulo: '', description: ''}]}
        /*this.state = {componentList: [<Hola  mensaje='probando1' id="1"/>,
                                    <Hola mensaje='probando2' id="2"/>],
                        pregunta: ""
                        }*/
    }
    
    _addSimpleNewQuestion = (pregunta) => {
        console.log('Agregando pregunta')
        this.setState({pregunta})
    }

    _agregarComponente = () => {
        var unComponente = this.state.componentList
        unComponente.push(<SimpleQuestion />)
        this.setState({componentList: unComponente})
        console.log(this.state.componentList)
    }

    updateTitle = (titulo) => {
        var componentes = this.state.componentList
        var componenteTitulo = componentes[0]
        componenteTitulo.titulo=titulo
        this.setState({componentList: componentes})
        console.log(this.state.componentList[0])
    }
    
    updateDescription = (description) => {
        var componentes = this.state.componentList
        var componenteTitulo = componentes[0]
        componenteTitulo.description=description
        this.setState({componentList: componentes})
        console.log(this.state.componentList[0])
        
    }
    render () {
        return (
            <div>
                <Titulo handleTitle={this.updateTitle} handleDescription={this.updateDescription} />
                <Questions />
                {/*
                {    
                this.state.componentList.map(component => {
                        return (
                            <div>
                                {component}                            
                            </div>
                        )})
                                        
                }
                <SimpleQuestion addNewQuestion={this._addSimpleNewQuestion} />
                <ViewSimpleQuestion pregunta={this.state.pregunta} />
                <button onClick={this._agregarComponente}>Probando agregar</button>
                */}
            </div>
        )
    }
}

export default App;