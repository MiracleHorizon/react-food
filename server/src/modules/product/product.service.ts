import { Injectable, NotFoundException } from '@nestjs/common'

import { PrismaService } from 'prisma/prisma.service'
import { CreateProductDto } from './dto/create-product.dto'

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  public async createProduct(data: CreateProductDto) {
    await this.prismaService.product.create({ data })

    return {
      message: 'product created'
    }
  }

  public async getProduct(id: string) {
    const product = await this.prismaService.product.findFirst({
      where: { id }
    })

    if (!product) {
      throw new NotFoundException()
    }

    return product
  }

  public async getAllProducts() {
    return await this.prismaService.product.findMany()
  }
}
