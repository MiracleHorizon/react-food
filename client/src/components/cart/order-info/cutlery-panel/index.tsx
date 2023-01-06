import { observer } from 'mobx-react-lite'

import CutleryStore from '@/stores/Cutlery.store'
import ChangeCutleryCountBar from './change-count-bar'
import AddCutleryButton from '@/ui/buttons/add-cutlery'
import Panel from './OrderCutleryPanel.styles'

const OrderCutleryPanel = () => (
  <Panel>
    {CutleryStore.isAdded ? <ChangeCutleryCountBar /> : <AddCutleryButton />}
  </Panel>
)

export default observer(OrderCutleryPanel)
