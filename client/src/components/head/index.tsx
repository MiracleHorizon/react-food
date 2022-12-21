import Head from 'next/head'
import type { FC } from 'react'

import type { HeadProps } from './HeadComponent.types'

const HeadComponent: FC<HeadProps> = ({ title }) => (
  <Head>
    <title>{title}</title>
  </Head>
)

export default HeadComponent
