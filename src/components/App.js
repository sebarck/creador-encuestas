import React from 'react';
import { Container } from 'reactstrap';
import FormCreator from './FormCreator';
import {SimpleQuestion} from './SimpleQuestion'

const App = () => {
    return (
        <div>
            <Container className="main-container">
                <FormCreator />
            </Container>
            <Container className="main-container">
                <SimpleQuestion />
            </Container>
        </div>
    );
}

export default App;