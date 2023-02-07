import { FC, memo, useCallback, useState } from 'react'

import ArrowSvg from '@/ui/svg/arrow-svg'
import NavigationItem from './subcategories-navigation-item'
import type { ProductSubcategoryModel } from '@/modules/product-category'
import * as Navigation from './subcategories-navigation.styled'

const MAX_ITEMS = 10

const SubcategoriesNavigation: FC<Props> = ({ subcategories }) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => setExpanded(prevState => !prevState)

  const renderItems = useCallback((items: ProductSubcategoryModel[]) => {
    return items.map(subcategory => (
      <NavigationItem key={subcategory.id} {...subcategory} />
    ))
  }, [])

  return (
    <Navigation.Root>
      <Navigation.List>
        {renderItems(subcategories.slice(0, MAX_ITEMS))}
        {subcategories.length > MAX_ITEMS && (
          <>
            {expanded && renderItems(subcategories.slice(MAX_ITEMS))}
            <Navigation.ToggleExpandButton
              expanded={expanded}
              onClick={toggleExpanded}
            >
              <span>
                {expanded
                  ? 'Скрыть'
                  : `Ещё ${subcategories.length - MAX_ITEMS}`}
              </span>
              <ArrowSvg />
            </Navigation.ToggleExpandButton>
          </>
        )}
      </Navigation.List>
    </Navigation.Root>
  )
}

export default memo(SubcategoriesNavigation)

interface Props {
  subcategories: ProductSubcategoryModel[]
}
