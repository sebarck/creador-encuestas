import React from 'react'

export function Questions (encuenta) {
    return (
        <div className="nput-group mb-12" >
            <div className="input-group mb-6" >
                <div className="col-md-9">
                    <textarea className="tittleQuestion" onChange={encuenta._handleInput} placeholder="Escribi tu pregunta" aria-label="Username" aria-describedby="basic-addon1">
                        {encuenta.titulo}
                    </textarea>
                </div>    
            </div>
            <div className="input-group mb-6">
                <div className="col-md-6">  
                    <input type="text" disabled className="smallInput" placeholder="Máximo 150 palabras" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="col-md-6">  
                    <button type="button" onClick={encuenta._agregarPregunta} className="btn btn-primary">Generar pregunta</button>
                </div>
            </div>
        </div>
    )
}