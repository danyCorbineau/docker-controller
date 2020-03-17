import { Test, TestingModule } from '@nestjs/testing';
import { ContainerService } from './container.service';
import { ContainerProvider } from './container';
import {Database} from "../database";

describe('ContainerService', () => {
  let service: ContainerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContainerService, ...ContainerProvider, ...Database],
    }).compile();

    service = module.get<ContainerService>(ContainerService);
  });
  afterAll(() => setTimeout(() => process.exit(), 1000))

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
