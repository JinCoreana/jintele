import axiosInstance from "./index";

export const latestApi = () => axiosInstance.get('/movie/latest')
export const upcomingApi = () => axiosInstance.get('/movie/upcoming')
export const nowPlayingApi = () => axiosInstance.get('/movie/now_playing')
export const topRateApi = () => axiosInstance.get('/movie/top_rated')
export const popularApi = () => axiosInstance.get('/movie/popular')
export const detailApi = (movie_id: string) => axiosInstance.get(`/movie/${movie_id}`)
export const similarApi = (movie_id: string) => axiosInstance.get(`/movie/${movie_id}/similar`)
export const searchApi = (query: string) => axiosInstance.get(`/search/movie?query=${query}`)