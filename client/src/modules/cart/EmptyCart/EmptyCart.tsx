import Image from 'next/image'
import { useRouter } from 'next/router'

import { Routes } from '@router/Routes.enum'
import { ButtonVariant } from '@ui/Button'
import emptyCartBag from '@public/svg/empty_cart_bag.svg'
import * as Styled from './EmptyCart.styled'

const EmptyCart = () => {
  const router = useRouter()

  const navigateToHome = () => router.push(Routes.HOME)

  return (
    <Styled.Root>
      <Styled.Content>
        <Styled.ImageContainer>
          <Image src={emptyCartBag.src} sizes='100%' fill alt='Корзина' />
        </Styled.ImageContainer>
        <Styled.Title>В вашей корзине пока пусто</Styled.Title>
        <Styled.Description>
          Тут появятся товары, которые вы закажете.
        </Styled.Description>
        <Styled.Button
          title='На главную'
          variant={ButtonVariant.PRIMARY}
          onClick={navigateToHome}
        />
      </Styled.Content>
    </Styled.Root>
  )
}

export default EmptyCart
