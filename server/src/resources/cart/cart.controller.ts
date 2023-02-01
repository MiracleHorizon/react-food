import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common'

import { CartService } from './cart.service'
import { AddProductDto } from '@/resources/cart/dto/add-product.dto'

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post(':userId')
  public createOne(@Param('userId') userId: string) {
    return this.cartService.createOne(userId)
  }

  @Get(':id')
  public findOne(@Param('id') id: string) {
    return this.cartService.findOne(id)
  }

  @Post(':id/add_product')
  public addProduct(@Param('id') id: string, @Body() dto: AddProductDto) {
    return this.cartService.addProduct(id, dto)
  }

  @Patch(':id/increment/:productReferenceId')
  public incrementProductCount(
    @Param('id') cartId: string,
    @Param('productReferenceId') productReferenceId: string
  ) {
    return this.cartService.changeProductCountInCart({
      cartId,
      productReferenceId,
      dest: 'increment'
    })
  }

  @Patch(':id/decrement/:productReferenceId')
  public decrementProductCount(
    @Param('id') cartId: string,
    @Param('productReferenceId') productReferenceId: string
  ) {
    return this.cartService.changeProductCountInCart({
      cartId,
      productReferenceId,
      dest: 'decrement'
    })
  }

  @Patch(':id/clear')
  public clearCart(@Param('id') id: string) {
    return this.cartService.clearCart(id)
  }
}
