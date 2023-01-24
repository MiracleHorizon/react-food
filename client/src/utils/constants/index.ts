import { Range } from '@/models/range'

export const RUBLE_SIGN = '₽'
export const SPACE_SIGN = '&nbsp;'

export const PRODUCT_IMAGE_FALLBACK =
  'https://avatars.mds.yandex.net/get-bunker/50064/d72205e544198b757690858b7cf6245b7d8df050/orig'
export const CUTLERY_IMAGE_URL =
  'https://yastatic.net/s3/eda-front/www/assets/desktop.cutlery.e3a0fc1416ec68162897.svg'

export const READY_MEAL_TAGS = ['soup', 'salad', 'pasta']

// TODO Получать данные значения с сервера.
// В российских рублях.
export const SERVICE_FEE = 39
export const FREE_DELIVERY_ORDER_COST = 1500
export const MIN_ORDER_COST = 1000
export const DELIVERY_COST_RANGE: Range = {
  start: 0,
  end: 399
}
export const DELIVERY_TIME_RANGE: Range = {
  start: 30,
  end: 55
}
export const DELIVERY_DISTANCE = 5600
