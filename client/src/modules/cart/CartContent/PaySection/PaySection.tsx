import type { FC } from 'react'

import SectionHeader from './PaySectionHeader'
import SectionContent from './PaySectionContent'
import SectionFooter from './PaySectionFooter'
import { SectionRoot } from '../CartContent.styled'

// TODO: Payment?
const PaySection: FC<Props> = props => (
  <SectionRoot>
    <SectionHeader />
    <SectionContent />
    <SectionFooter {...props} />
  </SectionRoot>
)

export default PaySection

interface Props {
  startOrdering: VoidFunction
}
