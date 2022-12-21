import Image from 'next/image'

import CartStore from '@/stores/Cart.store'
import { CUTLERY_IMAGE_URL } from '@/utils/constants'
import Button from './AddCutleryButton.styles'

const AddCutleryButton = () => {
  const handleAddCutlery = () => CartStore.cutlery.addToOrder()

  return (
    <Button onClick={handleAddCutlery}>
      <span>
        <Image width={24} height={24} src={CUTLERY_IMAGE_URL} alt='Cutlery' />
        Положить приборы
      </span>
    </Button>
  )
}

export default AddCutleryButton
