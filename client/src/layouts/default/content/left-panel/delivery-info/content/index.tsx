import Currency from '@/ui/currency'
import ClockSvg from '@/ui/svg/ClockSvg'
import DeliveryAbout from '../about'
import { SERVICE_FEE } from '@/utils/constants'
import * as Content from './DeliveryInfoContent.styles'

// TODO Расчитывать время доставки и исходя из времени суток
// TODO Создать модальное окно и информацией о доставке
const DeliveryInfoContent = () => {
  return (
    <Content.Root>
      <Content.Time>
        <ClockSvg />
        <span>30-60 мин</span>
      </Content.Time>
      <Content.Price>
        Бесплатно от 1500
        <Currency />
      </Content.Price>
      <Content.ServiceFee>
        Работа сервиса {SERVICE_FEE}
        <Currency />
      </Content.ServiceFee>
      <DeliveryAbout />
    </Content.Root>
  )
}

export default DeliveryInfoContent
