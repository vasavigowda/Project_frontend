import axios from 'axios'
import BrowserHistory from '../Components/Utils/BrowserHistory';

export function registerHandle(payload){
const options = {
url: 'http://localhost:4090/Signin',
method: 'POST',
data: payload
};

return function(dispatch)
{
    console.log(payload)
axios(options)
.then(response => {
    // if (response.data.msg === 'success') {
    //     alert("Message sent successfully.");
    // }
console.log(response);
sessionStorage.setItem('authentication', response.data.token)
BrowserHistory.push('/dashboard')
});
dispatch({type:'Login',payload:payload});
}
}



