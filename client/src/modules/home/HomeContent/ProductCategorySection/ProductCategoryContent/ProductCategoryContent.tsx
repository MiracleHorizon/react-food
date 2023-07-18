import { type FC, useRef, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'

import { CarouselButton } from '@ui/CarouselButton'
import { LoadMoreButton } from './LoadMoreButton'
import { ShowcaseProductCardVariant } from '@components/products/ShowcaseProductCard'
import type { ShowcaseProductModel } from '@models/product/ShowcaseProduct'
import * as Content from './ProductCategoryContent.styled'

export const ProductCategoryContent: FC<Props> = ({ id, products }) => {
  const scrollRef = useRef<HTMLUListElement>(null)
  const { scrollXProgress } = useScroll({ container: scrollRef })
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const slide = () => {
    if (!scrollRef.current) return

    const scrollNode = scrollRef.current
    const scrollLeft = scrollNode.scrollLeft
    const scrollWidth = scrollNode.scrollWidth
    const scrollWidthPercent = scrollWidth / 100
    const scrollNodeWidth = scrollNode.offsetWidth

    return {
      next() {
        const left = scrollLeft + scrollWidthPercent * 50
        scrollNode.scrollTo({
          left,
          top: 0,
          behavior: 'smooth'
        })

        setAtStart(false)
        if (left + scrollNodeWidth >= scrollWidth) {
          setAtEnd(true)
        }
      },
      prev() {
        const left = scrollLeft - scrollWidthPercent * 50
        scrollNode.scrollTo({
          left,
          top: 0,
          behavior: 'smooth'
        })

        setAtEnd(false)
        if (left <= 0) {
          setAtStart(true)
        }
      }
    }
  }

  const slideNext = () => slide()?.next()

  const slidePrev = () => slide()?.prev()

  const handleScrollProgress = (latest: number) => {
    if (latest <= 0) {
      setAtStart(true)
    }

    if (latest > 0 && latest < 1) {
      setAtStart(false)
      setAtEnd(false)
    }

    if (latest >= 1) {
      setAtEnd(true)
    }
  }

  useMotionValueEvent(scrollXProgress, 'change', handleScrollProgress)

  return (
    <Content.Root>
      <CarouselButton
        direction='prev'
        onClick={slidePrev}
        isActive={!atStart}
      />
      <CarouselButton direction='next' onClick={slideNext} isActive={!atEnd} />
      <Content.Scroll ref={scrollRef}>
        {products.map(product => (
          <Content.ProductCard
            key={product.id}
            variant={ShowcaseProductCardVariant.SMALL}
            {...product}
          />
        ))}
        <LoadMoreButton productCategoryId={id} />
      </Content.Scroll>
    </Content.Root>
  )
}

interface Props {
  id: string
  products: ShowcaseProductModel[]
}
