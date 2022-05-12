import { Type } from 'class-transformer'
import { IsInt, IsNumber } from 'class-validator'

export class CheckPrimeQuery {
  @Type(() => Number)
  @IsNumber()
  @IsInt()
  number: number
}
