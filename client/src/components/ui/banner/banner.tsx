import { type FC } from 'react'

import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import { Banner } from './Banner.styled'

const BannerComponent: FC<Props> = props => <Banner {...props} />

export { BannerComponent as Banner }

interface Props extends EmotionClassNameProps {
  bgImagePath: string
}
