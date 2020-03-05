import { Test, TestingModule } from '@nestjs/testing';
import { ScriptController } from './script.controller';
import { ScriptService } from "./script.service";

describe('Script Controller', () => {
  let controller: ScriptController;
  let service: ScriptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScriptController],
      providers: [ScriptService],
    }).compile();

    service = module.get<ScriptService>(ScriptService);
    controller = module.get<ScriptController>(ScriptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  /* -- Script creation tests -- */
  describe('Script creation', () => {
    it('should be created', function () {
      //expect(this.ScriptController.create()).toBe();
    });
  });
  /* -- */
});
