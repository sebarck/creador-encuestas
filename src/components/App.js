import React from 'react';
import { Container } from 'reactstrap';
import FormCreator from './FormCreator';

const App = () => {
    return (
        <div>
            <Container className="main-container">
                <FormCreator />
            </Container>
        </div>
    );
}

export default App;