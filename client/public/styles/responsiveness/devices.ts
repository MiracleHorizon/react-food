import { breakpoints } from './breakpoints'

export const maxDeviceWidth = {
  mobileSm: `max-width: ${breakpoints.mobileSm}`,
  mobileMd: `max-width: ${breakpoints.mobileMd}`,
  mobileLg: `max-width: ${breakpoints.mobileLg}`,
  tablet: `max-width: ${breakpoints.tablet}`,
  laptop: `max-width: ${breakpoints.laptop}`,
  laptopLg: `max-width: ${breakpoints.laptopLg}`,
  desktop: `max-width: ${breakpoints.desktop}`,
  desktopLg: `max-width: ${breakpoints.desktopLg}`
}

export const minDeviceWidth = {
  mobileSm: `min-width: ${breakpoints.mobileSm}`,
  mobileMd: `min-width: ${breakpoints.mobileMd}`,
  mobileLg: `min-width: ${breakpoints.mobileLg}`,
  tablet: `min-width: ${breakpoints.tablet}`,
  laptop: `min-width: ${breakpoints.laptop}`,
  laptopLg: `min-width: ${breakpoints.laptopLg}`,
  desktop: `min-width: ${breakpoints.desktop}`,
  desktopLg: `min-width: ${breakpoints.desktopLg}`
}
