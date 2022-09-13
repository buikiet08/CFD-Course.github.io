import React,{useState} from 'react'
import Button from '../Button'
import './style.css'

function Form() {
    const [form,setForm] = useState({
        username:'',
        password:'',
    })

    const [error,setError] = useState({})

    const onClick = () => {
        console.log('click')
        let errorObj = {}
        if(!form.username) {
            errorObj.username = 'username không được rỗng'
        }

        if(!form.password) {
            errorObj.password = 'password không được rỗng'
        }
        console.log('errorObj', errorObj)

        if(Object.keys(errorObj).length === 0) {
            console.log('thành công')
        }

        setError(errorObj)
    }
    console.log(error)
  return (
    <div className="form-container">
        <label>
            <span>Username:</span>
            <input value={form.username} onChange={(e) => setForm({...form, username: e.target.value})} />
        </label>
        { error.username && <p className="error">{error.username}</p>}
        <label>
            <span>Password:</span>
            <input type="password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} />
        </label>
        { error.password && <p className="error">{error.password}</p>}
        <Button onClick={onClick}>Register</Button>
    </div>
  )
}

export default Form