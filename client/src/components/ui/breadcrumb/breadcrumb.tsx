import { type FC, Fragment, memo } from 'react'
import { useRouter } from 'next/router'

import type { Props } from './Breadcrumb.types'
import * as Breadcrumb from './Breadcrumb.styled'

const BreadcrumbComponent: FC<Props> = ({
  items,
  separator,
  withFinishingSeparator,
  className
}) => {
  const router = useRouter()

  return (
    <Breadcrumb.Root className={className}>
      {items.map(({ title, href }, index) => (
        <Fragment key={href}>
          <Breadcrumb.Item href={href} selected={router.asPath === href}>
            {title}
          </Breadcrumb.Item>
          {(withFinishingSeparator || index !== items.length - 1) && (
            <Breadcrumb.Separator>{separator ?? '/'}</Breadcrumb.Separator>
          )}
        </Fragment>
      ))}
    </Breadcrumb.Root>
  )
}

export default memo(BreadcrumbComponent)
