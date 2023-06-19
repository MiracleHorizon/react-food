import type { GetServerSidePropsContext, NextPage } from 'next'

import { Order, type OrderModel } from '@modules/Orders'
import { ordersService } from '@api/OrdersService'
import { useRefreshAuth } from '@hooks/useRefreshAuth'
import { ParsedUrlQueryHandler } from '@utils/ParsedUrlQueryHandler'
import { Routes } from '@router/Routes.enum'

const OrderPage: NextPage<Props> = ({ order }) => {
  useRefreshAuth()

  return <Order order={order} />
}

export default OrderPage

export const getServerSideProps = async ({
  query
}: GetServerSidePropsContext) => {
  try {
    const parsedUrlQueryHandler = new ParsedUrlQueryHandler(query)
    const orderId = parsedUrlQueryHandler.getSlug()
    const order = await ordersService.fetchUserOrderById(orderId)

    return {
      props: {
        order
      }
    }
  } catch {
    return {
      redirect: {
        destination: Routes.HOME,
        permanent: false
      }
    }
  }
}

interface Props {
  order: OrderModel
}
