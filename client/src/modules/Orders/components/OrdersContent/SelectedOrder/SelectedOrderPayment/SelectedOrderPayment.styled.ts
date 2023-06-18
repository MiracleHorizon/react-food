import styled from '@emotion/styled'
import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const List = styled.ul`
  margin-top: 16px;

  @media (max-width: 500px) {
    padding-bottom: 8px;
  }

  @media (${maxDeviceWidth.mobileLg}) {
    margin-top: 12px;
    padding-bottom: 4px;
  }
`

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;

  &:not(&:first-of-type) {
    margin-top: 12px;
  }

  span {
    font-size: 17px;
  }

  @media (max-width: 500px) {
    span {
      font-size: 15px;
    }
  }

  @media (${maxDeviceWidth.mobileMd}) {
    span {
      font-size: 13px;
    }
  }
`

export const TotalCost = styled(ListItem)`
  margin-top: 20px !important;

  span {
    font-size: 22px;
    font-weight: 500;
  }

  @media (max-width: 500px) {
    span {
      font-size: 18px;
    }
  }

  @media (${maxDeviceWidth.mobileMd}) {
    margin-top: 16px !important;

    span {
      font-size: 16px;
    }
  }
`
