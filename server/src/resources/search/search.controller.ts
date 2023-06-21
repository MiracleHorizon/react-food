import { Controller, Get, Query } from '@nestjs/common'
import { Product } from '@prisma/client'

import { SearchService } from './search.service'

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('products')
  public searchProducts(@Query('query') query: string): Promise<Product[]> {
    return this.searchService.searchProducts(query)
  }
}
