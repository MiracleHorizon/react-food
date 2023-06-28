import { Module } from '@nestjs/common'

import { PrismaService } from 'prisma/prisma.service'
import { ProductService } from '../product/product.service'
import { ProductSubcategoriesService } from './product-subcategories.service'
import { ProductSubcategoriesController } from './product-subcategories.controller'

@Module({
  controllers: [ProductSubcategoriesController],
  providers: [ProductSubcategoriesService, ProductService, PrismaService]
})
export class ProductSubcategoriesModule {}
