import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import type { ProductCategory } from '@prisma/client'
import type { Response } from 'express'

import { PrismaService } from 'prisma/prisma.service'
import { CreateProductCategoryDto } from './dto/create-product-category.dto'
import type { PaginationParams } from '@/models/PaginationParams'
import type { Res } from '@/models/Res'

// TODO При пустом массиве products или subcategories не возвращать
@Injectable()
export class ProductCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  // @Admin
  public async create({
    res,
    ...dto
  }: CreateProductCategoryDto & Res): Promise<void> {
    const isCategoryExists = await this.isCategoryExists(dto.title)

    if (isCategoryExists) {
      throw new BadRequestException('Category already exists.')
    }

    const category = await this.prisma.productCategory.create({
      data: dto
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
        subcategories: {
          where: {
            products: {
              some: {}
            }
          },
          select: {
            id: true,
            title: true,
            description: true,
            productCategoryId: true,
            products: true
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
    const categories = await this.prisma.productCategory.findMany({
      take,
      skip: skip || 0,
      include: {
        subcategories: {
          include: {
            products: true
          }
        }
      }
    })

    return categories.filter(category => category.subcategories.length > 0)
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
