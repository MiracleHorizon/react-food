import { type FC, memo } from 'react'

import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import { Banner } from './Banner.styled'

const BannerComponent: FC<Props> = props => <Banner {...props} />

export default memo(BannerComponent)

interface Props extends EmotionClassNameProps {
  bgImagePath: string
}
