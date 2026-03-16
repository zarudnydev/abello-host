import { authService } from '@/services/auth'
import { User } from '@/types/auth'
import { create } from 'zustand'

interface UserState {
  user: User | null
  accessToken: string | null
  isLoading: boolean
  error: string | null
  logout: () => Promise<void>
  getSession: () => Promise<void>
  setUser: (user: User | null) => void
}

const initialState = {
  user: null,
  accessToken: null,
  isLoading: true,
  error: null,
}

export const useUserStore = create<UserState>((set) => ({
  ...initialState,
  getSession: async () => {
    set({ isLoading: true })

    try {
      const response = await authService.getSession()
      const user = response.data
      set({ user })
    } catch (e) {
      set({ error: null })
    } finally {
      set({ isLoading: false })
    }
  },
  logout: async () => {
    try {
      await authService.logout()
    } catch (e) {
      console.log(e)
    } finally {
      set({
        user: null,
        accessToken: null,
      })
    }
  },
  setUser: (user) => set({ user }),
}))
