import Head from 'next/head'
import type { FC } from 'react'

import type { SeoData } from '@models/seo-data'

const HeadComponent: FC<SeoData> = ({ title }) => (
  <Head>
    <title>{title}</title>
  </Head>
)

export default HeadComponent
