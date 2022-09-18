import Api from "../config/api"

const userService = {
    updateInfo (data) {
        return Api.post('/user/update', {data})
    }
}

export default userService