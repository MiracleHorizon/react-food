import { Module } from '@nestjs/common'

import { ProductSubcategoryService } from './product-subcategory.service'
import { ProductSubcategoryController } from './product-subcategory.controller'

@Module({
  controllers: [ProductSubcategoryController],
  providers: [ProductSubcategoryService]
})
export class ProductSubcategoryModule {}
