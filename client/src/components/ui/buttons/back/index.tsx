import { useRouter } from 'next/router'

import ArrowLeftSvg from '@/ui/svg/ArrowLeftSvg'
import Button from './BackButton.styles'

const BackButton = () => {
  const router = useRouter()

  const handleGoBack = () => router.back()

  return (
    <Button onClick={handleGoBack}>
      <ArrowLeftSvg />
      <span>Назад</span>
    </Button>
  )
}

export default BackButton
