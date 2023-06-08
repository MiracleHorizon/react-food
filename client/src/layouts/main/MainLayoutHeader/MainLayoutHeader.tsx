import AppHeader from '@components/general/AppHeader'
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
