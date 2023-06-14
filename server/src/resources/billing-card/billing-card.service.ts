import {
  ForbiddenException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import type { Response } from 'express'

import { PrismaService } from 'prisma/prisma.service'
import type { CreateBillingCardArgs } from '@resources/billing-card/models/CreateBillingCardArgs'
import type { DeleteBillingCardArgs } from '@resources/billing-card/models/DeleteBillingCardArgs'
import type { ClientBillingCard } from '@resources/billing-card/models/ClientBillingCard'

@Injectable()
export class BillingCardService {
  constructor(private readonly prisma: PrismaService) {}

  public async create({
    userId,
    res,
    ...dto
  }: CreateBillingCardArgs): Promise<void> {
    // TODO Ограничить количество карт для одного пользователя
    await this.prisma.billingCard.create({
      data: {
        userId,
        ...dto
      }
    })

    res.send({
      message: 'Billing card successfully created'
    })
  }

  public async findOne(
    cardId: string,
    userId: string
  ): Promise<ClientBillingCard> {
    const card = await this.prisma.billingCard.findUnique({
      where: {
        id: cardId
      },
      select: {
        id: true,
        number: true,
        userId: true
      }
    })

    if (!card) {
      throw new NotFoundException('Billing card is not found')
    }

    if (card.userId !== userId) {
      throw new ForbiddenException()
    }

    return {
      id: card.id,
      lastNumbers: this.getLastNumbers(card.number)
    }
  }

  public async findAll(userId: string): Promise<ClientBillingCard[]> {
    const cards = await this.prisma.billingCard.findMany({
      where: {
        userId
      },
      select: {
        id: true,
        number: true,
        userId: true
      },
      take: 5
    })

    if (cards[0]?.userId !== userId) {
      throw new ForbiddenException()
    }

    return cards.map(({ id, number }) => ({
      id,
      lastNumbers: this.getLastNumbers(number)
    }))
  }

  // TODO: Rework
  private getLastNumbers(numbers: number[]): number {
    return numbers[numbers.length - 1]!
  }

  public async removeOne({
    cardId,
    userId,
    res
  }: DeleteBillingCardArgs): Promise<void> {
    const billingCard = await this.prisma.billingCard.findUnique({
      where: {
        id: cardId
      }
    })

    if (!billingCard) {
      throw new NotFoundException('Billing card is not found')
    }

    if (billingCard.userId !== userId) throw new ForbiddenException()

    await this.prisma.billingCard.delete({
      where: {
        id: cardId
      }
    })

    res.send({
      message: 'Billing card successfully removed'
    })
  }

  public async removeAll(userId: string, res: Response): Promise<void> {
    await this.prisma.billingCard.deleteMany({
      where: {
        id: userId
      }
    })

    res.send({
      message: `All billing cards for user - ${userId} successfully removed.`
    })
  }
}
