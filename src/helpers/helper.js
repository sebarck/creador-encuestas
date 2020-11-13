const encuestas = (encuesta) => {
        
    let encuestaBody = {
        poll_title:  encuesta.titulo.titulo,
        state: "true",
        description: encuesta.titulo.descripcion,
        questions: {
            total: Object.values(encuesta.questions).length,
            values: []
        }
    }
    Object.values(encuesta.questions).forEach((question,index) => {
        let questionBody = {
            q_type: question.tipoPregunta,
            value: question.titulo,
            mandatory: Boolean(true)
        }
        encuestaBody.questions.values.push(questionBody)
    })
    return encuestaBody
}

export default encuestas;