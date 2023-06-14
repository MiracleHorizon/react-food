import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import type { Cart, CartProduct } from '@prisma/client'

import { PrismaService } from 'prisma/prisma.service'
import { ProductService } from '@resources/product/product.service'
import { UsersService } from '@resources/users/users.service'
import type { AddProductDto } from '@resources/cart/dto/AddProduct.dto'
import type { ChangeProductCountArgs } from './models/ChangeProductCountArgs'

// TODO: Проверка на доступ пользователя
// TODO: Отслеживание изменений цены, скидок и удаления продуктов с витрины, OnUpdate
@Injectable()
export class CartService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly productService: ProductService,
    private readonly usersService: UsersService
  ) {}

  public async createOne(userId: string): Promise<Cart> {
    const isUserExists = await this.usersService.checkIsExistsById(userId)
    if (!isUserExists) {
      throw new NotFoundException('User is not found')
    }

    const isUserHasCart = await this.isUserHasCart(userId)
    if (isUserHasCart) {
      throw new BadRequestException('User already has a cart')
    }

    return this.prisma.cart.create({
      data: {
        userId
      }
    })
  }

  private async isUserHasCart(userId: string): Promise<boolean> {
    return this.prisma.cart
      .findFirst({ where: { userId } })
      .then(result => Boolean(result))
  }

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

  public async addProduct(
    cartId: string,
    dto: AddProductDto
  ): Promise<CartProduct> {
    const cart = await this.prisma.cart.findFirst({
      where: {
        id: cartId
      },
      select: {
        id: true,
        products: true
      }
    })
    if (!cart) {
      throw new NotFoundException('Cart is not found')
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

    return this.prisma.cartProduct.create({
      data: {
        ...dto,
        productReferenceId: dto.productReferenceId,
        cartId
      }
    })
  }

  public async changeProductCountInCart({
    cartId,
    productId,
    dest
  }: ChangeProductCountArgs): Promise<void> {
    const isCartExists = await this.checkIsExistsById(cartId)
    if (!isCartExists) {
      throw new NotFoundException('Cart is not found')
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

  public async clearCart(cartId: string): Promise<void> {
    const isCartExists = await this.checkIsExistsById(cartId)
    if (!isCartExists) {
      throw new NotFoundException('Cart is not found')
    }

    await this.prisma.cartProduct.deleteMany({
      where: {
        cartId
      }
    })
  }

  private async checkIsExistsById(id: string): Promise<boolean> {
    return await this.prisma.cart
      .findFirst({ where: { id } })
      .then(result => Boolean(result))
  }
}
