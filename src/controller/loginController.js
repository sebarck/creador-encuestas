const origin = process.env.REACT_APP_BACKEND_ORIGIN

const myHeaders = new Headers({
    'Accept':'application/x-www-form-urlencoded',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': origin
})

export const login = (body, callbackData, callbackCatch) => {
    const URL = process.env.REACT_APP_BACKEND_URI
    
    const myInit = {
        method: 'POST',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
        body: body
    };

    fetch(URL + '/login',myInit)
        .then(response => response.json())
        .then(data => callbackData(data))
        .catch(e => callbackCatch(e))    
}
