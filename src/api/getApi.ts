import {api} from "./api";
const API_KEY = 'ab2ea070f9aa3c1aa576539e31964dd5'

export const getMovies = () => {
    return api.get(`/trending/all/day?api_key=${API_KEY}&page=2`).then(res => res.data.results)
};

export const getSearchedMovies = (keyword:string) => {
    return api.get(`/search/movie?api_key=${API_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`).then(res => res.data.results)
}