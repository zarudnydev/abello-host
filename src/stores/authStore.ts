import { authService } from '@/services/auth';
import { LoginRequest, Profile, User } from '@/types/auth';
import { getErrorMessage } from '@/utils/errorHandler';
import { create } from 'zustand';
import { useUserStore } from './userStore';

interface AuthState {
  isLoading: boolean;
  error: string | null;
  login: (userData: LoginRequest) => Promise<void>;
}

const initialState = {
  isLoading: false,
  error: null,
};

export const useAuthStore = create<AuthState>((set) => ({
  ...initialState,
  login: async (userData) => {
    set({ isLoading: true, error: null });

    try {
      const response = await authService.login(userData);
      useUserStore.getState().setUser(response.data);
    } catch (e) {
      set({ error: getErrorMessage(e) });
    } finally {
      set({ isLoading: false });
    }
  },
}));
