import CutleryStore from '@/stores/Cutlery.store'
import { CUTLERY_IMAGE_URL } from '@/utils/constants'
import * as Button from './add-cutlery-button.styled'

const AddCutleryButton = () => {
  const handleAddCutlery = () => CutleryStore.add()

  return (
    <Button.Root onClick={handleAddCutlery}>
      <Button.Content>
        <Button.Image
          width={24}
          height={24}
          src={CUTLERY_IMAGE_URL}
          alt='Cutlery'
        />
        Положить приборы
      </Button.Content>
    </Button.Root>
  )
}

export default AddCutleryButton
