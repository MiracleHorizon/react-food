import * as About from './delivery-info-about.styled'

const DeliveryInfoAbout = () => (
  <About.Root data-el='delivery-about'>
    <About.Title>О доставке</About.Title>
    <About.Svg>
      <About.SvgLine d='M1 5 h8' data-el='svg-line' />
      <About.SvgTip d='M1 1l4 4-4 4' data-el='svg-tip' />
    </About.Svg>
  </About.Root>
)

export default DeliveryInfoAbout
