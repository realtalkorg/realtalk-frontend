import React from 'react'
import LoginCard from '../features/auth/components/LoginCard.jsx';
import Footer from '../features/auth/components/Footer.jsx';
import './LoginPage.css'

const LoginPage = () => {
    return (
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    <LoginCard/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default LoginPage