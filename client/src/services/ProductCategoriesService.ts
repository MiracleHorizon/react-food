import axios from 'axios'

import type { ProductCategoryModel } from '@/models/product/ProductCategoryModel'
import type { PaginationParams } from '@/models/api/PaginationParams'
import type { NavigationCategory } from '@/models/NavigationCategory'

export default class ProductCategoriesService {
  private static api = axios.create({
    baseURL: process.env.SERVER_API + '/product_category'
  })

  public static async fetchOneCategory(
    categoryId: string
  ): Promise<ProductCategoryModel> {
    try {
      const { data } = await this.api.get<ProductCategoryModel>(categoryId)

      return data
    } catch (e) {
      throw e
    }
  }

  public static async fetchAllCategories({
    skip,
    take
  }: PaginationParams): Promise<ProductCategoryModel[]> {
    try {
      const query = `?skip=${skip}&take=${take}`
      const { data } = await this.api.get<ProductCategoryModel[]>(query)

      return data
    } catch (e) {
      throw e
    }
  }

  public static async fetchNavCategories(): Promise<NavigationCategory[]> {
    try {
      const { data } = await this.api.get<NavigationCategory[]>(
        '/navigation/all'
      )

      return data
    } catch (e) {
      throw e
    }
  }
}
