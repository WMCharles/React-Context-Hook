import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

export default function LoginPage() {
  let {loginUser} = useContext(AuthContext)
  return (
    <div>
        <form onSubmit={loginUser}>
            <input type="text" name='username' placeholder='Enter username' />
            <input type="password" name="password" id=""  placeholder='Enter password'/>
            <input type="submit"/>
        </form>
    </div>
  )
}
