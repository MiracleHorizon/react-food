import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common'
import type { Response } from 'express'

import { ProductSubcategoryService } from './product-subcategory.service'
import type { ProductSubcategory } from '@prisma/client'
import type { CreateProductSubcategoryDto } from './dto/CreateProductSubcategory.dto'
import type { CreateProductDto } from '../product/dto/CreateProduct.dto'

@Controller('product_subcategory')
export class ProductSubcategoryController {
  constructor(
    private readonly productSubcategoryService: ProductSubcategoryService
  ) {}

  @Post()
  public createOne(
    @Body() dto: CreateProductSubcategoryDto,
    @Res() res: Response
  ): Promise<void> {
    return this.productSubcategoryService.create({ ...dto, res })
  }

  @Get(':id')
  public findOne(@Param('id') id: string): Promise<ProductSubcategory> {
    return this.productSubcategoryService.findOne(id)
  }

  @Post(':id/add_product')
  public addOneProduct(
    @Param('id') subcategoryId: string,
    @Body() dto: CreateProductDto,
    @Res() res: Response
  ): Promise<void> {
    return this.productSubcategoryService.addOneProduct({
      subcategoryId,
      dto,
      res
    })
  }

  @Post(':id/add_many_products')
  public addManyProducts(
    @Param('id') subcategoryId: string,
    @Body() productsData: CreateProductDto[],
    @Res() res: Response
  ): Promise<void> {
    return this.productSubcategoryService.addManyProducts({
      subcategoryId,
      productsData,
      res
    })
  }
}
