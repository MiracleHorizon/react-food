import { useQuery } from 'react-query'
import { useEffect } from 'react'

import Home from '@/components/Home'
import DefaultLayout from '@/layouts/Default'
import CartStore from '@/stores/CartStore'
import { CartService } from '@/services/CartService'

const HomePage = () => {
  // TODO Почитать докумантацию React-Query
  // TODO Прочитать про SSR и Next в React-Query
  const { isSuccess, data } = useQuery('fetchCart', CartService.fetchCart, {
    refetchOnWindowFocus: false
  })

  useEffect(() => {
    if (isSuccess && data) {
      CartStore.setProducts(data)
    }
  }, [isSuccess, data])

  return (
    <DefaultLayout title='React.Еда'>
      <Home />
    </DefaultLayout>
  )
}

export default HomePage
