import React, { Component } from 'react'
import Radio from '@material-ui/core/Radio';

export class OptionQuestion extends Component {
    selectedValue = 1
    render () {
        return (
            <div>
                <p>Please select your gender:</p>
                <input type="radio" id="male" name="gender" value="male" />
                <label for="male">Male</label><br/>
                <input type="radio" id="female" name="gender" value="female" />
                <label for="female">Female</label><br/>
                <input type="radio" id="other" name="gender" value="other" />
                <label for="other">Other</label>
                
            </div>
        )
            
            
    }
}