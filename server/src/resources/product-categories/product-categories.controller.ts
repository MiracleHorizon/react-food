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

import { ProductCategoriesService } from './product-categories.service'
import type { CreateProductCategoryDto } from './dto/CreateProductCategory.dto'
import type { ShowcaseProductCategoryModel } from './models/ShowcaseProductCategoryModel'
import type { ProductCategoryWithSubcategories } from './models/ProductCategoryWithSubcategories'

@Controller('product_categories')
export class ProductCategoriesController {
  constructor(
    private readonly productCategoryService: ProductCategoriesService
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
