import axios from 'axios'
import BrowserHistory from '../Components/Utils/BrowserHistory';

export function registerHandle(payload) {
  const options = {
    url: 'http://localhost:4090/Signin',
    method: 'POST',
    data: payload
  };
  return function (dispatch) {
    axios(options)
      .then(response => {
        if (response.data === "User does not exist") {
          alert("User does not exist")
        }
        else if (response.data === "wrong password") {
          alert("Wrong password")
        }
        else {
          sessionStorage.setItem('authentication', response.data.token)
          BrowserHistory.push('/dashboard')
        }
      })
      .catch(error => {
        window.alert(error.response.data.message)
      })

  }
}
//     console.log(payload)
// axios(options)
// .then(response => {

// console.log(response);
// sessionStorage.setItem('authentication', response.data.token)
// BrowserHistory.push('/dashboard')
// });
// dispatch({type:'Login',payload:payload});
// }
// }


