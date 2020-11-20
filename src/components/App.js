import React, {Component} from 'react';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/simpleQuestion.css'
import DrawerMenu from './Drawer/DrawerMenu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NuevaEncuesta } from './NuevaEncuesta';
import SurveyList from './Survey/SurveyList';
import Login from './Login';

import Usuarios from './Usuarios';
import MiPerfil from './MiPerfil';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loginPage: true
        };
      } 
    
    showingDrawerFalse = () => {
      this.setState({loginPage:false});
    }
    
    showingDrawerTrue =() => {
        this.setState({loginPage:true});
    }
    render() {
        return (
            <div className='container-fluid'>
                <BrowserRouter>
                    {(this.state.loginPage) && <DrawerMenu />}
                    <Switch>
                        <Route path="/encuesta/:id" component={NuevaEncuesta} />
                        <Route exact path="/encuestas" component={SurveyList} />

                        <Route exact path="/usuarios" component={Usuarios} />
                        <Route exact path="/" render={(props) => <Login isDrawerVisibleFalse={this.showingDrawerFalse} isDrawerVisibleTrue={this.showingDrawerTrue}/>} />
                        <Route exact path="/MiPerfil" component={MiPerfil} />

                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
