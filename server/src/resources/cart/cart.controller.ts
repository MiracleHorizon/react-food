import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards
} from '@nestjs/common'
import type { Request } from 'express'

import { JwtGuard } from '@common/guards'
import { CartService } from './cart.service'
import type { Cart, CartProduct } from '@prisma/client'
import type { AddProductDto } from './dto/AddProduct.dto'
import type { JwtPayload } from '@resources/auth/models'

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post(':userId')
  public createOne(@Param('userId') userId: string): Promise<Cart> {
    return this.cartService.createOne(userId)
  }

  @UseGuards(JwtGuard)
  @Get('user')
  public findOneByUser(@Req() req: Request): Promise<Cart> {
    const userPayload = req.user as JwtPayload
    return this.cartService.findOneByUser(userPayload.sub)
  }

  @Post(':id/add_product')
  public addProduct(
    @Param('id') id: string,
    @Body() dto: AddProductDto
  ): Promise<CartProduct> {
    return this.cartService.addProduct(id, dto)
  }

  @Patch(':cartId/increment/:productId')
  public incrementProductCount(
    @Param('cartId') cartId: string,
    @Param('productId') productId: string
  ) {
    return this.cartService.changeProductCountInCart({
      cartId,
      productId,
      dest: 'increment'
    })
  }

  @Patch(':cartId/decrement/:productId')
  public decrementProductCount(
    @Param('cartId') cartId: string,
    @Param('productId') productId: string
  ): Promise<void> {
    return this.cartService.changeProductCountInCart({
      cartId,
      productId,
      dest: 'decrement'
    })
  }

  @Patch(':id/clear')
  public clearCart(@Param('id') id: string): Promise<void> {
    return this.cartService.clearCart(id)
  }
}
