import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min
} from 'class-validator'

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  public title: string

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  public description?: string

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
  public imageUrl: string

  @IsNotEmpty()
  @IsString()
  public tag: string
}
