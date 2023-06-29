import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
  Req,
  UseGuards
} from '@nestjs/common'
import type { Request } from 'express'

import { JwtGuard } from '@common/guards'
import { CartService } from './cart.service'
import type { CartProduct } from '@prisma/client'
import type { AddProductDto } from './dto/AddProduct.dto'
import type { JwtPayload } from '@resources/auth/models'

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @UseGuards(JwtGuard)
  @Post(':id/add_product')
  public addProduct(
    @Param('id') id: string,
    @Req() req: Request,
    @Body() dto: AddProductDto
  ): Promise<CartProduct> {
    const userPayload = req.user as JwtPayload
    return this.cartService.addProduct({
      cartId: id,
      userId: userPayload.sub,
      dto
    })
  }

  @UseGuards(JwtGuard)
  @Patch(':cartId/increment/:productId')
  public incrementProductCount(
    @Param('cartId') cartId: string,
    @Param('productId') productId: string,
    @Req() req: Request
  ) {
    const userPayload = req.user as JwtPayload
    return this.cartService.changeProductCountInCart({
      cartId,
      userId: userPayload.sub,
      productId,
      dest: 'increment'
    })
  }

  @UseGuards(JwtGuard)
  @Patch(':cartId/decrement/:productId')
  public decrementProductCount(
    @Param('cartId') cartId: string,
    @Param('productId') productId: string,
    @Req() req: Request
  ): Promise<void> {
    const userPayload = req.user as JwtPayload
    return this.cartService.changeProductCountInCart({
      cartId,
      userId: userPayload.sub,
      productId,
      dest: 'decrement'
    })
  }

  @UseGuards(JwtGuard)
  @Patch(':id/clear')
  public clearCart(
    @Param('id') id: string,
    @Req() req: Request
  ): Promise<void> {
    const userPayload = req.user as JwtPayload
    return this.cartService.clearCart(id, userPayload.sub)
  }
}
