import { Test, TestingModule } from '@nestjs/testing';
import { ContainerSchema } from './container.schema';


describe('ScriptSchema', () => {

    it('should be defined', () => {
        expect(ContainerSchema).toBeDefined();
        expect(ContainerSchema.obj.status).toBeDefined();
    });
});
