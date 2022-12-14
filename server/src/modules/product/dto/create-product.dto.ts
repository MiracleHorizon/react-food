import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator'

export class CreateProductDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  public price: number

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  public weight: number

  @IsNotEmpty()
  @IsString()
  public title: string

  @IsNotEmpty()
  @IsString()
  public imageUrl: string

  @IsNotEmpty()
  @IsString()
  public tag: string
}
