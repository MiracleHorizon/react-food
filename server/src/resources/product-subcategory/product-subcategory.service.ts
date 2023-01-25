import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { ProductSubcategory } from '@prisma/client'

import { PrismaService } from 'prisma/prisma.service'
import { ProductService } from '../product/product.service'
import { CreateProductSubcategoryDto } from './dto/create-product-subcategory.dto'
import type { Res } from '@/models/Res'
import type { CreateProductArgs } from '@/models/product/create-product-args'
import type { CreateManyProductsArgs } from '@/models/product/create-many-products-args'

@Injectable()
export class ProductSubcategoryService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly productService: ProductService
  ) {}

  public async create({
    res,
    ...dto
  }: CreateProductSubcategoryDto & Res): Promise<void> {
    const isSubcategoryExists = await this.exist(dto.title)

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

  public async findOne(id: string): Promise<ProductSubcategory> {
    const subcategory = await this.prisma.productSubcategory.findFirst({
      where: {
        id
      },
      include: {
        products: true
      }
    })

    if (!subcategory) {
      throw new NotFoundException('Subcategory is not found.')
    }

    return subcategory
  }

  public async findAllByCategory(
    categoryId: string
  ): Promise<ProductSubcategory[]> {
    return this.prisma.productSubcategory.findMany({
      where: {
        productCategoryId: categoryId
      },
      include: {
        products: true
      }
    })
  }

  public async addOneProduct({
    res,
    ...data
  }: CreateProductArgs & Res): Promise<void> {
    await this.productService.createOne(data)

    res.send({
      message: 'Product successfully added.'
    })
  }

  public async addManyProducts({
    res,
    ...data
  }: CreateManyProductsArgs & Res): Promise<void> {
    await this.productService.createMany(data)

    res.send({
      message: 'Products successfully added.'
    })
  }

  private async exist(title: string): Promise<boolean> {
    return await this.prisma.productSubcategory
      .findFirst({
        where: {
          title
        }
      })
      .then(result => Boolean(result))
  }
}
