import axios from 'axios';

// 기본 API 요청 인스턴스 (영화 API)
const axiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
  baseURL: import.meta.env.VITE_MOVIE_API_URL,
});

// 인증 관련 API 요청 인스턴스 (로그인, 리프레시 토큰 등)
const axiosAuthInstance = axios.create({
  baseURL: 'http://localhost:3000', // 백엔드 주소
});

// 요청 인터셉터: 요청 전에 accessToken을 헤더에 추가
axiosAuthInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터: 401(만료된 accessToken) 응답이 오면 refreshToken을 사용해 재발급
axiosAuthInstance.interceptors.response.use(
  (response) => response, // 정상 응답 처리
  async (error) => {
    if (error.response && error.response.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');

      // refreshToken이 없으면 로그아웃 처리
      if (!refreshToken) {
        window.location.href = '/login'; // 로그인 페이지로 이동
        return Promise.reject(error);
      }

      try {
        // refreshToken을 이용해 새로운 accessToken 요청
        const refreshResponse = await axiosAuthInstance.post('/auth/refresh', {
          refreshToken,
        });

        const { accessToken, refreshToken: newRefreshToken } = refreshResponse.data;

        // 새로 받은 토큰을 로컬스토리지에 저장
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', newRefreshToken);

        // 원래 요청을 새로 받은 토큰으로 재시도
        error.config.headers['Authorization'] = `Bearer ${accessToken}`;
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