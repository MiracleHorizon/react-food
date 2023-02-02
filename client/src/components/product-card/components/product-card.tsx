import { FC, memo, useMemo } from "react";

import CardImage from "./product-card-image";
import CardContent from "./product-card-content";
import CardFooter from "./product-card-footer";
import { ShowcaseProduct, ShowcaseProductModel } from "@/entities/product";
import type { IProductCardVariant } from "../product-card-models";
import StyledWrapper from "./product-card.styled";

// TODO Обработка ошибки получения изображения продукта.
const ProductCard: FC<ShowcaseProductModel & IProductCardVariant> = ({
  variant,
  ...productData
}) => {
  const showcaseProduct = useMemo(() => {
    return new ShowcaseProduct(productData)
  }, [productData])
  const {
    title,
    image,
    imagePath,
    price: { withDiscount, discountPercent, description: priceDescription }
  } = showcaseProduct

  return (
    <StyledWrapper
      data-el='product-card'
      variant={variant}
      imageLoadError={!imagePath}
    >
      <CardImage
        alt={title}
        variant={variant}
        imagePath={image}
        withDiscount={withDiscount}
        discountPercent={discountPercent}
      />
      <CardContent
        variant={variant}
        title={title}
        weight={showcaseProduct.formattedWeight}
        {...priceDescription}
      />
      <CardFooter {...productData} />
    </StyledWrapper>
  )
}

export default memo(ProductCard)
