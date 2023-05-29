import AppHeader from '@components/AppHeader'
import LeftHeaderPanel from './LeftPanel'
import RightHeaderPanel from './RightPanel'

const MainLayoutHeader = () => (
  <AppHeader>
    <>
      <LeftHeaderPanel />
      <RightHeaderPanel />
    </>
  </AppHeader>
)

export default MainLayoutHeader
