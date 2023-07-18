import { numberFormatter } from '@utils/NumberFormatter'
import { DEFAULT_CURRENCY_INTL_ARGS } from '@constants/intl'
import { SERVICE_FEE } from '@constants/payment'
import * as Label from './ServiceFeeLabel.styled'

export const ServiceFeeLabel = () => (
  <Label.Root>
    <span>Работа сервиса</span>
    <Label.Value>
      {numberFormatter.formatCurrency({
        value: SERVICE_FEE,
        ...DEFAULT_CURRENCY_INTL_ARGS
      })}
    </Label.Value>
  </Label.Root>
)
