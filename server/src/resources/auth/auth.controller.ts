import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common'

import { AuthService } from './auth.service'
import { CreateUserDto } from './dto/create-user.dto'
import { AuthDto } from './dto/auth.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signUp')
  public signUp(@Body() dto: CreateUserDto) {
    return this.authService.signUp(dto)
  }

  @Post('signIn')
  public signIn(@Body() dto: AuthDto, @Req() req, @Res() res) {
    return this.authService.signIn(dto, req, res)
  }

  @Get('signOut')
  public signOut(@Req() req, @Res() res) {
    return this.authService.signOut(req, res)
  }
}
