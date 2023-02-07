import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  Req,
  Res,
  UseGuards
} from '@nestjs/common'
import { Request, Response } from 'express'

import { AuthService } from './auth.service'
import { SigninDto, SignupDto } from './dto'
import { JwtPayloadVm } from './view-models'
import { JwtGuard, JwtRefreshGuard } from '@common/guards'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('local/signup')
  @HttpCode(HttpStatus.CREATED)
  public signupLocal(
    @Body() dto: SignupDto,
    @Res() res: Response
  ): Promise<void> {
    return this.authService.signupLocal(dto, res)
  }

  @Post('local/signin')
  @HttpCode(HttpStatus.OK)
  public signinLocal(
    @Body() dto: SigninDto,
    @Res() res: Response
  ): Promise<void> {
    return this.authService.signinLocal(dto, res)
  }

  @UseGuards(JwtGuard)
  @Patch('signout')
  @HttpCode(HttpStatus.OK)
  public signout(@Req() req: Request, @Res() res: Response): Promise<void> {
    const userPayload = req.user as JwtPayloadVm
    return this.authService.signout(userPayload.sub, res)
  }

  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  public refreshTokens(
    @Req() req: Request,
    @Res() res: Response
  ): Promise<void> {
    const userPayload = req.user as JwtPayloadVm
    return this.authService.refreshTokens(
      userPayload.sub,
      req.cookies.refreshToken,
      res
    )
  }

  @UseGuards(JwtRefreshGuard)
  @Get('role')
  @HttpCode(HttpStatus.OK)
  public fetchRole(@Req() req: Request) {
    const userPayload = req.user as JwtPayloadVm
    return {
      role: userPayload.role
    }
  }
}
