import { Module } from '@nestjs/common'

import { PrismaService } from 'prisma/prisma.service'
import { EnvironmentController } from './environment.controller'
import { EnvironmentService } from './environment.service'
import { ProductCategoriesService } from '@resources/product-categories/product-categories.service'

@Module({
  controllers: [EnvironmentController],
  providers: [EnvironmentService, PrismaService, ProductCategoriesService]
})
export class EnvironmentModule {}
