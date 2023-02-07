import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { Request } from 'express'

import { JwtPayloadVm } from '@/resources/auth/view-models'

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh'
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        RefreshTokenStrategy.extractJWT,
        ExtractJwt.fromAuthHeaderAsBearerToken()
      ]),
      secretOrKey: process.env.REFRESH_TOKEN_SECRET
    })
  }

  private static extractJWT(req: Request): string | null {
    if (req.cookies && 'refreshToken' in req.cookies) {
      return req.cookies.refreshToken
    }

    return null
  }

  public validate(payload: JwtPayloadVm) {
    return payload
  }
}
