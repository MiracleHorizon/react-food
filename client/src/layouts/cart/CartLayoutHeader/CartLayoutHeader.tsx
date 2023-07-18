import { AppHeader } from '@components/general/AppHeader'
import { BackButton } from '@components/general/BackButton'
import { UserMenuWidget } from '@components/user/UserMenuWidget'
import { Content } from './CartLayoutHeader.styled'

export const CartLayoutHeader = () => (
  <AppHeader>
    <Content>
      <BackButton />
      <UserMenuWidget />
    </Content>
  </AppHeader>
)
