import { AppHeader } from '@components/general/AppHeader'
import { LeftHeaderPanel } from './LeftPanel'
import { RightHeaderPanel } from './RightPanel'

export const MainLayoutHeader = () => (
  <AppHeader>
    <>
      <LeftHeaderPanel />
      <RightHeaderPanel />
    </>
  </AppHeader>
)
