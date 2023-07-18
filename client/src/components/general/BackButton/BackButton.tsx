import { useRouter } from 'next/router'

import { ChevronSvg } from '@ui/svg/ChevronSvg'
import { Button } from './BackButton.styled'

export const BackButton = () => {
  const router = useRouter()

  const handleGoBack = () => router.back()

  return (
    <Button onClick={handleGoBack}>
      <ChevronSvg />
      <span>Назад</span>
    </Button>
  )
}
