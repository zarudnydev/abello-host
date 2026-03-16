'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button/Button';
import { useAuth } from '@/hooks/useAuth';
import { useUserStore } from '@/stores/userStore';
import styles from './Header.module.scss';

export default function Header() {
  const { isAuthenticated, user } = useAuth();
  const { logout, isLoading } = useUserStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href='/' className={styles.logo}>
          Abello host
        </Link>
        <nav className={styles.nav}>
          {isAuthenticated ? (
            <div className={styles.userInfo}>
              <span className={styles.userName}>
                {user.firstName} {user.lastName}
              </span>
              <Button onClick={handleLogout} disabled={isLoading}>
                Logout
              </Button>
            </div>
          ) : (
            <Link href='/login' className={styles.loginLink}>
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
