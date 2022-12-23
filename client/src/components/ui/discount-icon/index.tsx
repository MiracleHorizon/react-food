import Image from 'next/image'

import Icon from './DiscountIcon.styles'

const PERCENT_IMAGE_URL =
  'https://avatars.mds.yandex.net/get-bunker/118781/e7d4e26a917ef54286bb6bf5788e0aa151dcb756/orig'

const DiscountIcon = () => (
  <Icon>
    <Image width={24} height={24} src={PERCENT_IMAGE_URL} alt='discount' />
  </Icon>
)

export default DiscountIcon
