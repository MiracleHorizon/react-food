import { type FC, useMemo } from 'react'

import { Breadcrumb, type BreadcrumbItem } from '@ui/Breadcrumb'
import { Routes } from '@router/Routes.enum'
import type { ProductSubcategoryModel } from '@models/productCategory/ProductSubcategory'
import * as Header from './ProductSubcategoryHeader.styled'

export const ProductSubcategoryHeader: FC<Props> = ({
  title,
  categoryId,
  categoryTitle
}) => {
  const breadcrumbItems: BreadcrumbItem[] = useMemo(() => {
    return [
      {
        title: 'Главная',
        href: Routes.HOME
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
      <Header.TitleArticle>
        <Header.Title>{title}</Header.Title>
      </Header.TitleArticle>
    </Header.Root>
  )
}

type Props = Pick<
  ProductSubcategoryModel,
  'title' | 'categoryId' | 'categoryTitle'
>
