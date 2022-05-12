import { Test, TestingModule } from '@nestjs/testing'
import { PrimeNumberService } from './prime-number.service'

describe('PrimeNumberService', () => {
  let service: PrimeNumberService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrimeNumberService],
    }).compile()

    service = module.get<PrimeNumberService>(PrimeNumberService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  test('test prime numbers 2, 31, 53, 773', () => {
    expect(service.isPrime(2)).toBe(true)
    expect(service.isPrime(31)).toBe(true)
    expect(service.isPrime(53)).toBe(true)
    expect(service.isPrime(773)).toBe(true)
  })

  test('test non prime numbers 1, -40, 0, 72', () => {
    expect(service.isPrime(1)).toBe(false)
    expect(service.isPrime(-40)).toBe(false)
    expect(service.isPrime(0)).toBe(false)
    expect(service.isPrime(72)).toBe(false)
  })
})
