import { Test, TestingModule } from '@nestjs/testing';
import { ScriptController } from './script.controller';
import { ScriptService } from "./script.service";
import { ScriptProvider } from "./script";
import { Database } from '../database';
import {json} from "express";

describe('Script Controller', () => {
  let controller: ScriptController;
  let service: ScriptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScriptController],
      providers: [ScriptService, ...ScriptProvider, ...Database],
    }).compile();

    service = module.get<ScriptService>(ScriptService);
    controller = module.get<ScriptController>(ScriptController);
    try {
      await (await Database[0].useFactory()).connection.dropCollection('scripts');
    }
    catch(e){}
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('test create', async (done) => {
    let script = await controller.create({title: 'title', extension: 'py', content: ''})
    expect(script).toBeDefined();
    let findScripts = await controller.findAll();
    expect(findScripts).toBeDefined();
    expect(findScripts.data.length).toEqual(1);
    expect(findScripts.data[0].id).toBeDefined();
    done();
  });

  it('test update', async () => {
    expect(await controller.update()).toEqual('Not yet implemented');
  })

  it('test dalete',   async () => {
    expect(await controller.delete()).toEqual('Not yet implemented');
  })

});
