import Image from 'next/image'
import { observer } from 'mobx-react-lite'
import { useCallback } from 'react'

import CutleryStore from '@/stores/Cutlery.store'
import ChangeCountLabel from '@/ui/change-count-label'
import { CUTLERY_IMAGE_URL } from '@/utils/constants'
import * as Label from './change-count-label.styled'

const ChangeCutleryCountLabel = () => {
  const handleIncrementCount = useCallback(() => {
    CutleryStore.incrementCount()
  }, [])

  const handleDecrementCount = useCallback(() => {
    CutleryStore.decrementCount()
  }, [])

  return (
    <Label.Root>
      <Label.TitleLabel>
        <Label.Title>
          <Image width={20} height={20} src={CUTLERY_IMAGE_URL} alt='Cutlery' />
          Приборы
        </Label.Title>
      </Label.TitleLabel>
      <ChangeCountLabel
        value={CutleryStore.getCount()}
        decrement={handleDecrementCount}
        increment={handleIncrementCount}
        isIncrementDisabled={CutleryStore.isMaxCount}
      />
    </Label.Root>
  )
}

export default observer(ChangeCutleryCountLabel)
