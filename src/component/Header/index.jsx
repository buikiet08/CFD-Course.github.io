import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { COURSE, HOME, PROFILE_PATH } from '../../config/path'
import { usePage } from '../../hooks/usePage'

function Header() {
    const navigate = useNavigate()
    const [openMenu, setOpenMenu] = useState(false)
    const { setIsPopup,setIsOpenModal,user,setUser } = usePage()
    const handleLogin = (e) => {
        e.preventDefault()
        setIsOpenModal(true)
    }

    const handleRegister = (e) => {
        e.preventDefault()
        setIsPopup(true)
    }

    const onLogout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setUser(null)
        navigate('/')
    }


    // redux
    const state = useSelector(store => store)
    const dispatch = useDispatch()
    console.log(state)
    const onIncrease = () => {
        dispatch({type: 'incremented',})
    }
    const onDecremented = () => {
        dispatch({type: 'decremented',})
    }
    const onIncremented5 = () => {
        dispatch({type: 'incremented5', payload:5})
    }
    return (
        <>
            <header id="header">
                {/* <p>{state.count}</p>
                <button onClick={onIncrease}>increase</button>
                <button onClick={onDecremented}>decremented</button>
                <button onClick={onIncremented5}>X5</button>
                <button onClick={() => dispatch({type: 'incremented5', payload:10})}>X10</button>
                <button onClick={() => dispatch({type: 'incremented5', payload:100})}>X100</button>
                <button onClick={() => dispatch({type: 'login', payload:true})}>LOGIN</button>
                <button onClick={() => dispatch({type: 'logout', payload:false})}>LOGOUT</button> */}



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
                                <a href="login.html" className="btn main btn-open-login" onClick={handleRegister}>Đăng ký</a>
                            </div>
                        )}

                    </div>
                </div>
            </header>
            <nav className="nav" style={{ transform: `translateX(${openMenu ? '0' : '-100%'})`, position: 'fixed', top: 60, boxShadow: '2px 0 4px rgba(0,0,0,0.1)' }}>
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