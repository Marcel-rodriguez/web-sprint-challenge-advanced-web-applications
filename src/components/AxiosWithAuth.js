import axios from 'axios'

const AxiosWithAuth = () => {
    const token = localStorage.getItem('token')
    return axios.create({
        headers: {
            'authorization': token
        }, baseURL: 'http://localhost:5000/api'
    })
}
export default AxiosWithAuth