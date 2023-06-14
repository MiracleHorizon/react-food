import { Module } from '@nestjs/common'

import { PrismaService } from 'prisma/prisma.service'
import { EnvironmentController } from './environment.controller'
import { EnvironmentService } from './environment.service'
import { ProductCategoryService } from '@resources/product-category/product-category.service'

@Module({
  controllers: [EnvironmentController],
  providers: [EnvironmentService, PrismaService, ProductCategoryService]
})
export class EnvironmentModule {}
