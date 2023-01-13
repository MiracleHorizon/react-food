import Header from './header'
import Content from './content'
import Footer from './footer'
import * as Panel from './DefaultLayoutRightPanel.styles'

const DefaultLayoutRightPanel = () => (
  <Panel.Root>
    <Panel.Container>
      <Header />
      <Content />
      <Footer />
    </Panel.Container>
  </Panel.Root>
)

export default DefaultLayoutRightPanel
