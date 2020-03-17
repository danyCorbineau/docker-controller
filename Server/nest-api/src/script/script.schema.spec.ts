import { Test, TestingModule } from '@nestjs/testing';
import { ScriptSchema } from './script.schema';


describe('ScriptSchema', () => {

    it('should be defined', () => {
        expect(ScriptSchema).toBeDefined();
        expect(ScriptSchema.obj.createdAt.default()).toBeDefined();
    });
    afterAll(() => setTimeout(() => process.exit(), 1000))
});
