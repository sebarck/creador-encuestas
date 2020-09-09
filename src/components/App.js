import React, {Component} from 'react';
import { View} from './View'
import { SimpleQuestion } from './SimpleQuestion'
import { ViewSimpleQuestion } from './ViewSimpleQuestion'
import { Hola } from './Hola'

class App extends Component {

    constructor () {
        super()
        this.state = {componentList: [<Hola  mensaje='probando1' id="1"/>,
                                    <Hola mensaje='probando2' id="2"/>],
                      pregunta: ""
}
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


    
    render () {
        return (
            <div>
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
            </div>
        )
    }
}

export default App;