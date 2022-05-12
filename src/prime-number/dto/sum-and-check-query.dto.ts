import { Transform, Type } from 'class-transformer'
import { IsArray, IsInt, IsNumber } from 'class-validator'

export class SumAndCheckQuery {
  @IsArray()
  @IsNumber({}, { each: true })
  @IsInt({ each: true })
  @Transform(({ value }) => {
    if (typeof value == 'string') {
      return value
        .trim()
        .split(',')
        .map((i) => Number(i))
    } else {
      return value.map((i) => Number(i))
    }
  })
  numbers?: number[]
}
