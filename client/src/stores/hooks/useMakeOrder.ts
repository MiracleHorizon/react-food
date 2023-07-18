import { useCallback } from 'react'
import { useRouter } from 'next/router'

import { ordersService } from '@api/OrdersService'
import { useCartStore } from '@stores/cartStore'
import { useUserStore } from '@stores/userStore'
import { useCutleryStore } from '@stores/cutleryStore'
import { useResetOrder } from '@stores/hooks/useResetOrder'
import { useSelectOrderCostDetails } from '@stores/hooks/useSelectOrderCostDetails'
import { Routes } from '@router/Routes.enum'
import { SERVICE_FEE } from '@constants/payment'
import type { CreateOrderDto } from '@models/order/CreateOrderDto'
import type { DeliveryAddressDetailsForOrder } from '@models/user/DeliveryAddressDetailsForOrder'

export const useMakeOrder = () => {
  const router = useRouter()

  const user = useUserStore(state => state.user)
  const deliveryAddress = useUserStore(state => state.selectedAddress)
  const products = useCartStore(state => state.products)
  const cutleryCount = useCutleryStore(state => state.count)

  const orderCost = useSelectOrderCostDetails()
  const { handleResetOrder } = useResetOrder()

  const navigateToOrdersPage = useCallback(
    () => router.replace(Routes.ORDERS),
    [router]
  )

  // TODO: Phone number
  const makeOrder = useCallback(
    (deliveryAddressDetails: DeliveryAddressDetailsForOrder) => {
      if (!deliveryAddress || !user || !user.phoneNumber) return

      // TODO: Что делать с id?
      const createOrderDto: CreateOrderDto = {
        ...orderCost,
        deliveryAddress: {
          ...deliveryAddress,
          ...deliveryAddressDetails
        },
        cutleryCount,
        serviceFee: SERVICE_FEE,
        productsData: products.map(product => product.getData()),
        recipientName: user.name,
        recipientPhoneNumber: user.phoneNumber
      }

      ordersService
        .create(createOrderDto)
        .then(handleResetOrder)
        .then(navigateToOrdersPage)
    },
    [
      deliveryAddress,
      user,
      orderCost,
      cutleryCount,
      products,
      handleResetOrder,
      navigateToOrdersPage
    ]
  )

  return { makeOrder }
}
