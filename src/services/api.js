import axios from "axios";
const Api = axios.create({
    baseURL:'http://cfd-reactjs.herokuapp.com'
})

export default Api