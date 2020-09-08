import React, {Component} from 'react';
import { Container } from 'reactstrap';
import FormCreator from './FormCreator';
import { SimpleQuestion } from './SimpleQuestion'
import { ViewSimpleQuestion } from './ViewSimpleQuestion';


class App extends Component {
    state = {
        pregunta: ""
    }

    _addNewQuestion = (pregunta) => {
        this.setState({pregunta})
    }

    render () {
        return (
            <div>
                <Container className="main-container">
                    <FormCreator />
                </Container>
                <Container className="main-container">                   
                    <SimpleQuestion addQuestion={this._addNewQuestion}/>
                    <ViewSimpleQuestion pregunta={this.state.pregunta} />
                </Container>
            </div>
        );
    }
}

export default App;