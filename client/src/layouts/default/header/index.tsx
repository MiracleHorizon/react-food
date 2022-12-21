import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'

import AppLogo from '@/ui/app-logo'
import CartButton from '@/ui/buttons/cart'
import CartStore from '@/stores/Cart.store'
import * as Header from './DefaultLayoutHeader.styles'

const DefaultLayoutHeader = observer(() => {
  const router = useRouter()

  return (
    <>
      <Header.Root>
        <AppLogo />
        {!CartStore.isEmpty && router.asPath === '/' && <CartButton />}
      </Header.Root>
      <Header.Divider />
    </>
  )
})

export default DefaultLayoutHeader
