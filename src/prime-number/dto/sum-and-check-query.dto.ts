import { Type } from 'class-transformer'
import { IsArray, IsInt, IsNumber } from 'class-validator'

export class SumAndCheckQuery {
  @IsInt({ each: true })
  @Type(() => Number)
  @IsArray()
  @IsNumber({}, { each: true })
  numbers: number[]
}
