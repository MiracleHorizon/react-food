import Image from 'next/image'
import { observer } from 'mobx-react-lite'

import CutleryStore from '@/stores/Cutlery.store'
import ChangeCountBar from '@/ui/change-count-bar'
import { CUTLERY_IMAGE_URL } from '@/utils/constants'
import * as Bar from './ChangeCutleryCountBar.styles'

const ChangeCutleryCountBar = () => {
  const handleIncrementCount = () => CutleryStore.incrementCount()

  const handleDecrementCount = () => CutleryStore.decrementCount()

  return (
    <Bar.Root>
      <Bar.TitleBlock>
        <Bar.Title>
          <Image width={20} height={20} src={CUTLERY_IMAGE_URL} alt='Cutlery' />
          Приборы
        </Bar.Title>
      </Bar.TitleBlock>
      <ChangeCountBar
        value={CutleryStore.count}
        decrement={handleDecrementCount}
        increment={handleIncrementCount}
        isIncrementDisabled={CutleryStore.isMaxCount}
      />
    </Bar.Root>
  )
}

export default observer(ChangeCutleryCountBar)
