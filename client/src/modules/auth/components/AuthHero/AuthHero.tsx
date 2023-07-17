import { useRouter } from 'next/router'

import { getAuthHeroTitle } from '@modules/Auth/helpers/getAuthHeroTitle'
import type { Routes } from '@router/Routes.enum'
import * as Hero from './AuthHero.styled'

export const AuthHero = () => {
  const router = useRouter()

  const title = getAuthHeroTitle(router.asPath as Routes)

  return (
    <Hero.Root>
      <Hero.Title>{title}</Hero.Title>
    </Hero.Root>
  )
}
