import Api from "../config/api";

const loginService = {
    login (data) {
        return Api.post('/login', data)
    },
    register (data) {
        return Api.post('/register', data)
    },
    refreshToken (data) {
        return Api.post('/refresh-token', data)
    }
}

export default loginService;