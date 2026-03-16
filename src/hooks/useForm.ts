import { FormErrors } from '@/types/form'
import { useState } from 'react'

export const useForm = <T extends object>(initialValues: T) => {
  const [form, setForm] = useState<T>(initialValues)
  const [errors, setErrors] = useState<FormErrors<T>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    if (name in form) {
      setForm((form) => ({ ...form, [name as keyof T]: value }))
    }
  }

  return {
    form,
    errors,
    handleChange,
    setErrors,
  }
}
