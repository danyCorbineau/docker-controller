import {Get, Post, Put, Delete, Controller, Body, HttpException, HttpStatus, Param} from '@nestjs/common';
import { ContainerService } from './container.service';
import * as JSONApi from 'jsonapi-serializer';

@Controller('containers')
export class ContainerController {
    attributes: string[] = ['unique_id', 'status', 'scripts', 'names', 'image', 'state', 'ports', 'created'];
    constructor(public contService: ContainerService){}

    @Get()
    async findAll(): Promise<any> {
        let data: any = await this.contService.findAll();
        /*let data_encoded: any = {...data};
        for(let i = 0; i < data.length; i++) {
            if (data[i].content !== undefined) {
                const decodedcontainer = data[i].content.toString('utf-8');
                data_encoded[i].content = decodedcontainer;
                console.log(data_encoded[i].content.toString());
            }
        }*/
        return new JSONApi.Serializer('container', {
                attributes: this.attributes,
            }
        ).serialize(data);
    }

    @Post()
    async create(@Body() data: any) {
        let unique_id: String = '';
        let status: String = '';
        try{
            if(data.unique_id && data.status){
                let container: any = {
                    unique_id : data.unique_id,
                    status : data.status,
                }

                const dat = await this.contService.create(container);
                return new JSONApi.Serializer('container', {
                        attributes: this.attributes,
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

    @Put()
    async update() {
        return 'Not yet implemented';
    }

    @Delete()
    async delete() {
        return 'Not yet implemented';
    }
}
