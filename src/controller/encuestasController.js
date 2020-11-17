const origin = process.env.REACT_APP_BACKEND_ORIGIN
    const myHeaders = new Headers({
        'Accept':'application/x-www-form-urlencoded, application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': origin,
        'Authorization': localStorage.getItem('token')
    })


export const generarEncuesta = (body,callbackResponse, callbackData, callbackCatch) => {
    const url = process.env.REACT_APP_BACKEND_URI
    const myInit = {
        method: 'POST',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(body)
    };

    fetch(url+'/encuestas',myInit)
        .then(response => response.json())
        .then(data => callbackData(data))
        .catch(e => callbackCatch(e))    
}

export const actualizarEncuesta = (id, body, callbackResponse, callbackData, callbackCatch) => {
    const url = process.env.REACT_APP_BACKEND_URI
    const myInit = {
        method: 'PUT',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(body)
    };

    fetch(url+'/encuestas/'+id,myInit)
        .then(response => response.json())
        .then(data => callbackData(data))
        .catch(e => callbackCatch(e))    
}

export const obtenerTodasEncuestas = (callbackData, callbackCatch) => {
    const url = process.env.REACT_APP_BACKEND_URI
        const myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
    };

    fetch(url+'/encuestas',myInit)
        .then(response => response.json())
        .then(data => callbackData(data))
        .catch(e => callbackCatch(e))    
}

export const obtenerEncuestaById = (id, callbackData, callbackCatch) => {
    const url = process.env.REACT_APP_BACKEND_URI
        const myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
    };

    fetch(url+'/encuestas/' + id,myInit)
        .then(response => response.json())
        .then(data => callbackData(data))
        .catch(e => callbackCatch(e))    
}


