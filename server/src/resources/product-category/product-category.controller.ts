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
import { CreateProductCategoryDto } from './dto/create-product-category.dto'

@Controller('product_category')
export class ProductCategoryController {
  constructor(
    private readonly productCategoryService: ProductCategoryService
  ) {}

  @Post()
  public createOne(
    @Body() dto: CreateProductCategoryDto,
    @Res() res: Response
  ) {
    return this.productCategoryService.createOne({ ...dto, res })
  }

  @Get(':id')
  public findOne(@Param('id') id: string) {
    return this.productCategoryService.findOne(id)
  }

  @Get()
  public findAll(@Query('skip') skip: string, @Query('take') take: string) {
    return this.productCategoryService.findAll({
      skip: +skip,
      take: +take
    })
  }

  @Get('/navigation/all')
  public findAllForNavigation() {
    return this.productCategoryService.findAllForNavigation()
  }

  @Delete(':id')
  public removeOne(@Param('id') id: string, @Res() res: Response) {
    return this.productCategoryService.removeOne(id, res)
  }
}
