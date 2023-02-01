import { Module } from '@nestjs/common'

import { ProductService } from '../product/product.service'
import { ProductSubcategoryService } from './product-subcategory.service'
import { ProductSubcategoryController } from './product-subcategory.controller'

@Module({
  controllers: [ProductSubcategoryController],
  providers: [ProductSubcategoryService, ProductService]
})
export class ProductSubcategoryModule {}
