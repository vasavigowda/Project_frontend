export function updateHandle(payload) {
    console.log(payload._id)
    const options = {
    url: "http://localhost:4090/reset/"+payload._id,
    method: 'PUT',
    data: payload
    };
    
    return function (dispatch) {
    axios(options)
    .then(response => {
    console.log(response.status);
    });
    dispatch({ type: 'REGISTER', payload: payload });
    }
    }