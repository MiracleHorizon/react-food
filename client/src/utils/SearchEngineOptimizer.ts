import { writePageTitle } from '@helpers/writePageTitle'
import { APP_DESCRIPTION, APP_KEYWORDS } from '@constants/seo'
import type { SeoData } from '@models/SeoData'

export class SearchEngineOptimizer {
  private readonly title: string
  private readonly description?: string
  private readonly keywords?: string[]

  constructor({ title, description, keywords }: SeoData) {
    this.title = title
    this.description = description
    this.keywords = keywords
  }

  public getMetaData(): Pick<SeoData, 'title'> & {
    description: string
    keywords: string[]
  } {
    return {
      title: writePageTitle(this.title),
      description: `${APP_DESCRIPTION}. ${this.description ?? ''}`,
      keywords: this.getUniqueKeywords()
    }
  }

  private getUniqueKeywords(): string[] {
    return [...new Set(this.getLowercaseKeywords())]
  }

  private getLowercaseKeywords(): string[] {
    const keywords = APP_KEYWORDS.concat(this.keywords ?? [])
    return keywords.map(keyword => keyword.toLowerCase())
  }
}
