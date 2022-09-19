import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { COURSE, HOME, PROFILE_PATH } from '../../config/path'
import { useAuth } from '../../context/AuthContext'
import { usePage } from '../../hooks/usePage'

function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    const { user, onLogout } = useAuth()
    const { setIsOpenModal } = usePage()
    const handleLogin = (e) => {
        e.preventDefault()
        setIsOpenModal(true)
    }
    return (
        <>
            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger" onClick={() => setOpenMenu(!openMenu)}>
                        <div className="button">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="text">menu</span>
                    </div>
                    <div className="logo">
                        <Link to={HOME}>
                            <img src="img/logo.svg" alt="" />
                            <h1>CFD</h1>
                        </Link>
                    </div>
                    <div className="right">
                        {user ? (
                            <div className="have-login">
                                <div className="account">
                                    <a href="javascript:void" className="info">
                                        <div className="name">{user.name}</div>
                                        <div className="avatar">
                                            <img src={user.avatar} alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="hamberger">
                                </div>
                                <div className="sub">
                                    <a href="javascript:void">Khóa học của tôi</a>
                                    <Link to={PROFILE_PATH}>Thông tin tài khoản</Link>
                                    <a href="javascript:void" onClick={onLogout}>Đăng xuất</a>
                                </div>
                            </div>
                        ) : (
                            <div className="not-login bg-none">
                                <a href="javascript:void" className="btn-register" onClick={handleLogin}>Đăng nhập</a>
                                <a href="login.html" className="btn main btn-open-login">Đăng ký</a>
                            </div>
                        )}

                    </div>
                </div>
            </header>
            <nav className="nav" style={{ transform: `translateX(${openMenu ? '0' : '-100%'})`, position: 'fixed', top: 70, boxShadow: '2px 0 4px rgba(0,0,0,0.1)' }}>
                <ul>
                    <li className="li_login">
                        <a href="javascript:void">Đăng nhập</a>
                        <a href="javascript:void">Đăng ký</a>
                    </li>
                    <li className="active">
                        <Link to={HOME}>Trang chủ</Link>
                    </li>
                    <li>
                        <Link to='/'>CFD Team</Link>
                    </li>
                    <li>
                        <Link to={COURSE}>Khóa Học</Link>
                    </li>
                    <li>
                        <a href="javascript:void">Dự Án</a>
                    </li>
                    <li>
                        <a href="javascript:void">Liên hệ</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header