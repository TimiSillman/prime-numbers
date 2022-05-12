import { Test, TestingModule } from '@nestjs/testing'
import { PrimeNumberController } from './prime-number.controller'
import { PrimeNumberService } from './prime-number.service'

describe('PrimeNumberController', () => {
  let controller: PrimeNumberController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrimeNumberService],
      controllers: [PrimeNumberController],
    }).compile()

    controller = module.get<PrimeNumberController>(PrimeNumberController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  test('sumandcheck endpoint', async () => {
    expect(await controller.sumAndCheck({ numbers: [2, 3, 6] })).toStrictEqual({
      result: 11,
      isPrime: true,
    })

    expect(
      await controller.sumAndCheck({ numbers: [32, 40, 23, 2] }),
    ).toStrictEqual({
      result: 97,
      isPrime: true,
    })
  })
})
