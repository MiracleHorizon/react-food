import { observer } from 'mobx-react-lite'

import CutleryStore from '@/stores/Cutlery.store'
import ChangeCutleryCountBar from './change-count-label'
import AddCutleryButton from '@/ui/buttons/add-cutlery-button'
import StyledPanel from './cutlery-panel.styled'

const CutleryPanel = () => (
  <StyledPanel>
    {CutleryStore.isAdded ? <ChangeCutleryCountBar /> : <AddCutleryButton />}
  </StyledPanel>
)

export default observer(CutleryPanel)
