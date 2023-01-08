import { BadRequestException, Injectable } from '@nestjs/common'

import { PrismaService } from 'prisma/prisma.service'
import type { Res } from '@/models/Res'
import type { CreateProductSubcategoryDto } from './dto/create-product-subcategory.dto'

@Injectable()
export class ProductSubcategoryService {
  constructor(private readonly prisma: PrismaService) {}

  public async create({
    res,
    ...dto
  }: CreateProductSubcategoryDto & Res): Promise<void> {
    const isSubcategoryExists = await this.isSubcategoryExists(dto.title)

    if (isSubcategoryExists) {
      throw new BadRequestException('Subcategory already exists.')
    }

    const subcategory = await this.prisma.productSubcategory.create({
      data: dto
    })

    res.send({
      message: 'Subcategory successfully created.',
      subcategoryId: subcategory.id
    })
  }

  private async isSubcategoryExists(title: string): Promise<boolean> {
    return await this.prisma.productSubcategory
      .findFirst({
        where: {
          title
        }
      })
      .then(result => Boolean(result))
  }
}
