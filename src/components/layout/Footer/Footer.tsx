'use client'

import { useAuth } from '@/hooks/useAuth'
import styles from './Footer.module.scss'
import { getCurrentYear } from '@/utils/date'

export default function Footer() {
  const { user, isAuthenticated } = useAuth()
  const currentYear = getCurrentYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          © {currentYear}
          {isAuthenticated && ` - Logged as ${user.email}`}
        </p>
      </div>
    </footer>
  )
}
