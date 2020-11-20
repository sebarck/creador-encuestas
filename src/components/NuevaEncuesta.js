import React, { Component } from 'react';
import { Questions } from './Questions'
import { QuestionGenerator } from './QuestionGenerator'
import { Container, Col, Row, Button } from 'reactstrap';
import { Titulo } from './Titulo';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/simpleQuestion.css'

import  { encuestasToBodyApi, bodyApiToEncuesta }   from '../helpers/helper' 
import  { generarEncuesta, actualizarEncuesta, obtenerEncuestaById} from '../controller/encuestasController'
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
            questions: [],
        }
    }

    componentDidMount = () => {
        const id = this.props.match.params.id
        if (id !== '0' && id) {
            obtenerEncuestaById(id,
                data => {
                    var convertBodyApiToState = bodyApiToEncuesta(data)
                    this.setState({titulo: convertBodyApiToState.titulo, questions: convertBodyApiToState.questions})
                },
                (e) => console.log(e) 
            )
        }
        else {
            let emptyTitle = {titulo: '', descripcion: ''}
            let emptyQuestions = []
            this.setState({titulo: emptyTitle, questions: emptyQuestions})
        }
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
        componente.multiplesOptions = []
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
        if (index >= questions.length) {
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
        let convertStateToBodyAPI = encuestasToBodyApi(this.state)      

        if (this.props.match.params.id === '0') { //Se genera una nueva encuesta controlando que nos se envía el parámetro
            let usuario = JSON.parse(sessionStorage.getItem('usuario'))
            convertStateToBodyAPI.usuario_id = usuario._id
            console.log(convertStateToBodyAPI)
            generarEncuesta(
                convertStateToBodyAPI,
                response => console.log(response.json()),
                data => console.log(data),
                (e) => console.log(e) 
            )        
        }
        else {
            actualizarEncuesta(
                this.props.match.params.id,
                convertStateToBodyAPI,
                response => console.log(response.json()),
                data => console.log(data),
                (e) => console.log(e) 
            )
        }
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