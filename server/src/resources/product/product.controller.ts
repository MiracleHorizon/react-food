import { Controller, Delete, Get, Param, Res } from '@nestjs/common'
import type { Response } from 'express'

import { ProductService } from './product.service'

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(':id')
  public findOne(@Param('id') id: string) {
    return this.productService.findOne(id)
  }

  @Get()
  public findAll() {
    return this.productService.findAll()
  }

  @Delete(':id')
  public removeOne(@Param('id') id: string, @Res() res: Response) {
    return this.productService.removeOne(id, res)
  }
}
