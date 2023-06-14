import { Module } from '@nestjs/common'

import { PrismaService } from 'prisma/prisma.service'
import { UsersService } from '@resources/users/users.service'
import { ProductService } from './product.service'

@Module({
  providers: [UsersService, ProductService, PrismaService]
})
export class ProductModule {}
