import { Test, TestingModule } from '@nestjs/testing';
import { HistorialesService } from './historiales.service';

describe('HistorialesService', () => {
  let service: HistorialesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistorialesService],
    }).compile();

    service = module.get<HistorialesService>(HistorialesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
