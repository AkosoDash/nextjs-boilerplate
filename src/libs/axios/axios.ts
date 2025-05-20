// src/lib/axios.ts
import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.NODE_API || 'http://localhost:3000/api',
  // headers: {
  //   Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJjY2FjMmQ3LTA1M2UtNGUwNi05NWM3LTFjMWUyNzUyMjMwYyIsImVtYWlsIjoia2VsYXNkdWFkZUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IkFkbWluIiwiaWF0IjoxNzQ0ODcyNjEyLCJleHAiOjE3NDU3MzY2MTJ9.N7HrB20Jo1bl_tzRA06O3VQeP5lvI5SjKjcndtAQ6WM`,
  //   'Content-Type': 'application/json'
  // },
  withCredentials: true // kalau pakai cookie auth
})

// Optional: global error handler atau token inject
instance.interceptors.request.use(config => {
  // const token = localStorage.getItem('token'); (kalau client)
  // if (token) config.headers.Authorization = `Bearer ${token}`;
  return config
})

instance.interceptors.response.use(
  res => res,
  err => {
    console.error('[API Error]', err.response?.data || err.message)
    throw err
  }
)

export default instance
