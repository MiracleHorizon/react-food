import { Injectable } from '@nestjs/common'
import type { ProductCategory } from '@prisma/client'

import { ProductCategoryService } from '@resources/product-category/product-category.service'

@Injectable()
export class EnvironmentService {
  constructor(
    private readonly productCategoryService: ProductCategoryService
  ) {}

  public async findAllNavigationCategories(): Promise<ProductCategory[]> {
    const categories = await this.productCategoryService.findAll({})
    return categories.map(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ({ products, ...dataForNavigation }) => dataForNavigation
    )
  }
}
