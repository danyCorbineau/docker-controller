import { Test, TestingModule } from '@nestjs/testing';
import { ScriptController } from './script.controller';
import { ScriptService } from "./script.service";
import { ScriptProvider } from "./script";
import { Database } from '../database';
import {json} from "express";
import {HttpException, HttpStatus} from "@nestjs/common";

describe('Script Controller', () => {
  let controller: ScriptController;
  let service: ScriptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScriptController],
      providers: [ScriptService, ...ScriptProvider, ...Database],
    }).compile();

    service = module.get(ScriptService);
    controller = module.get(ScriptController);
    try {
      await (await Database[0].useFactory()).connection.dropCollection('scripts');
    }
    catch(e){}
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('test create', async (done) => {
    let script = await controller.create({title: 'title', extension: 'py', content: 'print();'});
    expect(script).toBeDefined();
    let findScripts = await controller.findAll();
    expect(findScripts).toBeDefined();
    expect(findScripts.data.length).toBeGreaterThan(0);
    expect(findScripts.data[0].id).toBeDefined();
    done();
  });

  it('should throw error script extension', async (done) => {
    /*- Check handling extension error -*/

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        controller.create({title: 'False test', extension: 'json', content: ''}).catch((e) => {
          expect(e).toBeDefined();
          expect(e.status).toEqual(403);
          expect(e.message.error).toEqual('Invalid extension');
          done();
        });
      }, 1000);
    });
  });

  it('should throw error script content', async (done) => {
    /*- Check handling script content error -*/

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        controller.create({title: 'False test', extension: 'py', content: ''}).catch((e) => {
          expect(e).toBeDefined();
          expect(e.status).toEqual(403);
          expect(e.message.error).toEqual('Empty script');
          done();
        });
      }, 1000);
    });
  });

  it('test update', async () => {
    let script = await controller.create({title: 'update script', extension: 'py', content: 'print();'});
    let id = script.data.id;
    let newScript: any = {
      name: 'new update name'
    }
    await controller.update(script.id, newScript);
    let updateRcv = await controller.findAll();
    expect(updateRcv.data[0].attributes.name).toEqual(newScript.name);
    expect(updateRcv.data[0].attributes.createdAt).toEqual(script.createdAt);
  })

  it('test delete',   async () => {
    let script = await controller.create({title: 'delete script', extension: 'py', content: 'print();'});
    let id = script.data.id;
    expect(id).toBeDefined();
    let find = await controller.findAll();
    expect(find.data.length).toEqual(1);

    let deleteReturn = await controller.delete(id);
    expect(deleteReturn).toEqual(script);
    find = await controller.findAll();
    expect(find.data.length).toEqual(0);
  })

});
