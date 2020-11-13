import React, { Component } from 'react';
import { Questions } from './Questions'
import { QuestionGenerator } from './QuestionGenerator'
import { Container, Col, Row, Button } from 'reactstrap';
import { Titulo } from './Titulo';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/simpleQuestion.css'

import { converter } from '../helpers/helper' 

import encuesta1 from '../recursos/encuesta1.json'


export class NuevaEncuesta extends Component {
    static propTypes={
        match: PropTypes.shape({
            params: PropTypes.shape({
                id:PropTypes.string
            }),
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    static defaultProps={
        match: {
            params: {
                id: ''
            },
            isExact: true,
            path: '',
            url: ''
        }
    }

    constructor() {
        super()
        this.state = {
            titulo: { titulo: '', descripcion: '' },
            questions: []
        }
    }


    componentDidMount = () => {

        
        var emptyTitle = {titulo: '', descripcion: ''}
        var emptyQuestions = []
        
         this.props.match.params.id !=="0" ?
            this.setState({titulo: encuesta1.titulo, questions: encuesta1.questions}) :                    
            this.setState({titulo: emptyTitle, questions: emptyQuestions})
        
    }

    componentDidUpdate = (prevProps) => {
        var emptyTitle = {titulo: '', descripcion: ''}
        var emptyQuestions = []
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.match.params.id!=="0" ?
                this.setState({titulo: encuesta1.titulo, questions: encuesta1.questions}) :                    
                this.setState({titulo: emptyTitle, questions: emptyQuestions})
        }
    } 

    updateTitle = (title) => {
        var nuevoTitulo = {titulo: title, descripcion: this.state.titulo.descripcion}
        this.setState({titulo: nuevoTitulo})
    }
    
    updateDescription = (description) => {
        var nuevoTitulo = {titulo: this.state.titulo.titulo, descripcion: description}
        this.setState({titulo: nuevoTitulo})
    }

    addQuestion = (tituloPregunta) => {
        var componentes = this.state.questions
        var componente = {}
        componente.tipoPregunta = 1
        componente.titulo = tituloPregunta.title
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
        var questions = this.state.questions
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

    updateImageOptions = (index,imageOptions) => {
        var questions = this.state.questions
        questions[index].imageOptions = imageOptions
        this.setState({questions: questions})
    }

    managePoll = () => {
    
        let convertJsonToBodyServices = converter.encuestas()
     
        const url='http://localhost:8080/api/v1/encuestas'
        const myHeaders = new Headers({
            'Accept':'application/x-www-form-urlencoded',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': "http://localhost:3000"
        })
        const myInit = {
            method: 'POST',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default',
            body: convertJsonToBodyServices
        };

        fetch(url,myInit)
            .then(response => {
                this.setState({isLogged: response.ok})
                return (response.json())
            })
            .then(data => {
                console.log(data);
                if (this.state.isLogged) {
                    this.props.history.push('/encuestas')
                }
                else {
                    console.log('is logged?',this.state.isLogged)
                    console.log(data.err);
                    this.setState({mensajeError: data.err.message})
                }
            })
        .catch((e) => {
            console.log(e);
            this.setState({mensajeError: "Error de sistema"})
        })
    }


       

    render() {

        return (
            <div className='container-fluid'>
                <Container fluid="true">
                    <Row xs="2">
                        <Col className='left-column-data'>
                            <Titulo 
                                handleTitle={this.updateTitle}
                                handleDescription={this.updateDescription}
                                titulo={this.state.titulo}
                            />
                            <Questions 
                                questions={this.state.questions} 
                                handleChange={this.updateQuestion} 
                                handleQuestionType={this.updateQuestionType}
                                handleMultiplesOptions={this.updateMultiplesOptions}
                                handleImageOptions={this.updateImageOptions}
                            />
                        </Col>
                        <Col className='right-column-builder'>
                            <Row>
                                <Col>
                                    <QuestionGenerator handleButton={this.addQuestion} />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="contenedorButtonGuardar">
                                <Button className="buttonSelector buttonGuardar" 
                                    variant="secondary"
                                    onClick={this.managePoll}
                                >
                                    Guardar encuesta
                                </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withRouter(NuevaEncuesta);