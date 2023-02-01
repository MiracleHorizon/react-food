import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl
} from 'class-validator' // TODO: Валидация

// TODO: Валидация
export class AddProductDto {
  @IsString()
  @IsNotEmpty()
  public title: string

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

  @IsString()
  @IsNotEmpty()
  public productReferenceId
}
