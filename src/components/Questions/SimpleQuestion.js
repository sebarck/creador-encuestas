import React from 'react'

export function SimpleQuestion() {
    return (
        <div>
            <div className="col-md-9">  
                <input type="text" disabled className="smallInput" placeholder="Máximo 150 palabras" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
        </div>
    )
    
}
