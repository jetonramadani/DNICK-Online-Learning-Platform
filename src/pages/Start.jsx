import React, { useEffect, useState } from 'react'
import Login from '../compoents/Auth/Login'
import Register from '../compoents/Auth/Register'
import DefaultLayout from '../compoents/default_layout/DefaultLayout'
import { useNavigate } from 'react-router-dom'

const Start = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const isLoggedIn = localStorage.getItem("logged_in");
        if (isLoggedIn === "true") {
            navigate("/", { replace: true });
        }
    }, [navigate])

    return (
        <DefaultLayout>
            {isLogin ? <Login /> : <Register />}
            {isLogin ? <div className='text-muted w-50 mx-auto'>New member <span className='text-primary' style={{ cursor: "pointer" }} onClick={() => setIsLogin(false)}>register</span></div>
                : <div className='text-muted w-50 mx-auto'>Already a member <span className='text-primary' style={{ cursor: "pointer" }} onClick={() => setIsLogin(true)}>login</span></div>}
        </DefaultLayout>
    )
}

export default Start