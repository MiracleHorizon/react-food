import { Body, Controller, Delete, Get, Param, Post, Res } from '@nestjs/common'
import type { Response } from 'express'

import { BillingCardService } from './billing-card.service'
import { CreateBillingCardDto } from '@/resources/billing-card/dto/create-billing-card.dto'

import { MOCK_USER_ID } from '@/utils/constants'

@Controller('billing-card')
export class BillingCardController {
  constructor(private readonly billingCardService: BillingCardService) {}

  @Post()
  public create(@Body() dto: CreateBillingCardDto, @Res() res: Response) {
    return this.billingCardService.create({ ...dto, res, userId: MOCK_USER_ID })
  }

  @Get(':id')
  public findOne(@Param('id') id: string) {
    return this.billingCardService.findOne(id, MOCK_USER_ID)
  }

  @Get()
  public findAll() {
    return this.billingCardService.findAll(MOCK_USER_ID)
  }

  @Delete(':id')
  public removeOne(@Param('id') id: string, @Res() res: Response) {
    return this.billingCardService.removeOne({
      cardId: id,
      userId: MOCK_USER_ID,
      res
    })
  }

  @Delete()
  public removeAll(@Res() res: Response) {
    return this.billingCardService.removeAll(MOCK_USER_ID, res)
  }
}
