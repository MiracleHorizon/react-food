import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { Routes } from '@router/Routes.enum'

const ErrorPage = () => {
  const router = useRouter()

  useEffect(() => router.push(Routes.HOME))
}

export default ErrorPage
