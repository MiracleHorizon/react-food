import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common'
import type { Response } from 'express'

import { ProductSubcategoryService } from './product-subcategory.service'
import { CreateProductSubcategoryDto } from './dto/create-product-subcategory.dto'
import { CreateProductDto } from '../product/dto/create-product.dto'

@Controller('product_subcategory')
export class ProductSubcategoryController {
  constructor(
    private readonly productSubcategoryService: ProductSubcategoryService
  ) {}

  @Post()
  public createOne(
    @Body() dto: CreateProductSubcategoryDto,
    @Res() res: Response
  ) {
    return this.productSubcategoryService.create({ ...dto, res })
  }

  @Get(':id')
  public findOne(@Param('id') id: string) {
    return this.productSubcategoryService.findOne(id)
  }

  @Post(':id/add_product')
  public addOneProduct(
    @Param('id') subcategoryId: string,
    @Body() dto: CreateProductDto,
    @Res() res: Response
  ) {
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
  ) {
    return this.productSubcategoryService.addManyProducts({
      subcategoryId,
      productsData,
      res
    })
  }
}
