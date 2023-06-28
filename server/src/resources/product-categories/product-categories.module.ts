import { Module } from '@nestjs/common'

import { PrismaService } from 'prisma/prisma.service'
import { ProductCategoriesService } from './product-categories.service'
import { ProductCategoriesController } from './product-categories.controller'

@Module({
  controllers: [ProductCategoriesController],
  providers: [ProductCategoriesService, PrismaService]
})
export class ProductCategoriesModule {}
