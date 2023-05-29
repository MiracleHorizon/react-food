import type { Range } from '@app-types/Range'

export interface DeliveryInfo {
  distance: number
  timeRange: Range
  costRange: Range
  freeCostMark: number
  serviceFee: number
}
