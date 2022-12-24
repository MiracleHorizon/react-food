import { Body, Controller, Get, Param, Patch, Post, Res } from '@nestjs/common'
import type { Response } from 'express'

import { OrderService } from './order.service'
import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderStatusDto } from './dto/update-order-status.dto'

import { MOCK_USER_ID } from '@/utils/constants'

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  public create(@Body() dto: CreateOrderDto, @Res() res: Response) {
    return this.orderService.create({
      ...dto,
      userId: MOCK_USER_ID,
      res
    })
  }

  @Get(':id')
  public findOne(@Param('id') id: string) {
    return this.orderService.findOne(id, MOCK_USER_ID)
  }

  @Get()
  public findAll() {
    return this.orderService.findAll(MOCK_USER_ID)
  }

  @Patch(':id/update_status')
  public updateStatus(
    @Param('id') id: string,
    @Body() { status }: UpdateOrderStatusDto,
    @Res() res: Response
  ) {
    return this.orderService.updateStatus({
      userId: MOCK_USER_ID,
      orderId: id,
      status,
      res
    })
  }

  @Patch(':id/cancel')
  public cancel(@Param('id') id: string) {
    return this.orderService.cancel(id)
  }
}
