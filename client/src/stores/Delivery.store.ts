import { makeAutoObservable } from 'mobx'

import { DeliveryDescription } from '@/entities/delivery-description'
import {
  DELIVERY_COST_RANGE,
  DELIVERY_DISTANCE,
  DELIVERY_TIME_RANGE,
  FREE_DELIVERY_ORDER_COST,
  SERVICE_FEE
} from '@/utils/constants'

class DeliveryStore {
  public readonly description = new DeliveryDescription({
    distance: DELIVERY_DISTANCE,
    timeRange: DELIVERY_TIME_RANGE,
    costRange: DELIVERY_COST_RANGE,
    serviceFee: SERVICE_FEE,
    freeCost: FREE_DELIVERY_ORDER_COST
  })

  constructor() {
    makeAutoObservable(this)
  }
}

const deliveryStore = new DeliveryStore()

export default deliveryStore
