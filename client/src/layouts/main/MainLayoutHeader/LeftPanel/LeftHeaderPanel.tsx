import { useRouter } from 'next/router'

import { Routes } from '@router/Routes.enum'
import * as Panel from './LeftHeaderPanel.styled'

const LeftHeaderPanel = () => {
  const { asPath } = useRouter()

  return (
    <Panel.Root>
      <Panel.Logo />
      {(asPath === Routes.HOME ||
        asPath === Routes.CATEGORY ||
        asPath === Routes.SUBCATEGORY) && <Panel.Search />}
    </Panel.Root>
  )
}

export default LeftHeaderPanel
