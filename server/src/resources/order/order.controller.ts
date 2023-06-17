import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  Res,
  UseGuards
} from '@nestjs/common'
import type { Request, Response } from 'express'

import { JwtGuard } from '@common/guards'
import { OrderService } from './order.service'
import type { Order } from '@prisma/client'
import type { JwtPayload } from '@resources/auth/models'
import type { CreateOrderDto } from './dto/CreateOrder.dto'
import type { UpdateOrderStatusDto } from './dto/UpdateOrderStatus.dto'

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @UseGuards(JwtGuard)
  @Post()
  public create(
    @Body() dto: CreateOrderDto,
    @Req() req: Request
  ): Promise<{ orderId: string }> {
    const userPayload = req.user as JwtPayload
    return this.orderService.create({
      ...dto,
      userId: userPayload.sub
    })
  }

  @UseGuards(JwtGuard)
  @Get()
  @HttpCode(HttpStatus.OK)
  public findAllUserOrders(@Req() req: Request): Promise<Order[]> {
    const userPayload = req.user as JwtPayload
    return this.orderService.findAllUserOrders(userPayload.sub)
  }

  @Get(':id')
  public fetchUserOrderById(@Param('id') orderId: string): Promise<Order> {
    return this.orderService.fetchUserOrderById(orderId)
  }

  // TODO: Delivery.
  @Get('parameters')
  public getOrderParameters() {
    return this.orderService.getOrderParameters()
  }

  @Patch(':id/update_status')
  public updateStatus(
    @Param('id') id: string,
    @Body() { status }: UpdateOrderStatusDto,
    @Req() req: Request,
    @Res() res: Response
  ) {
    const userPayload = req.user as JwtPayload
    return this.orderService.updateStatus({
      orderId: id,
      userId: userPayload.sub,
      status,
      res
    })
  }
}
