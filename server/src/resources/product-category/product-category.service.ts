import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import type { ProductCategory } from '@prisma/client'
import type { Response } from 'express'

import { PrismaService } from 'prisma/prisma.service'
import type { CreateProductCategoryArgs } from '@/models/product-category/CreateProductCategoryArgs'
import type { PaginationParams } from '@/models/PaginationParams'

@Injectable()
export class ProductCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  // @Admin
  public async create({
    title,
    res
  }: CreateProductCategoryArgs): Promise<void> {
    const isCategoryExists = await this.isCategoryExists(title)

    if (isCategoryExists) {
      throw new BadRequestException('Category already exists.')
    }

    const category = await this.prisma.productCategory.create({
      data: {
        title
      }
    })

    res.send({
      message: 'Category successfully created.',
      categoryId: category.id
    })
  }

  private async isCategoryExists(title: string): Promise<boolean> {
    return await this.prisma.productCategory
      .findFirst({
        where: {
          title
        }
      })
      .then(result => Boolean(result))
  }

  // @User & @Admin
  public async findOne(categoryId: string): Promise<ProductCategory> {
    const category = await this.prisma.productCategory.findUnique({
      where: {
        id: categoryId
      },
      include: {
        productSubcategories: {
          select: {
            id: true,
            title: true,
            products: true,
            productCategoryId: true
          }
        }
      }
    })

    if (!category) {
      throw new NotFoundException('Category is not found.')
    }

    return category
  }

  // @User & @Admin
  public async findAll({
    skip,
    take
  }: PaginationParams): Promise<ProductCategory[]> {
    return this.prisma.productCategory.findMany({
      take,
      skip: skip || 0,
      include: {
        productSubcategories: {
          include: {
            products: true
          }
        }
      }
    })
  }

  public async findAllForNavigation(): Promise<ProductCategory[]> {
    return this.prisma.productCategory.findMany()
  }

  // @Admin
  public async removeOne(categoryId: string, res: Response): Promise<void> {
    await this.prisma.productCategory.delete({
      where: {
        id: categoryId
      }
    })

    res.send({
      message: 'Category successfully deleted.'
    })
  }
}
