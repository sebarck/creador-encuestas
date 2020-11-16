const origin = process.env.REACT_APP_ORIGIN

const myHeaders = new Headers({
    'Accept':'application/x-www-form-urlencoded',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': origin
})

export const login = (body, callbackData, callbackCatch) => {
    console.log(origin)
    console.log(body)
    const URL = process.env.REACT_APP_API_URL
    
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
