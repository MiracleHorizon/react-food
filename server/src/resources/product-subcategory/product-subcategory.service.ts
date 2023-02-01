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

  // @Admin
  public async create({
    res,
    ...dto
  }: CreateProductSubcategoryDto & Res): Promise<void> {
    const isSubcategoryExists = await this.checkIsExistsByTitle(dto.title)

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

  // @Admin & @User
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

  // @Admin
  public async addOneProduct({
    res,
    ...data
  }: CreateProductArgs & Res): Promise<void> {
    const isSubcategoryExists = await this.checkIsExistsById(data.subcategoryId)

    if (!isSubcategoryExists) {
      throw new NotFoundException('Subcategory is not found.')
    }

    await this.productService.createOne(data)

    res.send({
      message: 'Product successfully added.'
    })
  }

  // @Admin
  public async addManyProducts({
    res,
    ...data
  }: CreateManyProductsArgs & Res): Promise<void> {
    const isSubcategoryExists = await this.checkIsExistsById(data.subcategoryId)

    if (!isSubcategoryExists) {
      throw new NotFoundException('Subcategory is not found')
    }

    await this.productService.createMany(data)

    res.send({
      message: 'Products successfully added.'
    })
  }

  private async checkIsExistsById(id: string): Promise<boolean> {
    return await this.prisma.productSubcategory
      .findFirst({ where: { id } })
      .then(result => Boolean(result))
  }

  private async checkIsExistsByTitle(title: string): Promise<boolean> {
    return await this.prisma.productSubcategory
      .findFirst({ where: { title } })
      .then(result => Boolean(result))
  }
}
