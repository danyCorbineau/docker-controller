import { Test, TestingModule } from '@nestjs/testing';
import { ScriptService } from './script.service';
import {ScriptProvider} from "./script";
import {Database} from "../database";

describe('ScriptService', () => {
  let service: ScriptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScriptService, ...ScriptProvider, ...Database],
    }).compile();

    service = module.get(ScriptService); // <ScriptService>
    try {
      await (await Database[0].useFactory()).connection.dropCollection('scripts');
    }
    catch(e){}
  });
  afterAll(() => setTimeout(() => process.exit(), 1000))

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('check default date', async (done) => {
    let script: any = {content: Buffer.from('print(\'hello\')'), ext: 'py', name: 'Test', createdAt: new Date()};
    let newScript = await service.create(script);
    expect(newScript._id).toBeDefined();
    script = {content: Buffer.from('print(\'hello\')'), ext: 'py', name: ''};
    newScript = await service.create(script);
    expect(newScript._id).toBeDefined();
    done();
  });

  it('create and check is created', async (done) => {
    let script: any = {content: Buffer.from('print(\'hello\')'), ext: 'py', name: 'Test', createdAt: new Date()};
    let newScript = await service.create(script);
    expect(newScript._id).toBeDefined();
    let scripts = await service.findAll();
    expect(scripts.length).toBeGreaterThan(0);
    expect(scripts[0].name).toEqual('Test');
    done();
  });

});
