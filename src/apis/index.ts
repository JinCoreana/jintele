import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_HOST}/${process.env.REACT_APP_API_VERSION}`,
    params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: 'en-US'
    }
})

export default axiosInstance;