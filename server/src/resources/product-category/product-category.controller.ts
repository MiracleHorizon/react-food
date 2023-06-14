import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Res
} from '@nestjs/common'
import type { Response } from 'express'

import { ProductCategoryService } from './product-category.service'
import type { CreateProductCategoryDto } from './dto/CreateProductCategory.dto'
import type { ProductCategoryWithSubcategories } from '@resources/product-category/models/ProductCategoryWithSubcategories'
import type { ShowcaseProductCategoryModel } from '@resources/product-category/models/ShowcaseProductCategoryModel'

@Controller('product_category')
export class ProductCategoryController {
  constructor(
    private readonly productCategoryService: ProductCategoryService
  ) {}

  @Post()
  public createOne(
    @Body() dto: CreateProductCategoryDto,
    @Res() res: Response
  ): Promise<void> {
    return this.productCategoryService.createOne({ ...dto, res })
  }

  @Get(':id')
  public findOne(
    @Param('id') id: string
  ): Promise<ProductCategoryWithSubcategories> {
    return this.productCategoryService.findOne(id)
  }

  @Get()
  public findAll(
    @Query('skip') skip: string,
    @Query('take') take: string
  ): Promise<ShowcaseProductCategoryModel[]> {
    return this.productCategoryService.findAll({
      skip: +skip,
      take: +take
    })
  }

  @Delete(':id')
  public removeOne(
    @Param('id') id: string,
    @Res() res: Response
  ): Promise<void> {
    return this.productCategoryService.removeOne(id, res)
  }
}
