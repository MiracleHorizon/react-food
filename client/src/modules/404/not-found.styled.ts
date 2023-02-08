import styled from '@emotion/styled'
import NextImage from 'next/image'

import notFoundImage from '@images/not-found-image.png'
import { devicesMaxWidth } from '@styles/responsive/devices'
import { colors } from '@styles/variables'

export const smallScreenBreakpoint = 600
export const smallScreenMaxWidth = `max-width: ${smallScreenBreakpoint}px`

export const Root = styled.div`
  font-family: 'Proxima Nova', sans-serif;
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 200px;
  background: ${colors.gray['2']};
  color: ${colors.black['1']};

  @media (${devicesMaxWidth.laptop}) {
    padding: 0;
  }

  @media (${smallScreenMaxWidth}) {
    background-image: url('${notFoundImage.src}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
  }
`

export const Wrapper = styled.div`
  max-width: 980px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (${devicesMaxWidth.laptop}) {
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
  }

  @media (${smallScreenMaxWidth}) {
    justify-content: flex-start;
    flex-direction: column;
    padding: 25vh 15px 0;
  }
`

export const Image = styled(NextImage)`
  object-fit: cover;

  @media (${smallScreenMaxWidth}) {
    display: none;
  }
`
