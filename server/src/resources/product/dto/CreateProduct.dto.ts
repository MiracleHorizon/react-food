import {
  IsInt,
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
  public imagePath?: string

  @IsNumber()
  @IsNotEmpty()
  public fullPrice: number

  @IsNumber()
  @IsInt()
  @IsNotEmpty()
  public discountPercent: number

  @IsNumber()
  @IsNotEmpty()
  public weight: number

  @IsString()
  @IsNotEmpty()
  public tag: string
}
