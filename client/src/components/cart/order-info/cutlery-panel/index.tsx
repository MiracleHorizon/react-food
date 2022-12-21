import { observer } from 'mobx-react-lite'

import CartStore from '@/stores/Cart.store'
import ChangeCutleryCountBar from './change-count-bar'
import AddCutleryButton from '@/ui/buttons/add-cutlery'
import Panel from './OrderCutleryPanel.styles'

const OrderCutleryPanel = observer(() => (
  <Panel>
    {CartStore.cutlery.isAdded ? (
      <ChangeCutleryCountBar />
    ) : (
      <AddCutleryButton />
    )}
  </Panel>
))

export default OrderCutleryPanel
