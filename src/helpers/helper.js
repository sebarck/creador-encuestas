export const encuestasToBodyApi = (encuesta) => {
        
    let bodyApi = {
        poll_title:  encuesta.titulo.titulo,
        poll_state: "true",
        description: encuesta.titulo.descripcion,
        questions: {
            total: Object.values(encuesta.questions).length,
            values: []
        }
    }
    Object.values(encuesta.questions).forEach((question,index) => {
        let questionBody = {
            q_type: question.tipoPregunta.toString(),
            value: question.titulo,
            mandatory: Boolean(true),
            options: question.multiplesOptions
        }
        bodyApi.questions.values.push(questionBody)
    })
    return bodyApi
}

export const bodyApiToEncuesta = (bodyApi) => {
    let encuesta = {
        titulo: {
            titulo: bodyApi.encuesta.poll_title,
            descripcion: bodyApi.encuesta.description
        },
        questions: []
    }

    Object.values(bodyApi.encuesta.questions.values).forEach((question,index) => {
        let questionBody = {
            tipoPregunta: parseInt(question.q_type),
            titulo: question.value,
            multiplesOptions: question.options
        }
        encuesta.questions.push(questionBody)
    })
    return encuesta

}