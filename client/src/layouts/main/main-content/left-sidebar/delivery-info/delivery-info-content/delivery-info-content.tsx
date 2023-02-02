import { observer } from 'mobx-react-lite'

import ClockSvg from '@/ui/svg/clock-svg'
import DeliveryInfoAbout from '../delivery-info-about'
import { useDeliveryStore } from '@/stores/delivery.store'
import * as Content from './delivery-info-content.styled'

const DeliveryInfoContent = () => (
  <Content.Root>
    <Content.Time>
      <ClockSvg />
      <Content.TimeRange>
        {useDeliveryStore.description.formattedTimeRange}
      </Content.TimeRange>
    </Content.Time>
    <Content.Price>
      Бесплатно от {useDeliveryStore.description.formattedFreeCost}
    </Content.Price>
    <Content.ServiceFee>
      Работа сервиса {useDeliveryStore.description.formattedServiceFee}
    </Content.ServiceFee>
    <DeliveryInfoAbout />
  </Content.Root>
)

export default observer(DeliveryInfoContent)
