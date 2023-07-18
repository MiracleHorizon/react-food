import { useRouter } from 'next/router'

import { Routes } from '@router/Routes.enum'
import * as Panel from './LeftHeaderPanel.styled'

export const LeftHeaderPanel = () => {
  const { asPath } = useRouter()

  return (
    <Panel.Root>
      <Panel.Logo />
      {(asPath === Routes.HOME || asPath === Routes.CATEGORY) && (
        <Panel.Search />
      )}
    </Panel.Root>
  )
}
