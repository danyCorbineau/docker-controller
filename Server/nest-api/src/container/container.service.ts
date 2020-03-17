import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import {Container} from "./container.interface";
import {ContainerModel} from "./container.model";
const DockerService = require("../DockerService");


@Injectable()
export class ContainerService {
    constructor(
        @Inject('CONTAINER_MODEL')
        private readonly containerModel: Model<Container>,
    ) {}

    async findAll(): Promise<ContainerModel[]> {
        // return this.containerModel.find().exec();
        // @ts-ignore
        return (await DockerService.getContainers()).map((row) => {
            return {
                unique_id: row.Id,
                names: row.Names.join(', '),
                image: row.Image,
                state: row.State,
                ports: row.Ports.map((port) => port.PrivatePort + ':' + port.PublicPort),
                created: row.Created,
                status: row.Status,
                // scripts: {}
            }
        });
    }

    async create(container: Container): Promise<Container> {
        const createdcontainer = new this.containerModel(container);
        return createdcontainer.save();
    }
}
