import { LoginRequest, LoginResponse, LogoutResponse, Profile } from '@/types/auth'
import { api } from './api'

export const authService = {
  login: (userData: LoginRequest) => api.post<LoginResponse>('/auth/login', userData),
  logout: () => api.post<LogoutResponse>('/auth/logout'),
  getSession: () => api.get<Profile>('/auth/me'),
}
