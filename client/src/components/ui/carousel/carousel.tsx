import { type FC, type PropsWithChildren, useCallback, useState } from 'react'

import CarouselButton from './CarouselButton'
import * as Carousel from './Carousel.styled'

const CarouselComponent: FC<Props> = ({ children, totalSteps }) => {
  const [currentStep, setCurrentStep] = useState(1)

  const nextStep = useCallback(() => {
    setCurrentStep(prevState =>
      prevState + 1 <= totalSteps ? prevState + 1 : prevState
    )
  }, [totalSteps])

  const prevStep = useCallback(() => {
    setCurrentStep(prevState =>
      prevState - 1 >= 1 ? prevState - 1 : prevState
    )
  }, [])

  return (
    <Carousel.Root>
      <CarouselButton
        direction='prev'
        isActive={currentStep > 1}
        onClick={prevStep}
      />
      <CarouselButton
        direction='next'
        isActive={currentStep !== totalSteps}
        onClick={nextStep}
      />
      <Carousel.List transform={-100 * (currentStep - 1)}>
        {children}
      </Carousel.List>
    </Carousel.Root>
  )
}

export default CarouselComponent

interface Props extends PropsWithChildren {
  totalSteps: number
}
