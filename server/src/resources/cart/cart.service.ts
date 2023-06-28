import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import type { Cart, CartProduct } from '@prisma/client'

import { PrismaService } from 'prisma/prisma.service'
import { ProductService } from '@resources/product/product.service'
import type { AddProductArgs } from './models/AddProductArgs'
import type { ChangeProductCountArgs } from './models/ChangeProductCountArgs'

// TODO: Отслеживание изменений цены, скидок и удаления продуктов с витрины, OnUpdate
@Injectable()
export class CartService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly productService: ProductService
  ) {}

  public async findOneByUser(userId: string): Promise<Cart> {
    const cart = await this.prisma.cart.findFirst({
      where: {
        userId
      },
      include: {
        products: true
      }
    })

    if (!cart) {
      throw new NotFoundException('Cart is not found')
    }

    return cart
  }

  public async addProduct({
    cartId,
    userId,
    dto
  }: AddProductArgs): Promise<CartProduct> {
    const cart = await this.prisma.cart.findFirst({
      where: {
        id: cartId
      },
      select: {
        id: true,
        userId: true,
        products: true
      }
    })

    if (!cart) {
      throw new NotFoundException('Cart is not found')
    }

    if (cart.userId !== userId) {
      throw new ForbiddenException('Access denied')
    }

    const isProductExists = await this.productService.checkIsExistsById(
      dto.productReferenceId
    )
    if (!isProductExists) {
      throw new NotFoundException('Product is not found')
    }

    // TODO: Доработать
    const isCartIncludesProduct = cart.products.some(
      product => product.productReferenceId === dto.productReferenceId
    )
    if (isCartIncludesProduct) {
      throw new BadRequestException('Product already in this cart')
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // @ts-ignore
    const { description, subcategoryId, ...data } = dto

    return this.prisma.cartProduct.create({
      data: {
        ...data,
        productReferenceId: dto.productReferenceId,
        cartId
      }
    })
  }

  public async changeProductCountInCart({
    cartId,
    userId,
    productId,
    dest
  }: ChangeProductCountArgs): Promise<void> {
    const cart = await this.prisma.cart.findUnique({
      where: {
        id: cartId
      }
    })

    if (!cart) {
      throw new NotFoundException('Cart is not found')
    }

    if (cart.userId !== userId) {
      throw new ForbiddenException('Access denied')
    }

    const cartProduct = await this.prisma.cartProduct.findFirst({
      where: {
        id: productId
      }
    })

    if (!cartProduct) {
      throw new NotFoundException('Cart product is not found')
    }

    const isProductExists = await this.productService.checkIsExistsById(
      cartProduct.productReferenceId
    )
    if (!isProductExists) {
      throw new NotFoundException('Product is not found')
    }

    const { id, count } = cartProduct

    if (dest === 'increment') {
      await this.incrementProductCount(id, count)
    }

    if (dest === 'decrement') {
      await this.decrementProductCount(id, count)
    }
  }

  private async incrementProductCount(
    id: string,
    count: number
  ): Promise<void> {
    await this.prisma.cartProduct.update({
      where: {
        id
      },
      data: {
        count: count + 1
      }
    })
  }

  private async decrementProductCount(
    id: string,
    count: number
  ): Promise<void> {
    if (count - 1 === 0) {
      await this.prisma.cartProduct.delete({
        where: {
          id
        }
      })
      return
    }

    await this.prisma.cartProduct.update({
      where: {
        id
      },
      data: {
        count: count - 1
      }
    })
  }

  public async clearCart(cartId: string, userId: string): Promise<void> {
    const cart = await this.prisma.cart.findUnique({
      where: {
        id: cartId
      }
    })

    if (!cart) {
      throw new NotFoundException('Cart is not found')
    }

    if (cart.userId !== userId) {
      throw new ForbiddenException('Access denied')
    }

    await this.prisma.cartProduct.deleteMany({
      where: {
        cartId
      }
    })
  }
}
