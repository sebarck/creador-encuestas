import React, { Component } from 'react';
import { Questions } from './Questions'
import { Titulo } from './FormBuilder/QuestionBuilder'
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

    addQuestion = (question) => {
        var componentes = this.state.questions;
        var componente = {};
        componente.tipoPregunta = 1;
        componente.titulo = question.title;
        componente.descripcion = question.description;
        componentes.push(componente);
        this.setState({ questions: componentes });

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

    render() {
        return (
            <div>
                <Container>
                    <Row xs="2">
                        <Col className='left-column-data'>
                            <RenderedQuestionList questions={this.state.questions} />
                        </Col>
                        <Col className='right-column-builder'>
                            <Titulo handleButton={this.addQuestion} handleQuestionSelector={this.actualizadorTipoPregunta}/>
                            {/* <Questions questions={this.state.questions} handleChange={this.updateQuestion} handleQuestionType={this.updateQuestionType} /> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default App;