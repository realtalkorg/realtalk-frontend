
const LoginCard = () => {
    return (
        <div className="glass-effect rounded-2xl shadow-2xl p-8 fade-in">

            {/*Header*/}
            <div className="text-center mb-8">
                <div
                    className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">💬</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Chào mừng trở lại!</h1>
                <p className="text-gray-600">Đăng nhập để tiếp tục trò chuyện</p>
            </div>

            {/*Login Form*/}
            <form id="login-form" className="space-y-6 slide-up">

                {/*Email Input*/}
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                    </label>
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Nhập email của bạn"
                            className="input-focus w-full px-4 py-3 border border-gray-300 rounded-xl transition-all duration-200 pl-12"
                            required
                        />
                        <span className="absolute left-4 top-3.5 text-gray-400">📧</span>
                    </div>
                </div>

                {/*Password Input*/}
                <div>
                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                        Mật khẩu
                    </label>
                    <div className="relative">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Nhập mật khẩu"
                            className="input-focus w-full px-4 py-3 border border-gray-300 rounded-xl transition-all duration-200 pl-12 pr-12"
                            required
                        />
                        <span className="absolute left-4 top-3.5 text-gray-400">🔒</span>
                        <button
                            type="button"
                            id="toggle-password"
                            className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            👁️
                        </button>
                    </div>
                </div>

                {/*Remember Me & Forgot Password*/}
                <div className="flex items-center justify-between">
                    <label className="flex items-center">
                        <input type="checkbox"
                               className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"/>
                        <span className="ml-2 text-sm text-gray-600">Ghi nhớ đăng nhập</span>
                    </label>
                    <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
                        Quên mật khẩu?
                    </a>
                </div>

                {/*Login Button*/}
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-3 px-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-800 transition-all duration-200 hover-lift shadow-lg"
                >
                    Đăng nhập
                </button>
            </form>

            {/*Divider Component*/}
            <div className="my-8">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-gray-500">Hoặc đăng nhập với</span>
                    </div>
                </div>
            </div>

            {/*OAuth2 Buttons*/}
            <div className="space-y-3">
                {/*Google OAuth*/}
                <button
                    type="button"
                    onClick="loginWithGoogle()"
                    className="oauth-button w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl bg-white hover:bg-gray-50 transition-all duration-200"
                >
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                        <path fill="#4285F4"
                              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853"
                              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05"
                              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335"
                              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="text-gray-700 font-medium">Tiếp tục với Google</span>
                </button>

                {/*Facebook OAuth*/}
                <button
                    type="button"
                    onClick="loginWithFacebook()"
                    className="oauth-button w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl bg-white hover:bg-gray-50 transition-all duration-200"
                >
                    <svg className="w-5 h-5 mr-3" fill="#1877F2" viewBox="0 0 24 24">
                        <path
                            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="text-gray-700 font-medium">Tiếp tục với Facebook</span>
                </button>

                {/*GitHub OAuth*/}
                <button
                    type="button"
                    onClick="loginWithGitHub()"
                    className="oauth-button w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl bg-white hover:bg-gray-50 transition-all duration-200"
                >
                    <svg className="w-5 h-5 mr-3" fill="#333" viewBox="0 0 24 24">
                        <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="text-gray-700 font-medium">Tiếp tục với GitHub</span>
                </button>
            </div>

            {/*Register Link Component*/}
            <div className="mt-8 text-center">
                <p className="text-gray-600">
                    Chưa có tài khoản?
                    <button
                        type="button"
                        onClick="navigateToRegister()"
                        className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
                    >
                        Đăng ký ngay
                    </button>
                </p>
            </div>
        </div>
    )
}

export default LoginCard;