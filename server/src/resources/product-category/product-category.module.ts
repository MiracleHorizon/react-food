import { Module } from '@nestjs/common'

import { ProductService } from '../product/product.service'
import { ProductCategoryService } from './product-category.service'
import { ProductCategoryController } from './product-category.controller'

@Module({
  controllers: [ProductCategoryController],
  providers: [ProductCategoryService, ProductService]
})
export class ProductCategoryModule {}
