import { Get, Query } from '@nestjs/common'
import { Controller } from '@nestjs/common'

@Controller('prime-number')
export class PrimeNumberController {
  // -> {"result": 6, "isPrime": false}
  // Input: ?action=sumandcheck&numbers=1,2,3
  @Get('sumandcheck')
  async sumAndCheck(@Query() query: any): Promise<any> {
    return {}
  }

  // -> {"isPrime": true}
  // Input: ?action=checkprime&number=89
  @Get('checkprime')
  async checkPrime(): Promise<any> {
    return {}
  }
}
