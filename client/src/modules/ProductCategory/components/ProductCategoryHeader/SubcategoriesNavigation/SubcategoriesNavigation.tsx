import { type FC, memo, useCallback } from 'react'

import ChevronSvg from '@ui/svg/ChevronSvg'
import SubcategoriesNavigationItem from './SubcategoriesNavigationItem'
import { useToggle } from '@hooks/useToggle'
import type { ProductSubcategoryModel } from '@models/productCategory/ProductSubcategory'
import * as Navigation from './SubcategoriesNavigation.styled'

const MAX_DISPLAY_ITEMS: number = 10

const SubcategoriesNavigation: FC<Props> = ({ subcategories }) => {
  const { isOpen: isExpanded, toggle } = useToggle(false)

  const renderItems = useCallback((items: ProductSubcategoryModel[]) => {
    return items.map(subcategory => (
      <SubcategoriesNavigationItem key={subcategory.id} {...subcategory} />
    ))
  }, [])

  return (
    <Navigation.Root>
      <Navigation.List>
        {renderItems(subcategories.slice(0, MAX_DISPLAY_ITEMS))}
        <>
          {isExpanded && renderItems(subcategories.slice(MAX_DISPLAY_ITEMS))}
          {subcategories.length > MAX_DISPLAY_ITEMS && (
            <Navigation.ToggleExpandButton
              isExpanded={isExpanded}
              onClick={toggle}
            >
              <span>
                {isExpanded
                  ? 'Скрыть'
                  : `Ещё ${subcategories.length - MAX_DISPLAY_ITEMS}`}
              </span>
              <ChevronSvg />
            </Navigation.ToggleExpandButton>
          )}
        </>
      </Navigation.List>
    </Navigation.Root>
  )
}

export default memo(SubcategoriesNavigation)

interface Props {
  subcategories: ProductSubcategoryModel[]
}
