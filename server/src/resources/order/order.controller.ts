import { Body, Controller, Get, Param, Patch, Post, Res } from '@nestjs/common'
import type { Response } from 'express'

import { OrderService } from '../order/order.service'
import { CreateOrderDto } from '../order/dto/create-order.dto'
import { UpdateOrderStatusDto } from '../order/dto/update-order-status.dto'

const MOCK_USER_ID = '4bd569c1-5417-45c5-8006-b45720817b2c'

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
  public getOne(@Param('id') id: string) {
    return this.orderService.getOne(id, MOCK_USER_ID)
  }

  @Get()
  public getAll() {
    return this.orderService.getAll(MOCK_USER_ID)
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
