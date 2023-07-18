import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useSWR from 'swr'

import { MainLayout } from '@layouts/Main'
import { ProductsGrid } from '@components/products/ProductsGrid'
import { searchService } from '@api/SearchService'

export const SearchScreen = () => {
  const router = useRouter()
  const query = router.query.q

  const {
    data: products,
    isLoading,
    mutate
  } = useSWR(
    'search',
    () =>
      query && !Array.isArray(query)
        ? searchService.searchProducts(query)
        : null,
    {
      revalidateOnFocus: false
    }
  )

  useEffect(() => {
    mutate()
  }, [mutate, query])

  return (
    <MainLayout title='Поиск' withSidePanels>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && (!products || products?.length === 0) && (
        <h1>Увы, ничего не найдено</h1>
      )}
      {!isLoading && products && products.length > 0 && (
        <ProductsGrid products={products} />
      )}
    </MainLayout>
  )
}
