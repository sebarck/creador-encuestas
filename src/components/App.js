import React, { Component } from 'react';
import { Questions } from './Questions'
import { Titulo } from './Titulo'
import 'bootstrap/dist/js/bootstrap.min.js'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/simpleQuestion.css'
import { Container } from '@material-ui/core';
import { Col, Row } from 'reactstrap';
import RenderedQuestionList from './RenderizedForm/RenderedQuestionList';


// or less ideally




class App extends Component {

    constructor() {
        super()
        this.state = {
            titulo: { titulo: '', descripcion: '' },
            questions: []
        }
    }

    updateTitle = (title) => {
        var nuevoTitulo = { titulo: title, descripcion: this.state.titulo.descripcion }
        this.setState({ titulo: nuevoTitulo })
    }

    updateDescription = (description) => {
        var nuevoTitulo = { titulo: this.state.titulo.descripcion, descripcion: description }
        this.setState({ titulo: nuevoTitulo })
    }

    addQuestion = (tipoPregunta) => {
        var componentes = this.state.questions
        var componente = {}
        componente.tipoPregunta = tipoPregunta
        componente.titulo = "nuevaPregunta"
        componentes.push(componente)
        this.setState({ questions: componentes })

    }

    updateQuestion = (index, valorPregunta) => {
        var questions = this.state.questions
        questions[index].titulo = valorPregunta
        this.setState({ questions: questions })
        console.log(this.state.questions)
    }

    updateQuestionType = (index, typeQuestion) => {
        console.log(index, typeQuestion)
        var questions = this.state.questions
        questions[index].tipoPregunta = typeQuestion
        this.setState({ questions: questions })
        console.log(this.state.questions)
    }

    upadte
    render() {
        return (
            <div>
                <Container>
                    <Row xs="2">
                        <Col className='left-column-data'>
                            <RenderedQuestionList questions={this.state.questions} />
                        </Col>
                        <Col className='right-column-builder'>
                            <Titulo handleTitle={this.updateTitle} handleDescription={this.updateDescription} handleButton={this.addQuestion} />
                            <Questions questions={this.state.questions} handleChange={this.updateQuestion} handleQuestionType={this.updateQuestionType} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default App;