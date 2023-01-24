import { observer } from 'mobx-react-lite'

import CarBanner from '@/ui/banner/components/car-banner'
import DeliveryStore from '@/stores/Delivery.store'
import * as Info from './delivery-info.styled'

const DeliveryInfo = () => (
  <Info.Root>
    <CarBanner />
    <Info.Content>
      <Info.Title>{DeliveryStore.description.getDescription()}</Info.Title>
      <Info.ServiceFee>
        Работа сервиса {DeliveryStore.description.getServiceFee()}
      </Info.ServiceFee>
    </Info.Content>
  </Info.Root>
)

export default observer(DeliveryInfo)
