import axios from "axios";
// const PORT=4000;
const BASE_URL =  `https://api.themoviedb.org/3`


export  const api = axios.create({
    baseURL:BASE_URL,
}) ;