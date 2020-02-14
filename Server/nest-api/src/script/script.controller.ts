import { Get, Post, Put, Delete, Controller } from '@nestjs/common';
import {Script} from "./script.interface";

@Controller('script')
export class ScriptController {
    @Get()
    async findAll(): Promise<string[]> {
        return ['Pizza', 'Coke'];
    }

    @Post()
    async create() {
        return 'Not yet implemented';
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
