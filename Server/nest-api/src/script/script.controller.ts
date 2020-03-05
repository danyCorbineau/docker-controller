import {Get, Post, Put, Delete, Controller, Body} from '@nestjs/common';
import {Script} from "./script.interface";
import {ScriptService} from "./script.service";
import * as JSONApi from 'jsonapi-serializer';

@Controller('script')
export class ScriptController {
    constructor(public scrService: ScriptService) {}

    @Get()
    async findAll(): Promise<Script[]> {
        let data: any = await this.scrService.findAll();
        /*let data_encoded: any = {...data};
        for(let i = 0; i < data.length; i++) {
            if (data[i].content !== undefined) {
                const decodedScript = data[i].content.toString('utf-8');
                data_encoded[i].content = decodedScript;
                console.log(data_encoded[i].content.toString());
            }
        }*/
        return new JSONApi.Serializer('script', {
                attributes: ['name', 'ext', 'createdAt', 'content'],
            }
        ).serialize(data);
    }

    @Post()
    async create(@Body() data: any) {
        let script: any = {
            name: data.title,
            ext: data.extension,
            createdAt: new Date,
            content: data.content
        };

        return await this.scrService.create(script);
    }

    @Put()
    async update() {
        return 'Not yet implemented';
    }

    @Delete()
    async delete() {
        return 'Not yet implemented';
    }
}
