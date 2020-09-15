import React, {Component} from 'react';
import { Questions } from './Questions'
import { Titulo} from './Titulo'
import 'bootstrap/dist/js/bootstrap.min.js'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/simpleQuestion.css'


// or less ideally




class App extends Component {

    constructor () {
        super()
        this.state = {
            titulo: {titulo: '', descripcion: ''},    
            questions: []
        }
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

    updateQuestion = (index,valorPregunta) => {
        var questions = this.state.questions
        questions[index].titulo = valorPregunta
        this.setState({questions: questions})
    }

    updateQuestionType = (index,typeQuestion) => {
        var questions = this.state.questions
        questions[index].tipoPregunta = typeQuestion
        this.setState({questions: questions})
    }

    updateMultiplesOptions = (index,multiplesOptions) => {
        console.log(index)
        var questions = this.state.questions
        console.log(this.state.questions, index)
        console.log(questions[index])
        if (index > questions.length) {
            var question
            question.multiplesOptions = multiplesOptions
            questions.push(question)
        }
        else {
            questions[index].multiplesOptions = multiplesOptions
        }
        this.setState({questions: questions})
    }

    upadte
    render () {
        return (
            <div>
                <Titulo 
                    handleTitle={this.updateTitle}
                    handleDescription={this.updateDescription} 
                    handleButton={this.addQuestion} 
                />
                <Questions 
                    questions={this.state.questions} 
                    handleChange={this.updateQuestion} 
                    handleQuestionType={this.updateQuestionType}
                    handleMultiplesOptions={this.updateMultiplesOptions}
                />
              
            </div>
        )
    }
}

export default App;