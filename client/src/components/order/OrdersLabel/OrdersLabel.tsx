import Image from 'next/image'
import { useRouter } from 'next/router'

import { useUserStore } from '@stores/userStore'
import { Routes } from '@router/Routes.enum'
import listSvg from '@public/svg/list.svg'
import * as Label from './OrdersLabel.styled'

const OrdersLabel = () => {
  const router = useRouter()
  const isAuth = useUserStore(state => state.isAuth())

  if (!isAuth || router.asPath.startsWith(Routes.ORDERS)) {
    return null
  }

  return (
    <Label.Root href={Routes.ORDERS}>
      <Label.IconContainer>
        <Image src={listSvg.src} alt='Заказы' width={24} height={24} />
      </Label.IconContainer>
      <Label.Title>Заказы</Label.Title>
    </Label.Root>
  )
}

export default OrdersLabel
