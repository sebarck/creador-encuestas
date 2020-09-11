import React, {Component} from 'react';
import { SimpleQuestion } from './SimpleQuestion'
import { Questions } from './Questions'
import { Titulo} from './Titulo'

class App extends Component {

    constructor () {
        super()
        this.state = {
            titulo: {titulo: '', descripcion: ''},    
            questions: []}
    }
    
    _addSimpleNewQuestion = (pregunta) => {
        console.log('Agregando pregunta')
        this.setState({pregunta})
    }

    _agregarComponente = () => {
        var unComponente = this.state.questions
        unComponente.push(<SimpleQuestion />)
        this.setState({questions: unComponente})
        console.log(this.state.questions)
    }

    updateTitle = (title) => {
        var nuevoTitulo = {titulo: title, descripcion: this.state.titulo.descripcion}
        this.setState({titulo: nuevoTitulo})
    }
    
    updateDescription = (description) => {
        var nuevoTitulo = {titulo: this.state.titulo.descripcion, descripcion: description}
        this.setState({titulo: nuevoTitulo})
    }

    addQuestion = (tipoPregunta) => {
        var componentes = this.state.questions
        var componente = {}
        componente.tipoPregunta = tipoPregunta
        componente.titulo = "nuevaPregunta"
        componentes.push(componente)
        this.setState({questions: componentes})
        
    }

    updatePreguntas = (index,valorPregunta) => {
        var questions = this.state.questions
        questions[index].titulo = valorPregunta
        this.setState({questions: questions})
        console.log(this.state.questions)
    }
    render () {
        return (
            <div>
                <Titulo handleTitle={this.updateTitle} handleDescription={this.updateDescription} handleButton={this.addQuestion} />
                <Questions questions={this.state.questions} handleChange={this.updatePreguntas}/>
                {/*              
                <SimpleQuestion addNewQuestion={this._addSimpleNewQuestion} />
                <ViewSimpleQuestion pregunta={this.state.pregunta} />
                <button onClick={this._agregarComponente}>Probando agregar</button>
                */}
            </div>
        )
    }
}

export default App;