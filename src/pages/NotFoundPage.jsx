import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();

    // Parallax effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            document.body.style.backgroundPosition = `${moveX}px ${moveY}px`;
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Toast notification
    const showMessage = (message, type = 'info') => {
        const toast = document.createElement('div');
        toast.className = `fixed top-4 right-4 px-4 sm:px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300 text-sm sm:text-base ${
            type === 'success' ? 'bg-green-500 text-white' :
                type === 'error' ? 'bg-red-500 text-white' :
                    'bg-blue-500 text-white'
        }`;
        toast.textContent = message;

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.transform = 'translateX(0)';
            toast.style.opacity = '1';
        }, 100);

        setTimeout(() => {
            toast.style.transform = 'translateX(100%)';
            toast.style.opacity = '0';
            setTimeout(() => {
                if (document.body.contains(toast)) {
                    document.body.removeChild(toast);
                }
            }, 300);
        }, 3000);
    };

    // Navigation handlers
    const navigateToLogin = () => {
        showMessage('Đang chuyển đến trang đăng nhập...', 'info');
        setTimeout(() => {
            navigate('/login');
        }, 1000);
    };

    // const navigateToHome = () => {
    //     showMessage('Đang chuyển đến trang chủ...', 'info');
    //     navigate('/Real_Talk'); // Điều hướng đến ChatPage
    // };

    const navigateToSupport = () => {
        showMessage('Đang mở trang hỗ trợ...', 'info');
        // Thêm route /support vào router nếu cần
        navigate('/support');
    };

    const navigateToChat = () => {
        showMessage('Đang chuyển đến trang trò chuyện...', 'info');
        navigate('/Real_Talk');
    };

    const navigateToProfile = () => {
        showMessage('Đang chuyển đến trang hồ sơ...', 'info');
        // Thêm route /profile vào router nếu cần
        navigate('/profile');
    };

    const navigateToHelp = () => {
        showMessage('Đang mở trang trợ giúp...', 'info');
        // Thêm route /help vào router nếu cần
        navigate('/help');
    };

    const reportError = () => {
        showMessage('Cảm ơn bạn đã báo cáo! Chúng tôi sẽ kiểm tra sớm nhất.', 'success');
    };

    // Enter key handler
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                navigateToLogin();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen overflow-x-hidden">
            <style>{`
        .fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .slide-up {
          animation: slideUp 0.6s ease-out 0.3s both;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .bounce-in {
          animation: bounceIn 0.8s ease-out 0.6s both;
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .hover-lift:hover {
          transform: translateY(-3px);
          transition: transform 0.3s ease;
        }
        
        .hover-scale:hover {
          transform: scale(1.05);
          transition: transform 0.2s ease;
        }
        
        .glass-effect {
          backdrop-filter: blur(15px);
          background: rgba(255, 255, 255, 0.9);
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

            <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
                <div className="w-full max-w-sm sm:max-w-md lg:max-w-2xl xl:max-w-4xl">
                    <div className="text-center">
                        {/* Floating 404 Number */}
                        <div className="mb-6 sm:mb-8 lg:mb-12 fade-in">
                            <div className="float-animation inline-block">
                                <h1 className="text-6xl sm:text-8xl lg:text-9xl xl:text-[12rem] font-bold text-gradient leading-none">
                                    404
                                </h1>
                            </div>
                        </div>

                        {/* Error Message Card */}
                        <div className="glass-effect rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 mb-6 sm:mb-8 slide-up">
                            {/* Chat Icon */}
                            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 hover-scale">
                                <span className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl">💬</span>
                            </div>

                            {/* Error Title */}
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                                Oops! Trang không tìm thấy
                            </h2>

                            {/* Error Description */}
                            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg mx-auto">
                                Trang bạn đang tìm kiếm có thể đã được di chuyển, xóa hoặc không tồn tại.
                                Đừng lo lắng, chúng tôi sẽ giúp bạn quay lại đúng hướng!
                            </p>

                            {/* Action Buttons */}
                            <div className="space-y-3 sm:space-y-4 bounce-in">
                                <button
                                    onClick={navigateToLogin}
                                    className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-800 transition-all duration-200 hover-lift shadow-lg text-sm sm:text-base"
                                >
                                    Quay lại trang đăng nhập
                                </button>

                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                                    {/*<button*/}
                                    {/*    onClick={navigateToHome}*/}
                                    {/*    className="flex-1 sm:flex-none bg-white border-2 border-indigo-200 text-indigo-600 py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-200 hover-lift text-sm sm:text-base"*/}
                                    {/*>*/}
                                    {/*    🏠 Trang chủ*/}
                                    {/*</button>*/}
                                    <button
                                        onClick={navigateToSupport}
                                        className="flex-1 sm:flex-none bg-white border-2 border-indigo-200 text-indigo-600 py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-200 hover-lift text-sm sm:text-base"
                                    >
                                        Liên hệ hỗ trợ
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Helpful Links Component */}
                        <div className="glass-effect rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 bounce-in">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                                Có thể bạn đang tìm kiếm:
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                                <button
                                    onClick={navigateToChat}
                                    className="flex items-center space-x-3 p-3 sm:p-4 bg-white rounded-lg hover:bg-indigo-50 hover:shadow-md transition-all duration-200 text-left hover-lift"
                                >
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-sm sm:text-base">💬</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Trò chuyện</h4>
                                        <p className="text-xs sm:text-sm text-gray-600">Bắt đầu chat ngay</p>
                                    </div>
                                </button>

                                <button
                                    onClick={navigateToProfile}
                                    className="flex items-center space-x-3 p-3 sm:p-4 bg-white rounded-lg hover:bg-indigo-50 hover:shadow-md transition-all duration-200 text-left hover-lift"
                                >
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-sm sm:text-base">👤</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Hồ sơ</h4>
                                        <p className="text-xs sm:text-sm text-gray-600">Quản lý tài khoản</p>
                                    </div>
                                </button>

                                <button
                                    onClick={navigateToHelp}
                                    className="flex items-center space-x-3 p-3 sm:p-4 bg-white rounded-lg hover:bg-indigo-50 hover:shadow-md transition-all duration-200 text-left hover-lift sm:col-span-2 lg:col-span-1"
                                >
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-sm sm:text-base">❓</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Trợ giúp</h4>
                                        <p className="text-xs sm:text-sm text-gray-600">Hướng dẫn sử dụng</p>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Footer Info */}
                        <div className="mt-6 sm:mt-8 text-center">
                            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                                Nếu bạn cho rằng đây là lỗi, vui lòng{' '}
                                <button
                                    onClick={reportError}
                                    className="text-indigo-600 hover:text-indigo-800 transition-colors underline font-medium"
                                >
                                    báo cáo cho chúng tôi
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}