import Image from 'next/image'
import { observer } from 'mobx-react-lite'

import CartStore from '@/stores/Cart.store'
import ChangeCountBar from '@/ui/ChangeCountBar'
import { CUTLERY_IMAGE_URL } from '@/utils/constants'
import * as Bar from './ChangeCutleryCountBar.styles'

const ChangeCutleryCountBar = observer(() => {
  const handleIncrementCount = () => CartStore.cutlery.incrementCount()

  const handleDecrementCount = () => CartStore.cutlery.decrementCount()

  return (
    <Bar.Root>
      <Bar.TitleBlock>
        <span>
          <Image width={20} height={20} src={CUTLERY_IMAGE_URL} alt='Cutlery' />
          Приборы
        </span>
      </Bar.TitleBlock>
      <ChangeCountBar
        value={CartStore.cutlery.count}
        decrement={handleDecrementCount}
        increment={handleIncrementCount}
      />
    </Bar.Root>
  )
})

export default ChangeCutleryCountBar
