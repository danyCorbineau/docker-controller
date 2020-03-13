import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import {Container} from "./container.interface";
import {ContainerModel} from "./container.model";


@Injectable()
export class ContainerService {
    constructor(
        @Inject('CONTAINER_MODEL')
        private readonly containerModel: Model<Container>,
    ) {}

    async findAll(): Promise<ContainerModel[]> {
        // return this.containerModel.find().exec();
        return [
            {unique_id: '1220', names: ['abc'], image: 'img', state: 'running', ports: ['123:567', '789:1011'], created: 1583508175, status: 'looking for ...', scripts: {}},
            {unique_id: '456', names: ['def'], image: 'img', state: 'running', ports: ['123:567', '789:1011'], created: 1583508175, status: 'looking for ...', scripts: {}},
            {unique_id: '789', names: ['ghi'], image: 'img', state: 'running', ports: ['123:567', '789:1011'], created: 1583508175, status: 'looking for ...', scripts: {}},
            {unique_id: '101', names: ['klm'], image: 'img', state: 'running', ports: ['123:567', '789:1011'], created: 1583508175, status: 'looking for ...', scripts: {}},
            {unique_id: '112', names: ['nop'], image: 'img', state: 'running', ports: ['123:567', '789:1011'], created: 1583508175, status: 'looking for ...', scripts: {}},
          ];
    }

    async create(container: Container): Promise<Container> {
        const createdcontainer = new this.containerModel(container);
        return createdcontainer.save();
    }
}
