import { useOrderStore } from '@stores/orderStore'
import { useSelectOrderCost } from '@hooks/selectors/useSelectOrderCost'
import { numberFormatter } from '@utils/NumberFormatter'
import { DEFAULT_CURRENCY_INTL_ARGS } from '@constants/intl'
import * as Cost from './TotalOrderCost.styled'

const TotalOrderCost = () => {
  const orderCost = useSelectOrderCost()
  const formattedOrderCost = numberFormatter.formatCurrency({
    value: orderCost,
    ...DEFAULT_CURRENCY_INTL_ARGS
  })

  return (
    <Cost.Root>
      {useOrderStore(state => state.withBonusCoins()) ? (
        <>
          <Cost.ThroughValue>{formattedOrderCost}</Cost.ThroughValue>
          <Cost.Value>{formattedOrderCost}</Cost.Value>
        </>
      ) : (
        <Cost.Value>{formattedOrderCost}</Cost.Value>
      )}
    </Cost.Root>
  )
}

export default TotalOrderCost
