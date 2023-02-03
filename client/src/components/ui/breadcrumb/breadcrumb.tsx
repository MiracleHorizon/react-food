import { FC, Fragment, memo } from 'react'
import { useRouter } from 'next/router'

import * as Breadcrumb from './breadcrumb.styled'

const BreadcrumbComponent: FC<Props> = ({
  items,
  separator,
  withFinishingSeparator
}) => {
  const router = useRouter()

  return (
    <Breadcrumb.Root>
      {items.map(({ title, href }, i) => (
        <Fragment key={href}>
          <Breadcrumb.Item href={href} selected={router.asPath === href}>
            {title}
          </Breadcrumb.Item>
          {(withFinishingSeparator || i !== items.length - 1) && (
            <Breadcrumb.Separator>{separator ?? '/'}</Breadcrumb.Separator>
          )}
        </Fragment>
      ))}
    </Breadcrumb.Root>
  )
}

export default memo(BreadcrumbComponent)

export interface BreadcrumbItem {
  title: string
  href: string
}

interface Props {
  items: BreadcrumbItem[]
  separator?: string
  withFinishingSeparator?: boolean
}
