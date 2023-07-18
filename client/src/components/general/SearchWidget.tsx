import { useRouter } from 'next/router'
import type { FC } from 'react'

import { SearchForm } from '@components/forms/SearchForm'
import { Routes } from '@router/Routes.enum'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'

export const SearchWidget: FC<EmotionClassNameProps> = props => {
  const router = useRouter()

  const onSubmit = async ({ query }: OnSubmitData) => {
    const { pathname } = router

    if (pathname === Routes.SEARCH && query.length === 0) {
      await router.push(Routes.HOME)
      return
    }

    if (pathname !== Routes.SEARCH) {
      await router.push({
        pathname: Routes.SEARCH,
        query: { q: query }
      })
    } else {
      await router.replace(
        {
          pathname: Routes.SEARCH,
          query: { q: query }
        },
        undefined,
        {
          shallow: true
        }
      )
    }
  }

  return (
    <div {...props}>
      <SearchForm onSubmit={onSubmit} />
    </div>
  )
}

export interface OnSubmitData {
  query: string
}
