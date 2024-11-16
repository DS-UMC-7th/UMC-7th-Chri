import axios from 'axios';

// 영화 API 요청 인스턴스 설정
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_MOVIE_API_URL || 'https://api.themoviedb.org/3', // 기본 영화 API URL
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN || ''}`, // 기본 토큰 값
  },
});

// 인증 관련 API 요청 인스턴스 설정 (로그인, 리프레시 토큰 등)
const axiosAuthInstance = axios.create({
  baseURL: 'http://localhost:3000', // 백엔드 주소
});

// 요청 인터셉터 설정: accessToken을 헤더에 추가
axiosAuthInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 설정: accessToken 만료 시 refreshToken 사용
axiosAuthInstance.interceptors.response.use(
  (response) => response, // 정상 응답 처리
  async (error) => {
    if (error.response?.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');

      // refreshToken이 없으면 로그아웃 처리
      if (!refreshToken) {
        window.location.href = '/login';
        return Promise.reject(error);
      }

      try {
        // refreshToken을 이용해 새로운 accessToken 요청
        const refreshResponse = await axiosAuthInstance.post('/auth/refresh', {
          refreshToken,
        });

        const { accessToken: newAccessToken, refreshToken: newRefreshToken } = refreshResponse.data;

        // 새로 받은 토큰을 로컬스토리지에 저장
        localStorage.setItem('accessToken', newAccessToken);
        localStorage.setItem('refreshToken', newRefreshToken);

        // 원래 요청을 새로 받은 토큰으로 재시도
        error.config.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axiosAuthInstance(error.config);
      } catch (refreshError) {
        // refreshToken이 유효하지 않으면 로그아웃 처리
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export { axiosInstance, axiosAuthInstance };
