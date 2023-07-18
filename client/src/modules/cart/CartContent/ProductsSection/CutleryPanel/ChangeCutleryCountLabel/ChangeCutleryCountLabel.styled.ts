import styled from '@emotion/styled'
import NextImage from 'next/image'

import { ChangeCountLabel as ChangeCountLabelComponent } from '@ui/ChangeCountLabel'

export const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Image = styled(NextImage)`
  margin-right: 10px;
`

export const TitleContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const Title = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`

export const ChangeCountLabel = styled(ChangeCountLabelComponent)`
  button {
    width: 40px;
    height: 40px;
  }

  span {
    margin: 0 4px;
  }

  @media screen and (max-width: 1230px) {
    button {
      width: 34px;
      height: 34px;
    }

    span {
      margin: 0;
    }
  }

  @media screen and (max-width: 480px) {
    button {
      width: 28px;
      height: 28px;
      border-radius: 10px;
    }

    span {
      min-width: 36px;
      font-size: 13px;
    }
  }
`
