import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common'
import type { Request, Response } from 'express'

import { AuthService } from './auth.service'
import { CreateUserDto } from './dto/create-user.dto'
import { AuthDto } from './dto/auth.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signUp')
  public signUp(@Body() dto: CreateUserDto, @Res() res: Response) {
    return this.authService.signUp({ ...dto, res })
  }

  @Post('signIn')
  public signIn(
    @Body() dto: AuthDto,
    @Req() req: Request,
    @Res() res: Response
  ) {
    return this.authService.signIn(dto, req, res)
  }

  @Get('signOut')
  public signOut(@Req() req: Request, @Res() res: Response) {
    return this.authService.signOut(req, res)
  }
}
