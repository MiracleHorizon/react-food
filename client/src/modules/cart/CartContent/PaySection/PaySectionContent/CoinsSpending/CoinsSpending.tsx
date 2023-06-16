import { useMemo } from 'react'

import type { SegmentedControlItemModel } from '@ui/SegmentedControl'
import * as Styled from './CoinsSpending.styled'

const CoinsSpending = () => {
  // TODO: Доделать
  const items: SegmentedControlItemModel[] = useMemo(() => {
    // const accumulationCoins = Math.floor(useCartStore.totalCost / 100) * 3
    // const user = useUserStore.user
    // if (!user) return []

    return [
      { title: 'Накопить' },
      { title: 'Потратить' }
      // { title: 'Накопить', icon: <ReactCoins value={accumulationCoins} /> },
      // { title: 'Потратить', icon: <ReactCoins value={user.reactCoinsCount} /> }
    ]
  }, [])

  return (
    <Styled.Root>
      <article>
        <Styled.Title>Баллы React</Styled.Title>
      </article>
      <Styled.SegmentedControl items={items} onChange={() => {}} />
    </Styled.Root>
  )
}

export default CoinsSpending
