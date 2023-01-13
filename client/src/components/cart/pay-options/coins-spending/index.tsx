import SegmentedControl from '@/ui/segmented-control'
import Coins from '@/ui/coins'

const mockOptions = [
  {
    title: 'Накопить',
    value: 'Накопить',
    icon: <Coins count={19} />
  },
  {
    title: 'Списать',
    value: 'Списать',
    icon: <Coins count={127} />
  }
]

const CoinsSpending = () => {
  return (
    <div style={{ marginBottom: 24 }}>
      <h3>Баллы React</h3>
      <SegmentedControl items={mockOptions} />
    </div>
  )
}

export default CoinsSpending
