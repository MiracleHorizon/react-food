import { type FC, memo } from 'react'

import { numberFormatter } from '@utils/NumberFormatter'
import { PRODUCT_IMAGE_FALLBACK } from '@constants/images'
import { DEFAULT_CURRENCY_INTL_ARGS } from '@constants/intl'
import type { OrderProductModel } from '@modules/Orders/models/OrderProduct'
import * as Item from './SelectedOrderListItem.styled'

export const SelectedOrderListItem: FC<OrderProductModel> = memo(
  ({ title, count, price, imagePath }) => (
    <Item.Root>
      <Item.LeftSide>
        <Item.ImageContainer>
          <Item.Image
            src={imagePath ?? PRODUCT_IMAGE_FALLBACK}
            alt={title}
            sizes='100%'
            fill
          />
        </Item.ImageContainer>
        <Item.Description>
          <span>{title}</span>
          <span>{count} шт</span>
        </Item.Description>
      </Item.LeftSide>
      <span>
        {numberFormatter.formatCurrency({
          value: price,
          ...DEFAULT_CURRENCY_INTL_ARGS
        })}
      </span>
    </Item.Root>
  )
)
