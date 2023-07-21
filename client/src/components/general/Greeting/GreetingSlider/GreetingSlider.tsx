import { type FC, useState } from 'react'

import { Button, ButtonVariant } from '@ui/Button'
import { DescriptionSlide } from './slides/DescriptionSlide'
import { WishesSlide } from './slides/WishesSlide'
import * as Slider from './GreetingSlider.styled'

const totalSlides = 2
const firstSlide = 1

export const GreetingSlider: FC<Props> = ({ onClose }) => {
  const [slide, setSlide] = useState(firstSlide)

  const next = () =>
    setSlide(prevState =>
      prevState + 1 <= totalSlides ? prevState + 1 : prevState
    )

  const handleSlide = () => {
    switch (slide) {
      case 1:
        return <DescriptionSlide />
      case 2:
        return <WishesSlide />
      default:
        return null
    }
  }

  return (
    <Slider.Root>
      {handleSlide()}
      <Slider.Footer>
        <Button
          variant={ButtonVariant.SECONDARY}
          isDisabled={slide !== totalSlides}
          title='Понятно'
          onClick={onClose}
        />
        <Button
          variant={ButtonVariant.PRIMARY}
          isDisabled={slide === totalSlides}
          title='Далее'
          onClick={next}
        />
      </Slider.Footer>
    </Slider.Root>
  )
}

interface Props {
  onClose: VoidFunction
}
