import { Controller, Get } from '@nestjs/common'

import type { ProductCategory } from '@prisma/client'
import { EnvironmentService } from './environment.service'

@Controller('env')
export class EnvironmentController {
  constructor(private readonly environmentService: EnvironmentService) {}

  @Get('/navigation')
  public findAllNavigationCategories(): Promise<ProductCategory[]> {
    return this.environmentService.findAllNavigationCategories()
  }
}
