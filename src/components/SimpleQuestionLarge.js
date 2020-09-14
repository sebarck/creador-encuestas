import React from 'react'

export function SimpleQuestionLarge() {
    return (
        <div className="input-group mb-6">
            <div className="col-md-6">  
                <input type="text" disabled className="largeInput" placeholder="Máximo 500 palabras" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
        </div>
    )
    
}
