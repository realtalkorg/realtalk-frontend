import axios from 'axios';

// Cấu hình base URL cho API
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Tạo instance axios với cấu hình mặc định
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000, // 10 seconds
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor để tự động thêm token vào mỗi request
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor để xử lý response và error
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Xử lý lỗi 401 - Unauthorized
        if (error.response?.status === 401) {
            localStorage.removeItem('authToken');
            localStorage.removeItem('email');
            localStorage.removeItem('id');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default apiClient;