import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ProductService } from './product.service'
import { CreateProductDto } from './dto/create-product.dto'

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  public createProduct(@Body() dto: CreateProductDto) {
    return this.productService.createProduct(dto)
  }

  @Get(':id')
  public getProduct(@Param('id') id: string) {
    return this.productService.getProduct(id)
  }

  @Get()
  public getAllProducts() {
    return this.productService.getAllProducts()
  }
}
