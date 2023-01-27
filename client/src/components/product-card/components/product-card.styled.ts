import styled from '@emotion/styled'

import { IProductCardVariant, ProductCardVariant } from '../product-card-models'

const StyledWrapper = styled.div<WrapperProps>`
  cursor: pointer;
  width: ${p => (p.variant === ProductCardVariant.SMALL ? '172px' : '224px')};
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 24px;
  background: white;
  transition: background 100ms ease-in;

  img {
    object-fit: ${p => (p.imageLoadError ? 'contain' : 'cover')};
  }
`

export default StyledWrapper

interface WrapperProps extends IProductCardVariant {
  imageLoadError: boolean
}
