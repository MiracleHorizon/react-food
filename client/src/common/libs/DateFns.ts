import format from 'date-fns/format'
import ru from 'date-fns/locale/ru'

export class DateFns {
  public static formatDateWithFormat(
    baseDate: Date,
    dateFormat: string
  ): string {
    return format(new Date(baseDate), dateFormat, {
      locale: ru,
      weekStartsOn: 1
    })
  }
}
