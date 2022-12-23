import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import type { Response } from 'express'
import type { Product } from '@prisma/client'

import { PrismaService } from 'prisma/prisma.service'
import type { CreateProductParams } from '@/models/products/CreateProductParams'

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  // @Admin
  public async create({ productData, productCategoryId }: CreateProductParams) {
    return await this.prisma.product.create({
      data: {
        ...productData,
        productCategoryId
      }
    })
  }

  // @User & @Admin
  public async getOne(productId: string): Promise<Product> {
    const product = await this.prisma.product.findUnique({
      where: {
        id: productId
      }
    })

    if (!product) {
      throw new NotFoundException('Product is not found.')
    }

    return product
  }

  // @User & @Admin
  public async getAll() {
    return await this.prisma.product.findMany()
  }

  // @Admin
  public async delete(productId: string, res: Response) {
    try {
      await this.prisma.product.delete({
        where: {
          id: productId
        }
      })

      return res.send({
        message: 'Product successfully deleted'
      })
    } catch {
      throw new BadRequestException('Something went wrong.')
    }
  }

  // @Admin
  public async deleteAllByCategory(categoryId: string, res: Response) {
    try {
      await this.prisma.product.deleteMany({
        where: {
          productCategoryId: categoryId
        }
      })

      return res.send({
        message: `All products from category ${categoryId} have been successfully deleted.`
      })
    } catch {
      throw new BadRequestException('Something went wrong.')
    }
  }
}
