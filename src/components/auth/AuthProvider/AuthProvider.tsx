'use client';

import Loader from '@/components/ui/Loader/Loader';
import { useUserStore } from '@/stores/userStore';
import { ReactNode, useEffect } from 'react';

interface AuthProvider {
  children: ReactNode;
}

export default function AuthProvider(props: AuthProvider) {
  const { children } = props;
  const { getSession, isLoading } = useUserStore();

  useEffect(() => {
    getSession();
  }, [getSession]);

  if (isLoading) return <Loader />;

  return <>{children}</>;
}
