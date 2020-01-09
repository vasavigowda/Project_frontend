import axios from 'axios'

export const signup = regUser => {
const url = "http://localhost:4000/"

return axios
.post('Signup', {
Firstname: regUser.Firstname,
email: regUser.email,
password: regUser.password,
url
})
.then(res => {
console.log(res)
})
}

