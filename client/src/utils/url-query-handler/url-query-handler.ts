import { NextParsedUrlQuery } from 'next/dist/server/request-meta'

export class UrlQueryHandler {
  constructor(private readonly query: NextParsedUrlQuery) {}

  public getId(): string {
    return this.getCustomQuery('id')
  }

  public getCustomQuery(queryName: string): string {
    const queryField = this.query[`${queryName}`]

    if (!queryField) {
      throw new Error(`В query отсутствует значение ${queryName}.`)
    }

    const field = Array.isArray(queryField) ? queryField[0] : queryField

    if (!field) {
      throw new Error(`Не удалось получить значение ${queryName}`)
    }

    return field
  }
}
