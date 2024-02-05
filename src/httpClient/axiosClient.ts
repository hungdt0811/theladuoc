import axios from 'axios';

const token = localStorage.getItem('token');

// window.localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6ImFkbWluNUBnbWFpbC5jb20iLCJuYmYiOjE3MDY4ODY2NjQsImV4cCI6MTcwNzQ5MTQ2NCwiaWF0IjoxNzA2ODg2NjY0fQ.GbNQ2w0mG9bk6Vf_WAhSo6mG2INyz3ohMNtqy0_Fr4k');
const defaultOptions = {
    baseURL: 'https://localhost:56428/api/v1/',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization':  token ? `Bearer ${token}` : '',
    },
    
};
console.log(defaultOptions)
const axiosClient = axios.create(defaultOptions);

axiosClient.defaults.timeout = 2000;

// axiosClient.defaults.withCredentials = true;

export default axiosClient