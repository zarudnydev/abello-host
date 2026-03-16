import axios, { AxiosError } from 'axios'

export const getErrorMessage = (error: unknown): string => {
  if (typeof error === 'string') return error

  if (axios.isAxiosError(error)) {
    if (error.code === 'ERR_NETWORK') {
      return 'Network error. Please check your internet connection.'
    }
    if (error.code === 'ECONNABORTED') {
      return 'Request timeout. Please try again.'
    }
    if (error.response?.status === 404) {
      return 'Resource not found.'
    }
    if (error.response?.status === 500) {
      return 'Server error. Please try again later.'
    }
    if (error.response?.data?.message) {
      return error.response.data.message
    }
  }

  if (error instanceof Error) {
    return error.message
  }

  return 'Something went wrong. Please try again.'
}
