import { screenBreakpoints } from './screenBreakpoints'

export const devicesMaxWidth = {
  mobileS: `(max-width: ${screenBreakpoints.mobileS})`,
  mobileM: `(max-width: ${screenBreakpoints.mobileM})`,
  mobileL: `(max-width: ${screenBreakpoints.mobileL})`,
  tablet: `(max-width: ${screenBreakpoints.tablet})`,
  laptop: `(max-width: ${screenBreakpoints.laptop})`,
  laptopL: `(max-width: ${screenBreakpoints.laptopL})`,
  desktop: `(max-width: ${screenBreakpoints.desktop})`,
  desktopL: `(max-width: ${screenBreakpoints.desktop})`
}

export const devicesMinWidth = {
  mobileS: `(min-width: ${screenBreakpoints.mobileS})`,
  mobileM: `(min-width: ${screenBreakpoints.mobileM})`,
  mobileL: `(min-width: ${screenBreakpoints.mobileL})`,
  tablet: `(min-width: ${screenBreakpoints.tablet})`,
  laptop: `(min-width: ${screenBreakpoints.laptop})`,
  laptopL: `(min-width: ${screenBreakpoints.laptopL})`,
  desktop: `(min-width: ${screenBreakpoints.desktop})`,
  desktopL: `(min-width: ${screenBreakpoints.desktop})`
}
