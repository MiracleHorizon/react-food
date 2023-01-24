import { Module } from '@nestjs/common'

import { ProductSubcategoryService } from './product-subcategory.service'
import { ProductSubcategoryController } from './product-subcategory.controller'
import { ProductService } from '../product/product.service'

@Module({
  controllers: [ProductSubcategoryController],
  providers: [ProductSubcategoryService, ProductService]
})
export class ProductSubcategoryModule {}
