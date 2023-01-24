import { observer } from 'mobx-react-lite'

import ClockSvg from '@/ui/svg/ClockSvg'
import DeliveryInfoAbout from '../delivery-info-about'
import DeliveryStore from '@/stores/Delivery.store'
import * as Content from './delivery-info-content.styled'

const DeliveryInfoContent = () => (
  <Content.Root>
    <Content.Time>
      <ClockSvg />
      <Content.TimeRange>
        {DeliveryStore.description.getTimeRange()}
      </Content.TimeRange>
    </Content.Time>
    <Content.Price>
      Бесплатно от {DeliveryStore.description.getFreeCost()}
    </Content.Price>
    <Content.ServiceFee>
      Работа сервиса {DeliveryStore.description.getServiceFee()}
    </Content.ServiceFee>
    <DeliveryInfoAbout />
  </Content.Root>
)

export default observer(DeliveryInfoContent)
