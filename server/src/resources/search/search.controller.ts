import { Controller, Get, Query } from '@nestjs/common'
import type { AddressLocation, Product } from '@prisma/client'

import { SearchService } from './search.service'

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('products')
  public searchProducts(@Query('query') query: string): Promise<Product[]> {
    return this.searchService.searchProducts(query)
  }

  @Get('addresses_locations')
  public searchAddressesLocations(
    @Query('query') query: string,
    @Query('skip') skip: string,
    @Query('take') take: string
  ): Promise<AddressLocation[]> {
    return this.searchService.searchAddressesLocations({
      query,
      skip: skip ? +skip : undefined,
      take: take ? +take : undefined
    })
  }
}
