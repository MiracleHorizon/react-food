import {useRouter} from 'next/router'

import ArrowSvg from '@ui/svg/ArrowSvg'
import {Button} from './BackButton.styled'

// TODO: Не работает
const BackButton = () => {
  const router = useRouter()

  const handleGoBack = () => router.back()

  return (
    <Button onClick={handleGoBack}>
      <ArrowSvg />
      <span>Назад</span>
    </Button>
  )
}

export default BackButton
