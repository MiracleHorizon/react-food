import { observer } from 'mobx-react-lite'

import CarBanner from '@/ui/banner/components/car-banner'
import { deliveryStore } from '@/stores/delivery.store'
import * as Info from './delivery-info.styled'

const DeliveryInfo = () => (
  <Info.Root>
    <CarBanner />
    <Info.Content>
      <Info.Title>{deliveryStore.description.getDescription()}</Info.Title>
      <Info.ServiceFee>
        Работа сервиса {deliveryStore.description.getServiceFee()}
      </Info.ServiceFee>
    </Info.Content>
  </Info.Root>
)

export default observer(DeliveryInfo)
