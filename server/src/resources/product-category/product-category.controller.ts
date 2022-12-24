import {
  Body,
  Controller,
  Delete,
  Get,
  Param, Patch,
  Post,
  Query,
  Res
} from '@nestjs/common'
import type { Response } from 'express'

import { ProductCategoryService } from './product-category.service'
import { AddManyProductsDto } from './dto/add-many-products.dto'
import { CreateCategoryDto } from './dto/create-category.dto'
import { CreateProductDto } from '../product/dto/create-product.dto'

@Controller('product_category')
export class ProductCategoryController {
  constructor(
    private readonly productCategoryService: ProductCategoryService
  ) {}

  @Post()
  public create(@Body() { title }: CreateCategoryDto, @Res() res: Response) {
    return this.productCategoryService.create(title, res)
  }

  @Get(':id')
  public getOne(@Param('id') id: string) {
    return this.productCategoryService.findOne(id)
  }

  @Get()
  public getAll(@Query('skip') skip: string, @Query('take') take: string) {
    return this.productCategoryService.findAll({
      skip: +skip,
      take: +take
    })
  }

  @Patch(':id/add_product')
  public addOneProduct(
    @Param('id') id: string,
    @Body() dto: CreateProductDto,
    @Res() res: Response
  ) {
    return this.productCategoryService.addOneProduct({
      productCategoryId: id,
      productData: dto,
      res
    })
  }

  @Patch(':id/add_many_products')
  public addManyProducts(
    @Param('id') id: string,
    @Body() dto: AddManyProductsDto,
    @Res() res: Response
  ) {
    return this.productCategoryService.addManyProducts({
      productCategoryId: id,
      productsData: dto.data,
      res
    })
  }

  @Delete(':id')
  public delete(@Param('id') id: string, @Res() res: Response) {
    return this.productCategoryService.removeOne(id, res)
  }

  @Delete(':id/delete_products')
  public deleteAllProductsByCategory(
    @Param('id') id: string,
    @Res() res: Response
  ) {
    return this.productCategoryService.removeAllProductsByCategory(id, res)
  }
}
