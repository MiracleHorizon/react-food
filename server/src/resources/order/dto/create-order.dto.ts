import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  Min
} from 'class-validator'

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  public address: string

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  public cutleryCount: number

  @IsArray()
  // TODO Доработать. CartProduct как основа
  public productsData: any[]

  // @IsUUID()
  // @IsString()
  // @IsNotEmpty()
  // public billingCardId: string

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  public totalPrice: number

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  public productsPrice: number

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  public deliveryPrice: number

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  public serviceFee: number
}
