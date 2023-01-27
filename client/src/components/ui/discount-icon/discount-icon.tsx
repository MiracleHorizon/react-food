import * as Icon from './discount-icon.styled'

const PERCENT_IMAGE_URL =
  'https://avatars.mds.yandex.net/get-bunker/118781/e7d4e26a917ef54286bb6bf5788e0aa151dcb756/orig'

const DiscountIcon = () => (
  <Icon.Root data-el='discount-icon'>
    <Icon.Image width={20} height={20} src={PERCENT_IMAGE_URL} alt='discount' />
  </Icon.Root>
)

export default DiscountIcon
