import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

const AvatarComponent = dynamic(import('@ui/Avatar').then(mod => mod.Avatar))

export const Avatar = styled(AvatarComponent)`
  margin-left: 6px;
`
