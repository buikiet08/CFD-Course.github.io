import Api from "../config/api";

const courseService = {
    getList() {
       return Api.get('/elearning/v4/courses')
    },
    getDetail(id) {
       return Api.get(`/elearning/v4/courses/${id}`)
    }
}

export default courseService