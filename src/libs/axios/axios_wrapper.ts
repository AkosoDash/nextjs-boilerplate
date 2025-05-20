// src/lib/api.ts
import axios from './axios'

type ApiResponse<T = any> = Promise<T>

export const api = {
  get: async <T = any>(url: string): ApiResponse<T> => {
    return handleRequest<T>(() => axios.get(url))
  },

  post: async <T = any>(url: string, data?: any): ApiResponse<T> => {
    return handleRequest<T>(() => axios.post(url, data))
  },

  put: async <T = any>(url: string, data?: any): ApiResponse<T> => {
    return handleRequest<T>(() => axios.put(url, data))
  },

  del: async <T = any>(url: string): ApiResponse<T> => {
    return handleRequest<T>(() => axios.delete(url))
  }
}

// Unified request handler with proper error typing
async function handleRequest<T>(request: () => Promise<{ data: T }>): Promise<T> {
  try {
    const { data } = await request()
    return data
  } catch (error: any) {
    const errorInfo = {
      message: error.response?.data?.message || 'An error occurred',
      status: error.response?.status,
      data: error.response?.data,
      ...(process.env.NODE_ENV === 'development' && {
        debug: {
          url: error.config?.url,
          method: error.config?.method
        }
      })
    }

    console.error('API Error:', errorInfo)
    throw errorInfo
  }
}
