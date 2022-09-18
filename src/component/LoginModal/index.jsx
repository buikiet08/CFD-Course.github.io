import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useForm } from "react-hook-form"
import { useAuth } from '../../context/AuthContext'
import { usePage } from '../../hooks/usePage'
import loginService from '../../services/loginService'

function LoginModal() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {onLogin} = useAuth()
    const {isOpenModal,setIsOpenModal} = usePage()
    const [form,setForm] = useState({})
    const onSubmit = async () => {
        const result = await loginService.login(form)
        onLogin()
    }
    return (
        ReactDOM.createPortal(
            <div className="popup-form popup-login" style={{display : isOpenModal ? 'flex' : 'none'}}>
                <div className="wrap">
                    {/* login-form */}
                    <form className="ct_login" style={{ display: 'block' }} onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="title">Đăng nhập</h2>
                        <input {...register("email", { required: true, pattern :/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} 
                        type="text" placeholder="Email / Số điện thoại" 
                        onChange={(e) => form.username = e.target.value} />
                        {errors.email && <p style={{fontSize:10, color:'red'}}>Vui lòng nhập email</p>}
                        <input 
                        {...register("password", { required: true, minLength: 6 })}
                        type="password" 
                        placeholder="Mật khẩu" 
                        onChange={(e) => form.password = e.target.value} />
                        {errors.password && <p style={{fontSize:10, color:'red'}}>Vui lòng nhập password</p>}
                        <div className="remember">
                            <label className="btn-remember">
                                <div>
                                    <input type="checkbox" />
                                </div>
                                <p>Nhớ mật khẩu</p>
                            </label>
                            <a href="#" className="forget">Quên mật khẩu?</a>
                        </div>
                        <button className="btn rect main btn-login">đăng nhập</button>
                    </form>
                    <div className="close" onClick={() => setIsOpenModal(false)}>
                        <img src="img/close-icon.png" alt="" />
                    </div>

                </div>
            </div>,
            document.body
        )
    )
}

export default LoginModal