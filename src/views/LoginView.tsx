import React from 'react'
import LoginForm from '../Authentication/LoginForm'

const LoginView = () => {
    return <div style={{
        minHeight: '100vh',
        minWidth: 120,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <div style={{minWidth: 320}}>
            <LoginForm />
        </div>
    </div>
}

export default LoginView