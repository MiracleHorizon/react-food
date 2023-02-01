import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import type { ProductCategory, ProductSubcategory } from '@prisma/client'
import type { Response } from 'express'

import { PrismaService } from 'prisma/prisma.service'
import { CreateProductCategoryDto } from './dto/create-product-category.dto'
import type { PaginationParams } from '@/models/PaginationParams'
import type { Res } from '@/models/Res'

type ProductCategoryWithSubcategories = ProductCategory & {
  subcategories: ProductSubcategory[]
}

@Injectable()
export class ProductCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  // @Admin
  public async createOne({
    res,
    ...dto
  }: CreateProductCategoryDto & Res): Promise<void> {
    const isCategoryExists = await this.checkIsExistsByTitle(dto.title)

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

  // @User & @Admin
  public async findOne(id: string): Promise<ProductCategoryWithSubcategories> {
    const subcategoriesFilter = {
      NOT: {
        products: {
          every: {
            subcategoryId: {
              equals: ''
            },
            fullPrice: {
              lt: 0
            }
          }
        }
      }
    }

    const category = await this.prisma.productCategory.findUnique({
      where: {
        id
      },
      include: {
        subcategories: {
          where: subcategoriesFilter,
          select: {
            id: true,
            title: true,
            description: true,
            categoryId: true,
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
  }: PaginationParams): Promise<ProductCategoryWithSubcategories[]> {
    const productsFilterParameters = {
      every: {
        subcategoryId: {
          equals: ''
        },
        fullPrice: {
          lt: 0
        }
      }
    }
    const subcategoriesFilterParameters = {
      every: {
        products: productsFilterParameters
      }
    }
    const filterParameters = {
      NOT: {
        subcategories: subcategoriesFilterParameters
      }
    }

    return this.prisma.productCategory.findMany({
      take,
      skip: skip ?? 0,
      where: filterParameters,
      include: {
        subcategories: {
          include: {
            products: true
          }
        }
      }
    })
  }

  // @User & @Admin
  public async findAllForNavigation(): Promise<ProductCategory[]> {
    const categories = await this.findAll({})
    return categories.map(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ({ subcategories, ...dataForNavigation }) => dataForNavigation
    )
  }

  // @Admin
  public async removeOne(id: string, res: Response): Promise<void> {
    await this.prisma.productCategory.delete({
      where: {
        id
      }
    })

    res.send({
      message: 'Category successfully deleted.'
    })
  }

  private async checkIsExistsByTitle(title: string): Promise<boolean> {
    return await this.prisma.productCategory
      .findFirst({
        where: {
          title
        }
      })
      .then(result => Boolean(result))
  }
}
