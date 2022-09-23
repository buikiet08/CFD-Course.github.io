import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { usePage } from '../../hooks/usePage'
import userService from '../../services/userService';

function Profile() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [form, setForm] = useState({})
    const { user,setUser } = usePage()
    const [isFetching, setIsFetching] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const onSubmit = async (data) => {
        setIsFetching(true)
        try {
            const updateInfo = await userService.updateInfo(data)
            console.log(updateInfo)
            if (updateInfo) {
                const user = await userService.getInfo()
                localStorage.getItem('user', JSON.stringify(user.data))
                setUser(user.data)
            }
        }
        catch (error) {
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
                <input onChange={(e) => form.name = e.target.value} name='name' defaultValue={user.name} type="text" placeholder={user.name} {...register('name', { required: true })} />
            </label>
            <label>
                <p>Số điện thoại<span>*</span></p>
                <input type="text" onChange={(e) => form.phone = e.target.value} name='phone' defaultValue={user.phone} placeholder="0949******" {...register('phone', { required: true })} />
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
            <button disabled={isFetching ? true : false} style={{ border: 'none', outline: 'none' }} className="btn main rect">LƯU LẠI</button>
        </form>
    )
}

export default Profile