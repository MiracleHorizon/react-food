import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  Res,
  UseGuards
} from '@nestjs/common'
import type { Request, Response } from 'express'

import { JwtGuard } from '@common/guards'
import { BillingCardService } from './billing-card.service'
import type { JwtPayload } from '@resources/auth/models'
import type { CreateBillingCardDto } from './dto/CreateBillingCard.dto'
import type { ClientBillingCard } from '@resources/billing-card/models/ClientBillingCard'

@Controller('billing_card')
export class BillingCardController {
  constructor(private readonly billingCardService: BillingCardService) {}

  @UseGuards(JwtGuard)
  @Post()
  public create(
    @Body() dto: CreateBillingCardDto,
    @Req() req: Request,
    @Res() res: Response
  ): Promise<void> {
    const userPayload = req.user as JwtPayload
    return this.billingCardService.create({
      ...dto,
      res,
      userId: userPayload.sub
    })
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  public findOne(
    @Param('id') id: string,
    @Req() req: Request
  ): Promise<ClientBillingCard> {
    const userPayload = req.user as JwtPayload
    return this.billingCardService.findOne(id, userPayload.sub)
  }

  @UseGuards(JwtGuard)
  @Get()
  public findAll(@Req() req: Request): Promise<ClientBillingCard[]> {
    const userPayload = req.user as JwtPayload
    return this.billingCardService.findAll(userPayload.sub)
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  public removeOne(
    @Param('id') id: string,
    @Req() req: Request,
    @Res() res: Response
  ): Promise<void> {
    const userPayload = req.user as JwtPayload
    return this.billingCardService.removeOne({
      cardId: id,
      userId: userPayload.sub,
      res
    })
  }

  @UseGuards(JwtGuard)
  @Delete()
  public removeAll(@Req() req: Request, @Res() res: Response): Promise<void> {
    const userPayload = req.user as JwtPayload
    return this.billingCardService.removeAll(userPayload.sub, res)
  }
}
