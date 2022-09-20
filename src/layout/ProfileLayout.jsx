import React from 'react'
import { Outlet } from 'react-router-dom'
import { usePage } from '../hooks/usePage'

function ProfileLayout() {
    const {user} = usePage()
    return (
        <main className="profile" id="main">
            <section>
                <div className="top-info">
                    <div className="avatar">
                        {/* <span class="text">H</span> */}
                        <img src={user.avatar} alt="" />
                        <div className="camera" />
                    </div>
                    <div className="name">{user.name}</div>
                    <p className="des">Thành viên của team CFD1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <div className="tab-title">
                            <a href="#" className="active">Thông tin tài khoản</a>
                            <a href="#">Khóa học của bạn</a>
                            <a href="#">Dự án đã làm</a>
                            <a href="#">Lịch sử thanh toán</a>
                            <a href="#">Quản lý COIN của tôi</a>
                        </div>
                        <div className="tab-content">
                          <Outlet />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ProfileLayout