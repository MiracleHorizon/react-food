import Image from 'next/image'

import { useUserStore } from '@stores/userStore'
import { Routes } from '@router/Routes.enum'
import listSvg from '@public/svg/list.svg'
import * as Label from './OrdersLabel.styled'

const OrdersLabel = () => (
  <>
    {useUserStore(state => state.isAuth()) && (
      <Label.Root href={Routes.ORDERS}>
        <Label.IconContainer>
          <Image src={listSvg.src} alt='Заказы' width={24} height={24} />
        </Label.IconContainer>
        <Label.Title>Заказы</Label.Title>
      </Label.Root>
    )}
  </>
)

export default OrdersLabel
