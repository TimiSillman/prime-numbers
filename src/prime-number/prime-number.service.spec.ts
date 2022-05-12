import { Test, TestingModule } from '@nestjs/testing';
import { PrimeNumberService } from './prime-number.service';

describe('PrimeNumberService', () => {
  let service: PrimeNumberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrimeNumberService],
    }).compile();

    service = module.get<PrimeNumberService>(PrimeNumberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
