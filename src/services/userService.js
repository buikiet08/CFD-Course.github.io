import Api from "../config/api"

const userService = {
    updateInfo(data) {
        let token = localStorage.getItem('token');
        token = JSON.parse(token)
        if (token) {
            return Api.post('/user/update', data, {
                headers: {
                    Authorization: `Bearer ${token.accessToken}`
                }
            })
        }
    },
    getInfo() {
        let token = localStorage.getItem('token');
        token = JSON.parse(token)
        if (token) {
            return Api.get('/user/get-info', {
                headers: {
                    Authorization: `Bearer ${token.accessToken}`
                }
            })
        }
    }
}

export default userService