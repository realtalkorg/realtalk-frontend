import apiClient from './api';

const login = async (username, password) => {
    try {
        // goi api
        const response = await apiClient.post('auth/login', {
            email: username,
            password: password,
        });

        // kiem tra response co token khong
        if(response.data.token) {
            localStorage.setItem('authToken', response.data.token);

            if(response.data.email) {
                localStorage.setItem('email', response.data.email);
            }

            if(response.data.id) {
                localStorage.setItem('id', response.data.id);
            }

            return{
                success: true,
                data: response.data
            }
        }
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || 'Đăng nhập thất bại. Vui lòng thử lại.',
            error: error
        }
    }
}

const register = async (username, name, password) => {
    try{
        // goi api
        const response = await apiClient.post('auth/register', {
            email: username,
            name: name,
            password: password,
        });
        return{
            success: true,
            data: response.data
        }
    } catch (error){
        return{
            success: false,
            message: error.response?.data?.message || "Email is already exists",
            error: error
        }
    }
}

const loginWithGoogle = async () => {
}

const loginWithFacebook = async () => {
}

const loginWithGitHub = async () => {
}

export {
    login,
    loginWithGoogle,
    loginWithFacebook,
    loginWithGitHub,
    register,
};