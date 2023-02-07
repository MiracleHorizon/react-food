import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { Routes } from '@/types/routes'

const ErrorPage = () => {
  const router = useRouter()

  useEffect(() => router.push(Routes.HOME))
}

export default ErrorPage
