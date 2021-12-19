import { Test, TestingModule } from '@nestjs/testing';
import { HistorialesController } from './historiales.controller';

describe('HistorialesController', () => {
  let controller: HistorialesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistorialesController],
    }).compile();

    controller = module.get<HistorialesController>(HistorialesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
