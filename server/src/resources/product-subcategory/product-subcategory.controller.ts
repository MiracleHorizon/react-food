import { Body, Controller, Param, Post, Res } from '@nestjs/common'
import type { Response } from 'express'

import { ProductSubcategoryService } from './product-subcategory.service'
import { CreateProductSubcategoryDto } from './dto/create-product-subcategory.dto'

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
}
