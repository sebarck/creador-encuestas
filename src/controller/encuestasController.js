
const generarEncuesta = (body,callbackResponse, callbackData, callbackCatch) => {
    const url = process.env.REACT_APP_API_URL

    console.log("url",process.env.REACT_APP_API_URL)
    const myHeaders = new Headers({
        'Accept':'application/x-www-form-urlencoded, application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': process.env.REACT_APP_ORIGIN
    })
    const myInit = {
        method: 'POST',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(body)
    };

    fetch(url,myInit)
        .then(response => response.json())
        .then(data => callbackData(data))
        .catch(e => callbackCatch(e))    
}

export default generarEncuesta