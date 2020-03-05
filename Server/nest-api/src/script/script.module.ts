import { Module } from '@nestjs/common';
import {ScriptController} from "./script.controller";
import {ScriptService} from "./script.service";
import {ScriptProvider} from "./script";
import { Database } from '../database';

@Module({
    controllers: [ScriptController],
    providers: [ScriptService,
        ...Database,
        ...ScriptProvider,
    ]
})
export class ScriptModule {}
