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
                        return new JSONApi.Serializer('script', {
                            attributes: ['name', 'ext', 'createdAt', 'content'],
                        }
                        ).serialize(res[0]);
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
        let update = await this.scrService.update(id, data);
        console.log(update)
        return new JSONApi.Serializer('script', {
                attributes: ['name', 'ext', 'createdAt', 'content'],
            }
            ).serialize(update);
    }

    @Delete(':id')
    async delete(@Param('id') id: any) {
        return new JSONApi.Serializer('script', {
            attributes: ['name', 'ext', 'createdAt', 'content'],
        }
    ).serialize(await this.scrService.delete(id));
    }
}
