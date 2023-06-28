import { Injectable } from '@nestjs/common'
import type { ProductCategory } from '@prisma/client'

import { ProductCategoriesService } from '@resources/product-categories/product-categories.service'

@Injectable()
export class EnvironmentService {
  constructor(
    private readonly productCategoryService: ProductCategoriesService
  ) {}

  public async findAllNavigationCategories(): Promise<ProductCategory[]> {
    const categories = await this.productCategoryService.findAll({})
    return categories.map(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ({ products, ...dataForNavigation }) => dataForNavigation
    )
  }
}
