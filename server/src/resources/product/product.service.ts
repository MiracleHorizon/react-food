import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'

import { PrismaService } from 'prisma/prisma.service'
import type { CreateProductArgs } from './models/CreateProductArgs'
import type { CreateManyProductsArgs } from './models/CreateManyProductsArgs'

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  public async createOne({
    subcategoryId,
    dto
  }: CreateProductArgs): Promise<void> {
    const isProductExist = await this.checkIsExistsByTitleInSubcategory(
      subcategoryId,
      dto.title
    )

    if (isProductExist) {
      throw new BadRequestException('Product already exists')
    }

    await this.prisma.product.create({
      data: {
        subcategoryId,
        ...dto
      }
    })
  }

  public async createMany({
    subcategoryId,
    productsData
  }: CreateManyProductsArgs): Promise<void> {
    await this.prisma.product.createMany({
      data: productsData.map(dto => ({ ...dto, subcategoryId })),
      skipDuplicates: true
    })
  }

  public async checkIsExistsById(id: string): Promise<boolean> {
    return await this.prisma.product
      .findFirst({ where: { id } })
      .then(result => Boolean(result))
  }

  private async checkIsExistsByTitleInSubcategory(
    subcategoryId: string,
    productTitle: string
  ): Promise<boolean> {
    const productSubcategory = await this.prisma.productSubcategory.findFirst({
      where: {
        id: subcategoryId
      }
    })

    if (!productSubcategory) {
      throw new NotFoundException('Subcategory is not found')
    }

    const subcategoryProducts = await this.prisma.product.findMany({
      where: {
        subcategoryId
      }
    })

    return subcategoryProducts.some(product => product.title === productTitle)
  }
}
