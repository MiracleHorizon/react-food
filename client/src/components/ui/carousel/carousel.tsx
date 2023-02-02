import { FC, useState } from 'react'

import CarouselButton from './carousel-button'
import type { ChildrenProps } from '@/types/children-props'
import * as StyledCarousel from './carousel.styled'

const Carousel: FC<Props> = ({ children, totalSteps }) => {
  const [currentStep, setCurrentStep] = useState(1)

  const nextStep = () => {
    setCurrentStep(prevState =>
      prevState + 1 <= totalSteps ? prevState + 1 : prevState
    )
  }

  const prevStep = () => {
    setCurrentStep(prevState =>
      prevState - 1 >= 1 ? prevState - 1 : prevState
    )
  }

  return (
    <StyledCarousel.Root>
      <CarouselButton
        dest='prev'
        isActive={currentStep > 1}
        onClick={prevStep}
      />
      <CarouselButton
        dest='next'
        isActive={currentStep !== totalSteps}
        onClick={nextStep}
      />
      <StyledCarousel.List transform={-100 * (currentStep - 1)}>
        {children}
      </StyledCarousel.List>
    </StyledCarousel.Root>
  )
}

export default Carousel

interface Props extends ChildrenProps {
  totalSteps: number
  itemsPerStep: number
}
