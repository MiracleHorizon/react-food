import { FC, memo, useMemo } from 'react'

import Breadcrumb, { BreadcrumbItem } from '@/ui/breadcrumb/breadcrumb'
import { Routes } from '@router/routes.enum'
import type { Props as PageProps } from '@/pages/category/[categoryId]/subcategory/[subcategoryId]'
import type { ProductSubcategoryModel } from '@/modules/product-category'
import * as Header from './product-subcategory-header.styled'

const ProductSubcategoryHeader: FC<Props> = ({
  title,
  categoryId,
  categoryTitle
}) => {
  const breadcrumbItems: BreadcrumbItem[] = useMemo(() => {
    return [
      {
        title: 'Главная',
        href: '/'
      },
      {
        title: categoryTitle,
        href: `${Routes.CATEGORY}/${categoryId}`
      }
    ]
  }, [categoryId, categoryTitle])

  return (
    <Header.Root>
      <Breadcrumb items={breadcrumbItems} withFinishingSeparator />
      <Header.Title>{title}</Header.Title>
    </Header.Root>
  )
}

export default memo(ProductSubcategoryHeader)

type Props = Pick<ProductSubcategoryModel, 'categoryId' | 'title'> &
  Pick<PageProps, 'categoryTitle'>
