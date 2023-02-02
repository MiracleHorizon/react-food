import type { NextParsedUrlQuery } from 'next/dist/server/request-meta'

export class ParsedUrlQueryHandler {
  constructor(private readonly parsedUrlQuery: NextParsedUrlQuery) {}

  public getId(): string {
    return this.getCustomQuery('id')
  }

  public getCustomQuery(queryName: string): string {
    const queryField = this.parsedUrlQuery[`${queryName}`]

    if (!queryField) {
      throw new Error(`В параметрах отсутствует значение ${queryName}`)
    }

    const field = Array.isArray(queryField) ? queryField[0] : queryField

    if (!field) {
      throw new Error(`Не удалось получить значение ${queryName}`)
    }

    return field
  }
}
