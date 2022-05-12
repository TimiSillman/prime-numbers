import { Injectable } from '@nestjs/common'

@Injectable()
export class PrimeNumberService {
  // Solution from: https://stackoverflow.com/a/40200710
  isPrime(number: number): boolean {
    for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
      if (number % i === 0) {
        return false
      }
    }
    return number > 1
  }
}
