import { useMemo } from 'react'
import { observer } from 'mobx-react-lite'

import { useDeliveryStore } from '@/stores/delivery.store'
import * as Content from './delivery-info-modal-content.styled'

// TODO: Доработать все, что связано с этим компонентом.
const DeliveryInfoModalContent = () => {
  const data = useMemo(
    () => [
      {
        title: 'Стоимость',
        content: useDeliveryStore.getCostInformation()
      },
      {
        title: 'Детали',
        content: useDeliveryStore.getDetails()
      }
    ],
    []
  )

  return (
    <div>
      {data.map(({ title, content }) => (
        <Content.List key={title}>
          <Content.ListTitle>{title}</Content.ListTitle>
          {content.map(({ title, value }) => (
            <Content.ListItem key={title}>
              <span>{title}</span>
              <span>{value}</span>
            </Content.ListItem>
          ))}
        </Content.List>
      ))}
    </div>
  )
}

export default observer(DeliveryInfoModalContent)
