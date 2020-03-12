import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Container } from './container.interface';

@Injectable()
export class ContainerService {
    constructor(
        @Inject('CONTAINER_MODEL')
        private readonly containerModel: Model<Container>,
    ) {}

    async findAll(): Promise<Container[]> {
        // return this.containerModel.find().exec();
        return [
            // tslint:disable-next-line: max-line-length
            {unique_id: '1220', names: ['abc'], image: 'img', state: 'running', ports: ['123:567', '789:1011'], created: 1583508175, status: 'looking for ...'},
            // tslint:disable-next-line: max-line-length
            {unique_id: '456', names: ['def'], image: 'img', state: 'running', ports: ['123:567', '789:1011'], created: 1583508175, status: 'looking for ...'},
            // tslint:disable-next-line: max-line-length
            {unique_id: '789', names: ['ghi'], image: 'img', state: 'running', ports: ['123:567', '789:1011'], created: 1583508175, status: 'looking for ...'},
            // tslint:disable-next-line: max-line-length
            {unique_id: '101', names: ['klm'], image: 'img', state: 'running', ports: ['123:567', '789:1011'], created: 1583508175, status: 'looking for ...'},
            // tslint:disable-next-line: max-line-length
            {unique_id: '112', names: ['nop'], image: 'img', state: 'running', ports: ['123:567', '789:1011'], created: 1583508175, status: 'looking for ...'},
          ];
    }

    async create(container: Container): Promise<Container> {
        const createdcontainer = new this.containerModel(container);
        return createdcontainer.save();
    }
}
