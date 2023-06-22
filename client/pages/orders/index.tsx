import axios from 'axios'
import type { GetServerSidePropsContext, NextPage } from 'next'

import { type OrderModel, Orders } from '@modules/Orders'
import { Routes } from '@router/Routes.enum'
import { SERVER_API } from '@constants/env'
import { ACCESS_TOKEN_COOKIE_NAME } from '@constants/cookie'

const OrdersPage: NextPage<Props> = ({ orders }) => <Orders orders={orders} />

export default OrdersPage

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const accessToken = context.req.cookies[ACCESS_TOKEN_COOKIE_NAME]

  if (!accessToken) {
    return {
      redirect: {
        destination: Routes.HOME,
        permanent: false
      }
    }
  }

  try {
    const { data } = await axios.get(SERVER_API + '/orders', {
      headers: {
        Cookie: 'accessToken=' + accessToken
      }
    })

    return {
      props: {
        orders: data
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
  orders: OrderModel[]
}
