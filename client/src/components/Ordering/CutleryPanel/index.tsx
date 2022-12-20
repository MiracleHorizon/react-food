import { observer } from 'mobx-react-lite'

import CartStore from '@/stores/Cart.store'
import ChangeCutleryCountBar from './ChangeCutleryCountBar'
import AddCutleryButton from '@/ui/buttons/AddCutleryButton'
import Panel from './CutleryPanel.styles'

const CutleryPanel = observer(() => (
  <Panel>
    {CartStore.cutlery.isAdded ? (
      <ChangeCutleryCountBar />
    ) : (
      <AddCutleryButton />
    )}
  </Panel>
))

export default CutleryPanel
