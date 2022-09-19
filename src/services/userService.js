import Api from "../config/api"

const userService = {
    updateInfo(data) {
        return Api.post('/user/update', { data })
    },
    getInfo() {
        const token = localStorage.getItem('token');
        if (token) {
            token = JSON.parse(token)
            return Api.get('/user/get-info', {
                headers: {
                    Authrization: `Bearer ${token}`
                }
            })
        }
    }
}

export default userService