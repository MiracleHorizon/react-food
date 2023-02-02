import Image from 'next/image'
import { observer } from 'mobx-react-lite'
import { useCallback } from 'react'

import ChangeCountLabel from '@/ui/change-count-label'
import { useCutleryStore } from '../cutlery.store'
import { CUTLERY_IMAGE_URL } from '@/utils/constants'
import * as Label from './change-count-label.styled'

const ChangeCutleryCountLabel = () => {
  const handleIncrementCount = useCallback(() => {
    useCutleryStore.incrementCount()
  }, [])

  const handleDecrementCount = useCallback(() => {
    useCutleryStore.decrementCount()
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
        value={useCutleryStore.getCount()}
        decrement={handleDecrementCount}
        increment={handleIncrementCount}
        isIncrementDisabled={useCutleryStore.isMaxCount}
      />
    </Label.Root>
  )
}

export default observer(ChangeCutleryCountLabel)
