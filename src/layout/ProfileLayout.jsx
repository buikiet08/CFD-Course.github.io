import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import {storage} from '../firebase/firebase'
import { ref, uploadBytes } from '@firebase/storage'
import { usePage } from '../hooks/usePage'
import { v4 } from 'uuid'

function ProfileLayout() {
    const {user} = usePage()
    const [imageUpload,setImageUpload] = useState(null)
    const uploadImage = () => {
        if(!imageUpload) return
        console.log(imageUpload)
        const imageRef = ref(storage, (`/images/${imageUpload.name}`))
        uploadBytes(imageRef, uploadImage).then(() => {
            alert('Upload hình ảnh thành công')
        })
    }
    return (
        <main className="profile" id="main">
            <section>
                <div className="top-info">
                    <div className="avatar">
                        {/* <span class="text">H</span> */}
                        <img src={user.avatar || 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png?w=360'} alt="" />
                        <div className="camera" />
                    </div>
                    <input type='file' onChange={e => {setImageUpload(e.target.files[0])}} />
                    <button onClick={uploadImage} type='submit'>Upload image</button>
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