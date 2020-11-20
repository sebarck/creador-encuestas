import React, { Component } from 'react';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/simpleQuestion.css'
import DrawerMenu from './Drawer/DrawerMenu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NuevaEncuesta } from './NuevaEncuesta';
import SurveyList from './Survey/SurveyList';
import Login from './Login';
import Usuarios from './Usuarios';

class App extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <BrowserRouter>
                    <DrawerMenu />
                    <Switch>
                        <Route path="/encuesta/:id" component={NuevaEncuesta} />
                        <Route exact path="/encuestas" component={SurveyList} />
                        <Route exact path="/usuarios" component={Usuarios} />
                        <Route exact path="/" component={Login} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
