import { useMemo, useState } from 'react'
import { Dialog } from '@headlessui/react'

import { ModalWrapper } from '@ui/Modal'
import { GreetingSlider } from './GreetingSlider'
import { LocalStorageHandler } from '@utils/LocalStorageHandler'
import { GREETING_ITEM_NAME } from '@constants/localStorage'
import * as Greeting from './Greenting.styled'

interface GreetingItem {
  isViewed: boolean
}

const GreetingComponent = () => {
  const greetingItem = useMemo(() => {
    const item = LocalStorageHandler.extract(GREETING_ITEM_NAME)
    return item as GreetingItem | null
  }, [])
  const [isGreetingViewed, setIsGreetingViewed] = useState(
    greetingItem ? greetingItem.isViewed : false
  )

  // TODO: Пересмотреть
  const onClickClose = () => {}

  const onClose = () => {
    const item = { isViewed: true } as GreetingItem
    LocalStorageHandler.set(GREETING_ITEM_NAME, item)
    setIsGreetingViewed(true)
  }

  return (
    <ModalWrapper isOpen={!isGreetingViewed} onClose={onClickClose}>
      <Dialog.Panel as={Greeting.Root}>
        <GreetingSlider onClose={onClose} />
      </Dialog.Panel>
    </ModalWrapper>
  )
}

export { GreetingComponent as Greeting }
