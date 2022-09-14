import React from 'react'
import { generatePath, Link } from 'react-router-dom'
import { COURSE_DETAIL } from '../../config/path'

function CourseItem({id,image,name,description,avatar,user, slug}) {
    const path = generatePath(COURSE_DETAIL, {slug, id})
    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <Link className="cover" to={path}>
                    <img src={`${image}`} alt="" />
                </Link>
                <div className="info">
                    <Link className="name" to={path}>
                        {name}
                    </Link>
                    <p className="des">
                        {description}
                    </p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar" style={{height:36}}>
                            <img src={`${avatar}`} alt="" />
                        </div>
                        <div className="name">{user}</div>
                    </div>
                    <div className="register-btn">Đăng Ký</div>
                </div>
            </div>
        </div>
    )
}

export default CourseItem