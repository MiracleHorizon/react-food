import Head from 'next/head'
import { type FC, useMemo } from 'react'

import { SearchEngineOptimizer } from '@utils/SearchEngineOptimizer'
import { CLIENT_API } from '@constants/env'
import type { SeoData } from '@models/SeoData'

const HeadComponent: FC<SeoData> = seoData => {
  const { title, description, keywords } = useMemo(() => {
    const searchEngineOptimizer = new SearchEngineOptimizer(seoData)
    return searchEngineOptimizer.getMetaData()
  }, [seoData])

  return (
    <Head>
      <title>{title}</title>
      <meta name='robots' content='index, follow' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords.join(', ')} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={CLIENT_API} />
      <meta property='og:type' content='website' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

export { HeadComponent as Head }
