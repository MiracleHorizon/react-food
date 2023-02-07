import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { Request } from 'express'

import { JwtPayloadVm } from '../view-models'

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        AccessTokenStrategy.extractJWT,
        ExtractJwt.fromAuthHeaderAsBearerToken()
      ]),
      secretOrKey: process.env.ACCESS_TOKEN_SECRET
    })
  }

  private static extractJWT(req: Request): string | null {
    if (req.cookies && 'accessToken' in req.cookies) {
      return req.cookies.accessToken
    }

    return null
  }

  public validate(payload: JwtPayloadVm): JwtPayloadVm {
    return payload
  }
}
