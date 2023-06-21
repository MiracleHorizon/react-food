import { Injectable } from '@nestjs/common'
import { Product } from '@prisma/client'

import { PrismaService } from 'prisma/prisma.service'

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
}
