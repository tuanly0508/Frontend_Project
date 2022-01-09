import axios from "axios";

export const AuthAxios = axios.create({
    timeout: 6000
})

const accessToken = localStorage.getItem('accessToken') as string
AuthAxios.defaults.headers.common['authorization'] = accessToken

AuthAxios.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401) {
            alert('Please login again')
            window.location.href = '/register';
        } 
        if (error.response.status === 403) {
            alert('Please login again')
            window.location.href = '/register';
        } 
    }
);