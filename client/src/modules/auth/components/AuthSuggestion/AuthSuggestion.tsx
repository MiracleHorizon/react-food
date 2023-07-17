import { useMemo } from 'react'
import { useRouter } from 'next/router'

import { getAuthSuggestionData } from '@modules/Auth/helpers/getAuthSuggestionData'
import { Routes } from '@router/Routes.enum'
import * as Suggestion from './AuthSuggestion.styled'

export const AuthSuggestion = () => {
  const router = useRouter()

  const { title, linkTitle, href } = useMemo(
    () => getAuthSuggestionData(router.asPath as Routes),
    [router.asPath]
  )

  return (
    <Suggestion.Root>
      <Suggestion.Title>{title}</Suggestion.Title>
      <Suggestion.Link href={href}>{linkTitle}</Suggestion.Link>
    </Suggestion.Root>
  )
}
