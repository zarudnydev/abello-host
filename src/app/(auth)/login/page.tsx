import LoginForm from '@/components/auth/LoginForm/LoginForm'
import styles from './page.module.scss'

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  )
}
