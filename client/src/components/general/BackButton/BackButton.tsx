import { useRouter } from 'next/router'

import ChevronSvg from '@ui/svg/ChevronSvg'
import { Button } from './BackButton.styled'

const BackButton = () => {
  const router = useRouter()

  const handleGoBack = () => router.back()

  return (
    <Button onClick={handleGoBack}>
      <ChevronSvg />
      <span>Назад</span>
    </Button>
  )
}

export default BackButton
