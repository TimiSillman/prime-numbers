import { Transform, Type } from 'class-transformer'
import { IsArray, IsInt, IsNumber } from 'class-validator'

export class SumAndCheckQuery {
  @IsArray()
  @IsNumber({}, { each: true })
  @IsInt({ each: true })
  @Transform(({ value }) => {
    //Check if format is ?numbers=1,2,3 or ?numbers[]=1&numbers[]=2&numbers[]=3
    //Converts string of numbers to array of numbers
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
