import { useUserStore } from '@/stores/userStore';
import { User } from '@/types/auth';

type AuthState =
  | { isAuthenticated: false; user: null }
  | { isAuthenticated: true; user: User };

export const useAuth = (): AuthState => {
  const user = useUserStore((state) => state.user);

  if (user) {
    return { isAuthenticated: true, user };
  }

  return { isAuthenticated: false, user: null };
};
