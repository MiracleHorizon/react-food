import { CarBanner } from '@ui/Banner'
import { numberFormatter } from '@utils/NumberFormatter'
import { SERVICE_FEE } from '@constants/payment'
import { DEFAULT_CURRENCY_INTL_ARGS } from '@constants/intl'
import * as Info from './DeliveryInfo.styled'

const DeliveryInfo = () => (
  <Info.Root>
    <CarBanner />
    <Info.Content>
      <Info.Title>10 - 20 минут</Info.Title>
      <Info.ServiceFee>
        Работа сервиса{' '}
        {numberFormatter.formatCurrency({
          value: SERVICE_FEE,
          ...DEFAULT_CURRENCY_INTL_ARGS
        })}
      </Info.ServiceFee>
    </Info.Content>
  </Info.Root>
)

export default DeliveryInfo
