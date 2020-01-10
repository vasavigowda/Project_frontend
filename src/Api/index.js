import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000',
})

export const register = payload => api.post('/signup', payload)
export const login = payload => api.post('/signin', payload)
export const appoit =payload => api.post('/appt', payload) 
export const contact =payload => api.post('/contact', payload) 

const apis = {
    register,
    login,
    appoit,
    contact
}

export default apis
