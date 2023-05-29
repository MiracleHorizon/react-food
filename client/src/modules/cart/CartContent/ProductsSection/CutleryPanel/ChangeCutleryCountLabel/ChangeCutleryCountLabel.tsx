import { useCallback } from 'react'

import { useCutleryStore } from '@stores/cutleryStore'
import * as Label from './ChangeCutleryCountLabel.styled'
import cutlerySvg from '@public/svg/cutlery.svg' // TODO: useCallback

// TODO: useCallback
const ChangeCutleryCountLabel = () => {
  const count = useCutleryStore(state => state.count)
  const isMaxCount = useCutleryStore(state => state.isMaxCount())

  const incrementCount = useCutleryStore(state => state.incrementCount)
  const decrementCount = useCutleryStore(state => state.decrementCount)

  const handleIncrementCount = useCallback(
    () => incrementCount(),
    [incrementCount]
  )

  const handleDecrementCount = useCallback(
    () => decrementCount(),
    [decrementCount]
  )

  return (
    <Label.Root>
      <Label.ChangeCountLabel
        value={count}
        isIncrementDisabled={isMaxCount}
        decrement={handleDecrementCount}
        increment={handleIncrementCount}
      />
      <Label.TitleContainer>
        <Label.Image
          width={20}
          height={20}
          src={cutlerySvg.src}
          alt='Приборы'
        />
        <Label.Title>Приборы</Label.Title>
      </Label.TitleContainer>
    </Label.Root>
  )
}

export default ChangeCutleryCountLabel
