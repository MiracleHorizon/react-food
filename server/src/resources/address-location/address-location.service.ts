import {
  BadRequestException,
  ForbiddenException,
  Injectable
} from '@nestjs/common'
import { UserRole } from '@prisma/client'

import { PrismaService } from 'prisma/prisma.service'
import { CreateAddressLocationDto } from './dto/CreateAddressLocationDto'
import type { JwtPayload } from '@resources/auth/models'

@Injectable()
export class AddressLocationService {
  constructor(private readonly prisma: PrismaService) {}

  public async createOne(
    dto: CreateAddressLocationDto,
    user: JwtPayload
  ): Promise<void> {
    if (user.role !== UserRole.ADMIN) {
      throw new ForbiddenException('Access denied')
    }

    if (await this.isLocationExists(dto)) {
      throw new BadRequestException('Location already exists')
    }

    await this.prisma.addressLocation.create({
      data: dto
    })
  }

  private async isLocationExists({
    street,
    house
  }: CreateAddressLocationDto): Promise<boolean> {
    const location = await this.prisma.addressLocation.findFirst({
      where: {
        street,
        house
      }
    })

    return Boolean(location)
  }
}
