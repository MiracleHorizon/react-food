import AddCutleryButton from './AddCutleryButton'
import ChangeCutleryCountLabel from './ChangeCutleryCountLabel'
import { useCutleryStore } from '@stores/cutleryStore'
import { Root } from './CutleryPanel.styled'

const CutleryPanel = () => (
  <Root>
    {useCutleryStore(state => state.isAdded()) ? (
      <ChangeCutleryCountLabel />
    ) : (
      <AddCutleryButton />
    )}
  </Root>
)

export default CutleryPanel
