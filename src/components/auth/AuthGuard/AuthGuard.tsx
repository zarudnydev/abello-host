import { useAuth } from '@/hooks/useAuth';
import { ReactNode } from 'react';

interface AuthGuardProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export default function AuthGuard(props: AuthGuardProps) {
  const { children, fallback = null } = props;
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <>{children}</> : <>{fallback}</>;
}
