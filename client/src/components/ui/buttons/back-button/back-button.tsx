import { useRouter } from 'next/router'

import ArrowLeftSvg from '@/ui/svg/ArrowLeftSvg'
import StyledButton from './back-button.styled'

const BackButton = () => {
  const router = useRouter()

  const handleGoBack = () => router.back()

  return (
    <StyledButton onClick={handleGoBack}>
      <ArrowLeftSvg />
      <span>Назад</span>
    </StyledButton>
  )
}

export default BackButton
