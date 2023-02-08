import type { Range } from '@app-types/range'

export interface DeliveryDescriptionModel {
  distance: number
  timeRange: Range
  costRange: Range
  serviceFee: number
  freeCost: number
}
