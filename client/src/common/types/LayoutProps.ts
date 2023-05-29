import type { SeoData } from '@models/SeoData'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import type { ChildrenProps } from './ChildrenProps'

export type LayoutProps = ChildrenProps & EmotionClassNameProps & SeoData
