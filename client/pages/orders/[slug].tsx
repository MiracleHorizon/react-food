import { GetServerSidePropsContext, NextPage } from 'next'

import { ParsedUrlQueryHandler } from '@utils/ParsedUrlQueryHandler'
import { ordersService } from '@api/OrdersService'
import { Routes } from '@router/Routes.enum'
import type { OrderModel } from '@modules/Orders/models/Order'

const OrderPage: NextPage<Props> = () => {
  return <div></div>
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
