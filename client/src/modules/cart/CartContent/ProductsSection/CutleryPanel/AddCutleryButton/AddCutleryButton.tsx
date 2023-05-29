import Image from 'next/image'

import { useCutleryStore } from '@stores/cutleryStore'
import cutlerySvg from '@public/svg/cutlery.svg'
import * as Button from './AddCutleryButton.styled'

const AddCutleryButton = () => {
  const addCutlery = useCutleryStore(state => state.addCutlery)

  const handleAddCutlery = () => addCutlery()

  return (
    <Button.Root onClick={handleAddCutlery}>
      <Button.Content>
        <Button.ImageContainer>
          <Image src={cutlerySvg.src} alt='Приборы' sizes='100%' fill />
        </Button.ImageContainer>
        Положить приборы
      </Button.Content>
    </Button.Root>
  )
}

export default AddCutleryButton
