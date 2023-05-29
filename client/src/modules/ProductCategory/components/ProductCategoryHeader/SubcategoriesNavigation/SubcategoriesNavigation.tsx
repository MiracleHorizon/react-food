import { type FC, memo, useCallback, useState } from 'react'

import ArrowSvg from '@ui/svg/ArrowSvg'
import SubcategoriesNavigationItem from './SubcategoriesNavigationItem'
import type { ProductSubcategoryModel } from '@models/productCategory/ProductSubcategory'
import * as Navigation from './SubcategoriesNavigation.styled'

const MAX_ITEMS = 10

const SubcategoriesNavigation: FC<Props> = ({ subcategories }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleIsExpanded = () => setIsExpanded(prevState => !prevState)

  const renderItems = useCallback((items: ProductSubcategoryModel[]) => {
    return items.map(subcategory => (
      <SubcategoriesNavigationItem key={subcategory.id} {...subcategory} />
    ))
  }, [])

  return (
    <Navigation.Root>
      <Navigation.List>
        {renderItems(subcategories.slice(0, MAX_ITEMS))}
        <>
          {isExpanded && renderItems(subcategories.slice(MAX_ITEMS))}
          {subcategories.length > MAX_ITEMS && (
            <Navigation.ToggleExpandButton
              isExpanded={isExpanded}
              onClick={toggleIsExpanded}
            >
              <span>
                {isExpanded
                  ? 'Скрыть'
                  : `Ещё ${subcategories.length - MAX_ITEMS}`}
              </span>
              <ArrowSvg />
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
