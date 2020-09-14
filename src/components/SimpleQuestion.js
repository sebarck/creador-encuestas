import React from 'react'

export function SimpleQuestion() {
    return (
        <div className="input-group mb-6">
            <div className="col-md-6">  
                <input type="text" disabled className="smallInput" placeholder="Máximo 150 palabras" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
        </div>
    )
    
}
