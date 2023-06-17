import { useOrderStore } from '@stores/orderStore'
import { useSelectOrderCostDetails } from '@hooks/selectors/useSelectOrderCostDetails'
import { numberFormatter } from '@utils/NumberFormatter'
import { DEFAULT_CURRENCY_INTL_ARGS } from '@constants/intl'
import * as Cost from './TotalOrderCost.styled'

const TotalOrderCost = () => {
  const { totalCost } = useSelectOrderCostDetails()
  const formattedOrderCost = numberFormatter.formatCurrency({
    value: totalCost,
    ...DEFAULT_CURRENCY_INTL_ARGS
  })

  // TODO: withBonusCoins
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
