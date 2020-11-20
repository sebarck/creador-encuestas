import React, { Component } from 'react';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/simpleQuestion.css'
import DrawerMenu from './Drawer/DrawerMenu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NuevaEncuesta } from './NuevaEncuesta';
import SurveyList from './Survey/SurveyList';
import Login from './Login';
import MiPerfil from './MiPerfil';

class App extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <BrowserRouter>
                    <DrawerMenu />
                    <Switch>
                        <Route path="/encuesta/:id" component={NuevaEncuesta} />
                        <Route exact path="/encuestas" component={SurveyList} />
                        <Route exact path="/" component={Login} />
                        <Route exact path="/MiPerfil" component={MiPerfil} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
