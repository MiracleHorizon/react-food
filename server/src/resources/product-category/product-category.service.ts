import {
  Injectable,
  BadRequestException,
  NotFoundException
} from '@nestjs/common'
import type { Response } from 'express'
import type { ProductCategory } from '@prisma/client'

import { PrismaService } from 'prisma/prisma.service'
import { ProductService } from '../product/product.service'
import type { Res } from '@/models/Res'
import type { PaginationParams } from '@/models/PaginationParams'
import type { CreateProductArgs } from '@/models/products/CreateProductArgs'
import type { AddManyProductsArgs } from '@/models/products/AddManyProductsArgs'

@Injectable()
export class ProductCategoryService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly productService: ProductService
  ) {}

  // @Admin
  public async create(categoryTitle: string, res: Response): Promise<Response> {
    const isCategoryExists = await this.isCategoryExists(categoryTitle)

    if (isCategoryExists) {
      throw new BadRequestException('This category already exists.')
    }

    await this.prisma.productCategory.create({
      data: {
        title: categoryTitle
      }
    })

    return res.send({
      message: 'Category successfully created.'
    })
  }

  private async isCategoryExists(categoryTitle: string): Promise<boolean> {
    return await this.prisma.productCategory
      .findFirst({
        where: {
          title: categoryTitle
        }
      })
      .then(res => Boolean(res))
  }

  // @User & @Admin
  public async findOne(categoryId: string): Promise<ProductCategory> {
    const category = await this.prisma.productCategory.findUnique({
      where: {
        id: categoryId
      },
      include: {
        products: true
      }
    })

    if (!category) {
      throw new NotFoundException('Category is not found.')
    }

    return category
  }

  // @User & @Admin
  public findAll({ skip, take }: PaginationParams): Promise<ProductCategory[]> {
    return this.prisma.productCategory.findMany({
      take,
      skip: skip || 0,
      include: {
        products: true
      }
    })
  }

  // @Admin
  public async addOneProduct({
    res,
    productData,
    productCategoryId
  }: CreateProductArgs & Res): Promise<Response> {
    await this.findOne(productCategoryId)

    await this.productService.create({
      productData,
      productCategoryId
    })

    return res.send({
      message: `Product successfully added to category ${productCategoryId}.`
    })
  }

  // @Admin
  public async addManyProducts({
    res,
    productsData,
    productCategoryId
  }: AddManyProductsArgs): Promise<Response> {
    await this.findOne(productCategoryId)

    // TODO createMany
    await Promise.all(
      productsData.map(product => {
        return this.productService.create({
          productCategoryId,
          productData: product
        })
      })
    )

    return res.send({
      message: `Products successfully added to category ${productCategoryId}.`
    })
  }

  // @Admin
  public async removeOne(categoryId: string, res: Response): Promise<Response> {
    try {
      await this.removeAllProductsByCategory(categoryId, res)

      await this.prisma.productCategory.delete({
        where: {
          id: categoryId
        }
      })

      return res.send({
        message: 'Category successfully removed.'
      })
    } catch {
      throw new BadRequestException('Something went wrong.')
    }
  }

  // @Admin
  public async removeAllProductsByCategory(
    categoryId: string,
    res: Response
  ): Promise<Response> {
    return this.productService.removeAllByCategory(categoryId, res)
  }
}
