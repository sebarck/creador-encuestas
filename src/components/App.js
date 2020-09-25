import React, { Component } from 'react';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/simpleQuestion.css'
import DrawerMenu from './Drawer/DrawerMenu';

class App extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <DrawerMenu />
            </div>
        )
    }
}

export default App;
