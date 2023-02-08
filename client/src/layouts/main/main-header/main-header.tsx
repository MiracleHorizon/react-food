import LeftPanel from './left-panel'
import RightPanel from './right-panel'
import AppHeader from '@components/app-header'

const MainLayoutHeader = () => (
  <AppHeader>
    <>
      <LeftPanel />
      <RightPanel />
    </>
  </AppHeader>
)

export default MainLayoutHeader
