import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useForm } from "react-hook-form"
import { useAuth } from '../../context/AuthContext'
import { usePage } from '../../hooks/usePage'
import loginService from '../../services/loginService'
import userService from '../../services/userService'

function RegisterModal() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { isPopup, setIsPopup, setUser } = usePage()
    const [isFetching, setIsFetching] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const onSubmit = async (data) => {
        console.log(data)
        try {
            setIsFetching(true)
            const result = await loginService.register(data)
            if (result.data) {
                localStorage.setItem('token', JSON.stringify(result.data))
                const user = await userService.getInfo()
                if (user.data) {
                    localStorage.setItem('user', JSON.stringify(user.data))
                    console.log('vào')
                }
            }
            setIsPopup(false)
            setErrorMessage('')
        }
        catch (error) {
            setErrorMessage(error.message)
        }
        finally {
            setIsFetching(false)
        }
    }
    return (
        ReactDOM.createPortal(
            <div className="popup-form popup-login" style={{ display: isPopup ? 'flex' : 'none' }}>
                <div className="wrap">
                    {/* login-form */}
                    <form className="ct_login form" style={{ display: 'block' }} onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="title">ĐĂNG KÝ</h2>
                        <div>
                            {errorMessage && <p style={{ fontSize: 12, color: 'red' }}>{errorMessage}</p>}
                            <label>
                                <p>Họ và tên<span>*</span></p>
                                <input type="text" name='name' placeholder="Họ và tên bạn"
                                    {...register("name", { required: true })} />
                                {Object.keys(errors).length !== 0 &&
                                    <span style={{ fontSize: 12, color: 'red' }}>
                                        {errors.name?.type === 'required' && <p>Vui lòng nhập họ và tên</p>}
                                    </span>
                                }

                            </label>
                            <label>
                                <p>Email<span>*</span></p>
                                <input type="text" name='username' placeholder="Email của bạn"
                                    {...register('username', {
                                        required: true,
                                        pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                    })}
                                />
                                {Object.keys(errors).length !== 0 &&
                                    <span className={'text-xs text-[red] mt-[-9px] mb-2'}>
                                        {errors.username?.type === 'required' && <p>Vui lòng nhập email</p>}
                                        {errors.username?.type === 'pattern' && <p>Email không đúng địng dạng</p>}
                                    </span>
                                }
                            </label>
                            <label>
                                <p>Mật khẩu<span>*</span></p>
                                <input type="password" name='password' placeholder="Mật khẩu"
                                    {...register("password", { required: true, minLength: 6 })} />
                                {Object.keys(errors).length !== 0 &&
                                    <span style={{ fontSize: 12, color: 'red' }}>
                                        {errors.password?.type === 'required' && <p>Vui lòng nhập mật khẩu</p>}
                                        {errors.password?.type === 'minLength' && <p>Vui lòng nhập tối thiểu 6 ký tự</p>}
                                    </span>
                                }

                            </label>
                        </div>
                        <button className="btn rect main btn-login" style={{ border: 'none', outline: 'none' }}>đăng ký</button>
                    </form>
                    <div className="close" onClick={() => setIsPopup(false)}>
                        <img src="img/close-icon.png" alt="" />
                    </div>

                </div>
            </div>,
            document.body
        )
    )
}

export default RegisterModal