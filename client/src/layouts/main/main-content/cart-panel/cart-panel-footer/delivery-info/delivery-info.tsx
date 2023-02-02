import { observer } from 'mobx-react-lite'

import CarBanner from '@/ui/banner/components/car-banner'
import { useDeliveryStore } from '@/stores/delivery.store'
import * as Info from './delivery-info.styled'

const DeliveryInfo = () => (
  <Info.Root>
    <CarBanner />
    <Info.Content>
      <Info.Title>{useDeliveryStore.description.description}</Info.Title>
      <Info.ServiceFee>
        Работа сервиса {useDeliveryStore.description.formattedServiceFee}
      </Info.ServiceFee>
    </Info.Content>
  </Info.Root>
)

export default observer(DeliveryInfo)
