'use client'

import Button from '@/components/ui/Button/Button'
import Input from '@/components/ui/Input/Input'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'next/navigation'
import { useForm } from '@/hooks/useForm'
import { validateForm } from './validate'
import { SubmitEventHandler, useEffect } from 'react'
import { FormState } from './type'
import { useUserStore } from '@/stores/userStore'
import styles from './LoginForm.module.scss'

export default function LoginForm() {
  const { form, handleChange, errors, setErrors } = useForm<FormState>({
    username: '',
    password: '',
  })

  const { login, isLoading, error } = useAuthStore()
  const { user } = useUserStore()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [router, user])

  const submitForm: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const { errors, hasErrors } = validateForm(form)

    if (hasErrors) {
      return setErrors(errors)
    }

    setErrors({})
    await login(form)
  }

  return (
    <form onSubmit={submitForm} className={styles.form}>
      <Input
        name="username"
        value={form.username}
        onChange={handleChange}
        error={errors.username}
        label="Username"
        placeholder="Username"
      />
      <Input
        name="password"
        value={form.password}
        onChange={handleChange}
        error={errors.password}
        type="password"
        label="Password"
        placeholder="Password"
      />
      <Button type="submit" disabled={isLoading} className={styles.button}>
        login
      </Button>
      {error}
    </form>
  )
}
