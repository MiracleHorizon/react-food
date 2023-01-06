import LeftBar from './left-bar'
import RightBar from './right-bar'
import AppHeader from '@/components/app-header'

const DefaultLayoutHeader = () => (
  <AppHeader>
    <>
      <LeftBar />
      <RightBar />
    </>
  </AppHeader>
)

export default DefaultLayoutHeader
