import { NextParsedUrlQuery } from 'next/dist/server/request-meta'

export class UrlQueryHandler {
  constructor(private readonly query: NextParsedUrlQuery) {}

  public getId(): string {
    const queryId = this.query.id

    if (!queryId) {
      throw new Error('В query отсутствует значение id.')
    }

    const id = Array.isArray(queryId) ? queryId[0] : queryId

    if (!id) {
      throw new Error('Не удалось получения значение id.')
    }

    return id
  }
}
