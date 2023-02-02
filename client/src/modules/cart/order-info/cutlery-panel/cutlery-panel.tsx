import { observer } from 'mobx-react-lite'

import ChangeCutleryCountBar from './change-count-label'
import AddCutleryButton from './add-cutlery-button'
import { useCutleryStore } from './cutlery.store'
import StyledPanel from './cutlery-panel.styled'

const CutleryPanel = () => (
  <StyledPanel>
    {useCutleryStore.isAdded ? <ChangeCutleryCountBar /> : <AddCutleryButton />}
  </StyledPanel>
)

export default observer(CutleryPanel)
