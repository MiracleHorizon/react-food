import { Oval } from 'react-loader-spinner'
import type { BaseProps } from 'react-loader-spinner/dist/type'
import type { FC } from 'react'

import { colors } from '@styles/colors'
import { Root } from './Loader.styled'

export const Loader: FC<Props> = ({
  fullScreen,
  color,
  secondaryColor,
  strokeWidth,
  ...otherStyles
}) => (
  <Root fullScreen={fullScreen}>
    <Oval
      width={70}
      height={70}
      color={color ?? 'darkGray'}
      secondaryColor={secondaryColor ?? colors.gray['8']}
      strokeWidth={strokeWidth ?? 3}
      {...otherStyles}
    />
  </Root>
)

interface Props extends OvalProps {
  fullScreen?: boolean
}

interface OvalProps extends BaseProps {
  strokeWidth?: string | number
  strokeWidthSecondary?: string | number
  secondaryColor?: string
}
