import { AddCutleryButton } from './AddCutleryButton'
import { ChangeCutleryCountLabel } from './ChangeCutleryCountLabel'
import { useCutleryStore } from '@stores/cutleryStore'
import { Root } from './CutleryPanel.styled'

export const CutleryPanel = () => {
  const isAdded = useCutleryStore(state => state.isAdded())

  return (
    <Root>{isAdded ? <ChangeCutleryCountLabel /> : <AddCutleryButton />}</Root>
  )
}
