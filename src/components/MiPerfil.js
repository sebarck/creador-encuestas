import React, { Component } from 'react';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/simpleQuestion.css'
//Agrego el logging condicional
import ConditionalLogging from './ConditionalLogging'
import Forms from './Forms'



export class MiPerfil extends Component {
    render() {
        return (
            <div className='container-fluid'>

                <Forms />
                <ConditionalLogging/>


            </div>
        )
    }
}
export default MiPerfil;
