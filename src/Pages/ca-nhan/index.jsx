import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { usePage } from '../../hooks/usePage'

function Profile() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [data, setData] = useState({})
    const { user } = usePage()
    const [isFetching, setIsFetching] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const onSubmit = async () => {
        setIsFetching(true)
        try {
            const updateInfo = await userService.updateInfo(data)
            if (updateInfo.data) {
                localStorage.setItem('token', JSON.stringify(updateInfo.data))
                localStorage.setItem('user', JSON.stringify(updateInfo.data))
            }
        }
        catch(error) {
            setErrorMessage(error.message)
        }
        finally {
            setIsFetching(false)
        }
        console.log(data)
    }
    console.log(user)
    return (
        <form className="tab1" onSubmit={handleSubmit(onSubmit)}>
            <label>
                <p>Họ và tên<span>*</span></p>
                <input onChange={(e) => data.name = e.target.value} type="text" placeholder={user.name} />
            </label>
            <label>
                <p>Số điện thoại<span>*</span></p>
                <input type="text" onChange={(e) => data.phone = e.target.value} placeholder="0949******" />
            </label>
            <label>
                <p>Email<span>*</span></p>
                <input defaultValue={user.email} disabled type="text" />
            </label>
            <label>
                <p>Facebook<span>*</span></p>
                <input type="text" placeholder="Facebook url" />
            </label>
            <label>
                <p>Skype<span>*</span></p>
                <input type="text" placeholder="Skype url" />
            </label>
            <button style={{ border: 'none', outline: 'none' }} className="btn main rect">LƯU LẠI</button>
        </form>
    )
}

export default Profile