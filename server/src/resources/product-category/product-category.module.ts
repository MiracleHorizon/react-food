import { Module } from '@nestjs/common'

import { PrismaService } from 'prisma/prisma.service'
import { ProductCategoryService } from './product-category.service'
import { ProductCategoryController } from './product-category.controller'

@Module({
  controllers: [ProductCategoryController],
  providers: [ProductCategoryService, PrismaService]
})
export class ProductCategoryModule {}
