import * as bcrypt from 'bcrypt'

export class BcryptProvider {
  public static async hash(value: string, saltRounds: number): Promise<string> {
    return await bcrypt.hash(value, saltRounds)
  }

  public static async compare(
    value: string,
    encrypted: string
  ): Promise<boolean> {
    return await bcrypt.compare(value, encrypted)
  }
}
