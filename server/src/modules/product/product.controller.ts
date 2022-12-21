import { Controller, Delete, Get, Param, Res } from '@nestjs/common'
import type { Response } from 'express'

import { ProductService } from './product.service'

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(':id')
  public getOne(@Param('id') id: string) {
    return this.productService.getOne(id)
  }

  @Get()
  public getAll() {
    return this.productService.getAll()
  }

  @Delete(':id')
  public deleteProduct(@Param('id') id: string, @Res() res: Response) {
    return this.productService.delete(id, res)
  }
}
