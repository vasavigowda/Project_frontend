import axios from 'axios'
import BrowserHistory from '../Components/Utils/BrowserHistory';

export function registerHandle(payload){
const options = {
url: 'http://localhost:4090/Signup',
method: 'POST',

data: payload
};

return function(dispatch)
{
axios(options)
.then(response => {
console.log(response.status);
BrowserHistory.push('/dashboard')
});
dispatch({type:'REGISTER',payload:payload});
}
}