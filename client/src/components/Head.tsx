import Head from 'next/head'
import { FC } from 'react'

const HeadComponent: FC<HeadProps> = ({ title }) => (
  <Head>
    <title>{title}</title>
  </Head>
)

export default HeadComponent

export interface HeadProps {
  title: string
}
