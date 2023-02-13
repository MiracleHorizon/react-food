import { Module } from '@nestjs/common'

import { ProductService } from './product.service'
import { UsersService } from '@/resources/users/users.service'
import { PrismaService } from '../../../prisma/prisma.service'

@Module({
  providers: [UsersService, ProductService, PrismaService]
})
export class ProductModule {}
