export class LocalStorageHandler {
  public static set<T extends unknown>(itemName: string, payload: T): void {
    localStorage.setItem(itemName, JSON.stringify(payload))
  }

  public static extract<T extends unknown>(itemName: string): T | null {
    const item = localStorage.getItem(itemName)
    return item ? (JSON.parse(item) as T) : null
  }

  public static remove(itemName: string): void {
    localStorage.removeItem(itemName)
  }
}
