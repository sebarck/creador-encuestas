const origin = process.env.REACT_APP_BACKEND_ORIGIN;

function getHeaders() {
  return {
    Accept: "application/x-www-form-urlencoded, application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": origin,
    Authorization: localStorage.getItem("token"),
  };
}

export const crearUsuario = (body,callbackResponse, callbackData, callbackCatch) => {
    const url = process.env.REACT_APP_BACKEND_URI
    const myInit = {
        method: 'POST',
        headers: getHeaders(),
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(body)
    };

    fetch(url+'/usuario',myInit)
        .then(response => response.json())
        .then(data => callbackData(data))
        .catch(e => callbackCatch(e))    
}

export const eliminarUsuario = (id, callbackData, callbackCatch) => {
  const url = process.env.REACT_APP_BACKEND_URI;
  const myInit = {
    method: "DELETE",
    headers: getHeaders(),
    mode: "cors",
    cache: "default",
  };
};

export const obtenerTodosUsuarios = (callbackData, callbackCatch) => {
    const url = process.env.REACT_APP_BACKEND_URI
        const myInit = {
        method: 'GET',
        headers: getHeaders(),
        mode: 'cors',
        cache: 'default',
    };

    fetch(url+'/usuario',myInit)
        .then(response => response.json())
        .then(data => callbackData(data))
        .catch(e => callbackCatch(e))    
}
