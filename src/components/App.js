import React, {Component} from 'react';
import { Container } from 'reactstrap';
import FormCreator from './FormCreator';
import { View} from './View'

class App extends Component {
    
    render () {
        return (
            <div>
                <Container className="main-container">
                    <FormCreator />
                </Container>
                <Container className="main-container">                   
                   <View />
                </Container>
            </div>
        );
    }
}

export default App;