import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'

import { PrismaService } from 'prisma/prisma.service'
import type { CreateProductArgs } from '@/models/product/create-product-args'
import type { CreateManyProductsArgs } from '@/models/product/create-many-products-args'

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  public async createOne({
    productSubcategoryId,
    dto
  }: CreateProductArgs): Promise<void> {
    const isProductExist = await this.existInSubcategory(
      productSubcategoryId,
      dto.title
    )

    if (isProductExist) {
      throw new BadRequestException('Product already exists.')
    }

    await this.prisma.product.create({
      data: {
        ...dto,
        productSubcategoryId
      }
    })
  }

  public async createMany({
    dtos,
    productSubcategoryId
  }: CreateManyProductsArgs): Promise<void> {
    await this.prisma.product.createMany({
      data: dtos.map(dto => ({ ...dto, productSubcategoryId })),
      skipDuplicates: true
    })
  }

  private async existInSubcategory(
    productSubcategoryId: string,
    title: string
  ): Promise<boolean> {
    const productSubcategory = await this.prisma.productSubcategory.findFirst({
      where: {
        id: productSubcategoryId
      }
    })

    if (!productSubcategory) {
      throw new NotFoundException('Subcategory is not found.')
    }

    const subcategoryProducts = await this.prisma.product.findMany({
      where: {
        productSubcategoryId
      }
    })

    return subcategoryProducts.some(product => product.title === title)
  }
}
