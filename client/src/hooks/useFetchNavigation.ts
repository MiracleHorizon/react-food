import { useEffect } from 'react'
import useSWR from 'swr'

import { environmentService } from '@api/EnvironmentService'
import { useNavigationStore } from '@stores/navigationStore'

export const useFetchNavigation = () => {
  const isEmpty = useNavigationStore(state => state.isEmpty())
  const setCategories = useNavigationStore(state => state.setCategories)
  const setLoadingStatus = useNavigationStore(state => state.setLoadingStatus)

  const { isLoading } = useSWR(
    isEmpty ? 'navigation' : null,
    () => environmentService.fetchNavigationCategories(),
    {
      refreshInterval: 1000 * 60 * 10,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      onSuccess: navigationCategories => setCategories(navigationCategories)
    }
  )

  useEffect(() => setLoadingStatus(isLoading), [isLoading, setLoadingStatus])
}
