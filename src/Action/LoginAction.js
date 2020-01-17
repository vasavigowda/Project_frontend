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
console.log(response);
BrowserHistory.push('/dashboard')

});
dispatch({type:'Login',payload:payload});
}
}



