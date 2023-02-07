import * as bcrypt from 'bcrypt'

export class BcryptProvider {
  public static async hash(value: string, saltRounds: number) {
    return await bcrypt.hash(value, saltRounds)
  }

  public static async compare(value, encrypted): Promise<boolean> {
    return await bcrypt.compare(value, encrypted)
  }
}
