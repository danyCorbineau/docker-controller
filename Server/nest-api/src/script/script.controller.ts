import {Get, Post, Put, Delete, Controller, Body, HttpException, HttpStatus, Param} from '@nestjs/common';
import {Script} from "./script.interface";
import {ScriptService} from "./script.service";
import * as JSONApi from 'jsonapi-serializer';

@Controller('scripts')
export class ScriptController {
    constructor(public scrService: ScriptService) {}

    @Get()
    async findAll(): Promise<any> {
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
        let title: string = "";
        let extension: string = "";
        const authorizedExt: string[] = ['js', 'py', 'sh', 'bash'];
        let content: any = "";
        try {
            if (data.title && data.extension) {
                this.scrService.checkUniqueName(data.title).then((res) => {
                    if (res.length > 0) {
                        throw "Script already exists !";
                    }
                });
                title = data.title;
                if (authorizedExt.indexOf(data.extension) !== -1) {
                    extension = data.extension;
                } else {
                    throw "Invalid extension";
                }
                if (typeof data.content !== undefined && data.content !== "") {
                    content = data.content;
                } else {
                    throw "Empty script";
                }

                let script: any = {
                    name: title,
                    ext: extension,
                    createdAt: new Date,
                    content: content
                }
                const dat = await this.scrService.create(script);
                return new JSONApi.Serializer('script', {
                        attributes: ['name', 'ext', 'createdAt', 'content'],
                    }
                ).serialize(dat);
            }
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: e,
            }, 403);
        }
    }

    @Put(':id')
    async update(@Param('id') id, @Body() data: Script) {
        return this.scrService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id') id: any) {
        return await this.scrService.delete(id);
    }
}
