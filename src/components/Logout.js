import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom/'
import AxiosWithAuth from './AxiosWithAuth';

const Logout = ({setIsLoggedIn}) => {
    const {push} = useHistory()

    useEffect(() => {
        AxiosWithAuth()
        .post('/logout')
        .then(() => {
            localStorage.removeItem('token')
            localStorage.removeItem('username')
            localStorage.removeItem('role')
            setIsLoggedIn(false)
            push('/')
        }).catch(err => console.error(err))
    }, [])        
    return(<div></div>);
}

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.