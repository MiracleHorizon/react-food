import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl
} from 'class-validator'

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  public title: string

  @IsString()
  @IsNotEmpty()
  public description: string

  @IsUrl()
  @IsNotEmpty()
  @IsOptional()
  public imageUrl: string

  @IsNumber()
  @IsNotEmpty()
  public price: number

  @IsNumber()
  @IsNotEmpty()
  public weight: number

  @IsString()
  @IsNotEmpty()
  public tag: string
}
