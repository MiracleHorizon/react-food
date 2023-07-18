import type { FC } from 'react'

import { PaymentSectionHeader } from './PaymentSectionHeader'
import { PaymentSectionContent } from './PaymentSectionContent'
import { PaymentSectionFooter } from './PaymentSectionFooter'
import { SectionRoot } from '../CartContent.styled'

export const PaymentSection: FC<Props> = props => (
  <SectionRoot>
    <PaymentSectionHeader />
    <PaymentSectionContent />
    <PaymentSectionFooter {...props} />
  </SectionRoot>
)

interface Props {
  startOrdering: VoidFunction
}
