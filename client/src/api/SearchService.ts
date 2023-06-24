import axios from 'axios'

import { SERVER_API } from '@constants/env'
import type { ShowcaseProductModel } from '@models/product/ShowcaseProduct'

class SearchService {
  public async searchProducts(query: string): Promise<ShowcaseProductModel[]> {
    try {
      const url = `${SERVER_API}/search/products`
      const { data } = await axios.get<ShowcaseProductModel[]>(url, {
        params: {
          query
        }
      })

      return data
    } catch (err) {
      throw err
    }
  }
}

export const searchService = new SearchService()
