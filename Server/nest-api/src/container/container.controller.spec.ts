import { Test, TestingModule } from '@nestjs/testing';
import { ContainerController } from './container.controller';
import { ContainerService } from './container.service';
import { ContainerProvider } from './container';
import { Database } from '../database';

describe('Container Controller', () => {
  let controller: ContainerController;
  let service: ContainerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContainerController],
      providers: [ContainerService, ...ContainerProvider, ...Database],
    }).compile();

    service = module.get<ContainerService>(ContainerService);
    controller = module.get<ContainerController>(ContainerController);
    try {
      await (await Database[0].useFactory()).connection.dropCollection('containers');
    }
    catch(e){}
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('test create', async (done) => {
    let container = await controller.create({unique_id: 'test container', status: true});
    expect(container).toBeDefined();
    let findContainers = await controller.findAll();
    expect(findContainers).toBeDefined();
    expect(findContainers.data.length).toBeGreaterThan(0);
    expect(findContainers.data[0].attributes['unique-id']).toBeDefined();
    done();
  });

  

    // it('should throw error', async (done) => {
    //   const handle_exept = async () => {
    //     return controller.create({title: '', extension: '', content: ''});
    //   };
    //   /*- Check handling extension error -*/
    //   //let container = await handle_exept('Test title', 'json', '');
    //   await expect(handle_exept).toThrowError(new Error('Invalid extension'));
  
    //   /*- Check handling container content error -*/
    //   // container = await handle_exept('Test title', 'py', '');
    //   // await expect(container).toThrowError(new Error('Empty container'));
    //   //
    //   // let findContainers = await controller.findAll();
    //   // expect(findContainers).toBeDefined();
    //   // expect(findContainers.data.length).toEqual(0);
    //   done();
    // });
  
    it('test update', async () => {
      expect(await controller.update()).toEqual('Not yet implemented');
    })
  
    it('test delete',   async () => {
      expect(await controller.delete()).toEqual('Not yet implemented');
    })
});
