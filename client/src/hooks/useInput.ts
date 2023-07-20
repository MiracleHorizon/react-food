import { type ChangeEvent, useState } from 'react'

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value)

  const handleClear = () => setValue('')

  const handleReset = () => setValue(initialValue)

  return {
    value,
    setValue,
    handleChange,
    handleClear,
    handleReset
  }
}
