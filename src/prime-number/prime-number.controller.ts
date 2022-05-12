import { Get, Query } from '@nestjs/common'
import { UsePipes } from '@nestjs/common'
import { ValidationPipe } from '@nestjs/common'
import { Controller } from '@nestjs/common'
import { CheckPrimeQuery } from './dto/prime-check.dto'
import { SumAndCheckQuery } from './dto/sum-and-check-query.dto'
import { PrimeNumberService } from './prime-number.service'

@Controller('prime-number')
export class PrimeNumberController {
  constructor(private readonly primeNumberService: PrimeNumberService) {}

  // Result: -> {"result": 6, "isPrime": false}
  // Input: ?action=sumandcheck&numbers=1,2,3

  //Validate query with pipes defined in dto
  @UsePipes(new ValidationPipe({ transform: true }))
  @Get('sumandcheck')
  async sumAndCheck(
    @Query() query: SumAndCheckQuery,
  ): Promise<{ result: number; isPrime: boolean }> {
    const sum = query.numbers.reduce((a, b) => a + b, 0)

    return {
      result: sum,
      isPrime: this.primeNumberService.isPrime(sum),
    }
  }

  // Result: -> {"isPrime": true}
  // Input: ?action=checkprime&number=89
  @UsePipes(new ValidationPipe({ transform: true }))
  @Get('checkprime')
  async checkPrime(
    @Query() query: CheckPrimeQuery,
  ): Promise<{ isPrime: boolean }> {
    return {
      isPrime: this.primeNumberService.isPrime(query.number),
    }
  }
}
