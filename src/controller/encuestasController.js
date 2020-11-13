

exports.generarEncuesta = (body,callbackResponse, callbackData, callbackCatch) => {
    const url='http://localhost:8080/api/v1/encuestas'
        const myHeaders = new Headers({
            'Accept':'application/x-www-form-urlencoded, application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "http://localhost:3000"
        })
        const myInit = {
            method: 'POST',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(body)
        };

        fetch(url,myInit)
            .then(response => callbackResponse(response))
            .then(data => callbackData(data))
            .catch(e => callbackCatch(e))    
}

