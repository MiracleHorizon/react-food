import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { maxDeviceWidth } from '@styles/responsiveness/devices'

const calculateMaxWidth = () => {
  // TODO: Variables
  const cartSbWidth = 320
  const navSbWidth = 240
  const smNavSbWidth = 50
  const defaultPx = 55
  const px1680 = 35
  const px1240 = 24
  const sbMx = 32
  const smSbMx = 22

  return css`
    width: 100%;
    max-width: calc(
      100vw - ${cartSbWidth + navSbWidth + defaultPx * 2 + sbMx * 2}px
    );

    @media screen and (max-width: 1680px) {
      max-width: calc(
        100vw - ${cartSbWidth + navSbWidth + px1680 * 2 + sbMx * 2}px
      );
    }

    @media screen and (max-width: 1240px) {
      max-width: calc(100vw - ${navSbWidth + px1240 * 2 + sbMx}px);
    }

    @media screen and (max-width: 1025px) {
      max-width: calc(100vw - ${smNavSbWidth + px1240 * 2 + smSbMx}px);
    }

    @media screen and (${maxDeviceWidth.tablet}) {
      max-width: calc(100vw - ${px1240 * 2}px);
    }
  `
}

export const Root = styled.main`
  height: 100%;
  max-width: 1200px;
  ${calculateMaxWidth()};
`
