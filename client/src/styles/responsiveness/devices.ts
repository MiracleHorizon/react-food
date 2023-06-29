import { breakpoints } from './breakpoints'

export const maxDeviceWidth = {
  mobileSm: `max-width: ${breakpoints.mobileSm}px`,
  mobileMd: `max-width: ${breakpoints.mobileMd}px`,
  mobileLg: `max-width: ${breakpoints.mobileLg}px`,
  tablet: `max-width: ${breakpoints.tablet}px`,
  laptop: `max-width: ${breakpoints.laptop}px`,
  laptopLg: `max-width: ${breakpoints.laptopLg}px`,
  desktop: `max-width: ${breakpoints.desktop}px`,
  desktopLg: `max-width: ${breakpoints.desktopLg}px`
}

export const minDeviceWidth = {
  mobileSm: `min-width: ${breakpoints.mobileSm + 1}px`,
  mobileMd: `min-width: ${breakpoints.mobileMd + 1}px`,
  mobileLg: `min-width: ${breakpoints.mobileLg + 1}px`,
  tablet: `min-width: ${breakpoints.tablet + 1}px`,
  laptop: `min-width: ${breakpoints.laptop + 1}px`,
  laptopLg: `min-width: ${breakpoints.laptopLg + 1}px`,
  desktop: `min-width: ${breakpoints.desktop + 1}px`,
  desktopLg: `min-width: ${breakpoints.desktopLg + 1}px`
}
