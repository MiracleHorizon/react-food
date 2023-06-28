import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import type { ProductCategory } from '@prisma/client'
import type { Response } from 'express'

import { PrismaService } from 'prisma/prisma.service'
import type { Res } from '@models/Res'
import type { PaginationParams } from '@models/PaginationParams'
import type { CreateProductCategoryDto } from './dto/CreateProductCategory.dto'
import type { ProductCategoryWithSubcategories } from './models/ProductCategoryWithSubcategories'
import type { ShowcaseProductCategoryModel } from './models/ShowcaseProductCategoryModel'

@Injectable()
export class ProductCategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  // @Admin
  public async createOne({
    res,
    ...dto
  }: CreateProductCategoryDto & Res): Promise<void> {
    const isCategoryExists = await this.checkIsExistsByTitle(dto.title)

    if (isCategoryExists) {
      throw new BadRequestException('Category already exists')
    }

    const category = await this.prisma.productCategory.create({
      data: dto
    })

    res.send({
      message: 'Category successfully created',
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
            categoryTitle: true,
            products: true
          }
        }
      }
    })

    if (!category) {
      throw new NotFoundException('Category is not found')
    }

    return category
  }

  // @User & @Admin
  public async findAll(
    paginationParams: PaginationParams
  ): Promise<ShowcaseProductCategoryModel[]> {
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

    const categories = await this.prisma.productCategory.findMany({
      ...paginationParams,
      where: filterParameters,
      include: {
        subcategories: {
          include: {
            products: true
          }
        }
      }
    })

    return categories.map(({ subcategories, ...category }) => {
      const products = subcategories
        .map(subcategory => {
          return subcategory.products.slice(0, 5)
        })
        .reduce((acc, array) => acc.concat(array), [])

      return {
        ...category,
        products
      }
    })
  }

  // @User & @Admin
  public async findAllForNavigation(): Promise<ProductCategory[]> {
    const categories = await this.findAll({})
    return categories.map(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ({ products, ...dataForNavigation }) => dataForNavigation
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
      message: 'Category successfully deleted'
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
