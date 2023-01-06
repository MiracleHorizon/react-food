import * as About from './DeliveryAbout.styles'

const DeliveryAbout = () => (
  <About.Root data-el='delivery-about'>
    <About.Text>О доставке</About.Text>
    <About.Svg>
      <About.SvgLine d='M1 5 h8' data-el='svg-line' />
      <About.SvgTip d='M1 1l4 4-4 4' data-el='svg-tip' />
    </About.Svg>
  </About.Root>
)

export default DeliveryAbout
