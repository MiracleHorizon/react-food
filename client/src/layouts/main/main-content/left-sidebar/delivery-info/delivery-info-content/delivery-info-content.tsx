import { observer } from 'mobx-react-lite'

import ClockSvg from '@/ui/svg/clock-svg'
import DeliveryInfoAbout from '../delivery-info-about'
import { deliveryStore } from '@/stores/delivery.store'
import * as Content from './delivery-info-content.styled'

const DeliveryInfoContent = () => (
  <Content.Root>
    <Content.Time>
      <ClockSvg />
      <Content.TimeRange>
        {deliveryStore.description.getTimeRange()}
      </Content.TimeRange>
    </Content.Time>
    <Content.Price>
      Бесплатно от {deliveryStore.description.getFreeCost()}
    </Content.Price>
    <Content.ServiceFee>
      Работа сервиса {deliveryStore.description.getServiceFee()}
    </Content.ServiceFee>
    <DeliveryInfoAbout />
  </Content.Root>
)

export default observer(DeliveryInfoContent)
