import { FormErrors } from '@/types/form'
import { getKeys } from '@/utils/getKeys'

const validateField = <K extends string>(name: K, value: string) => {
  const trimmed = value.trim()

  if (!trimmed) {
    return `${name} is required`
  }

  if (trimmed.length < 3) {
    return `${name} must be at least 3 characters long`
  }
}

export const validateForm = <T extends object>(form: T) => {
  const errors: FormErrors<T> = {}
  const fields = getKeys(form)

  for (const name of fields) {
    const value = form[name]
    const errorMessage = validateField(name as string, String(value))

    if (errorMessage) {
      errors[name] = errorMessage
    }
  }

  const hasErrors = Object.keys(errors).length !== 0
  return { errors, hasErrors }
}
