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
        return this.containerModel.find().exec();
    }

    async create(container: Container): Promise<Container> {
        const createdcontainer = new this.containerModel(container);
        return createdcontainer.save();
    }
}
