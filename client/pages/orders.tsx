import Link from 'next/link'

import { Routes } from '@/types/routes'

const OrdersPage = () => {
  return (
    <div>
      <h1>Ваши заказы</h1>
      <Link href={Routes.HOME}>На домашнюю страницу</Link>
    </div>
  )
}

export default OrdersPage
