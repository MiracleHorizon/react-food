import { Injectable } from '@nestjs/common'
import type { AddressLocation, Product } from '@prisma/client'

import { PrismaService } from 'prisma/prisma.service'
import { SearchAddressesLocationsArgs } from './models/SearchAddressesLocationsArgs'

@Injectable()
export class SearchService {
  constructor(private readonly prisma: PrismaService) {}

  public async searchProducts(query: string): Promise<Product[]> {
    return this.prisma.product.findMany({
      where: {
        title: {
          contains: query
        },
        OR: {
          title: {
            contains: query.toLowerCase()
          },
          description: {
            contains: query
          }
        }
      }
    })
  }

  public async searchAddressesLocations({
    query,
    ...paginationParams
  }: SearchAddressesLocationsArgs): Promise<AddressLocation[]> {
    return this.prisma.addressLocation.findMany({
      where: {
        OR: [
          {
            city: {
              contains: query,
              mode: 'insensitive'
            }
          },
          {
            street: {
              contains: query,
              mode: 'insensitive'
            }
          },
          {
            house: {
              contains: query,
              mode: 'insensitive'
            }
          }
        ]
      },
      orderBy: {
        street: 'asc'
      },
      ...paginationParams
    })
  }
}
