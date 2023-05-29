import type { PropsWithChildren } from 'react'

import type { SeoData } from '@models/SeoData'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'

export type LayoutProps = PropsWithChildren & EmotionClassNameProps & SeoData
