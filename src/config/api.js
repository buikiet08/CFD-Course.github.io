import axios from "axios";
const Api = axios.create({
    baseURL:'http://cfd-reactjs.herokuapp.com'
})

Api.interceptors.response.use((res) => {
    return res.data
}, (res) => {
    throw res.response.data
})
export default Api