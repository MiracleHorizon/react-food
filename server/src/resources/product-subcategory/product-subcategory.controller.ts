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
  public create(
    @Body() dto: CreateProductSubcategoryDto,
    @Res() res: Response
  ) {
    return this.productSubcategoryService.create({ ...dto, res })
  }

  @Get(':id')
  public findOne(@Param('id') id: string) {
    return this.productSubcategoryService.findOne(id)
  }

  @Get('category/:id')
  public findAll(@Param('id') categoryId: string) {
    return this.productSubcategoryService.findAll(categoryId)
  }

  @Post(':id/add_product')
  public addOneProduct(
    @Param('id') productSubcategoryId: string,
    @Body() dto: CreateProductDto,
    @Res() res: Response
  ) {
    return this.productSubcategoryService.addOneProduct({
      productSubcategoryId,
      res,
      dto
    })
  }

  @Post(':id/add_many_products')
  public addManyProducts(
    @Param('id') id: string,
    @Body() dtos: CreateProductDto[],
    @Res() res: Response
  ) {
    return this.productSubcategoryService.addManyProducts({
      productSubcategoryId: id,
      dtos,
      res
    })
  }
}
