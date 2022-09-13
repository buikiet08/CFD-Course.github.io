import React from 'react'

function CourseItem({image,name,description,avatar,user}) {
    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <a className="cover" href="#">
                    <img src={`${image}`} alt="" />
                </a>
                <div className="info">
                    <a className="name" href="#">
                        {name}
                    </a>
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