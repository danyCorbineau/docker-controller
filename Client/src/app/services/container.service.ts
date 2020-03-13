import { Injectable } from '@angular/core';
import {Container} from "../model/container";
import {ApiService} from "./api.service";
// @ts-ignore
import { deserialize } from 'json-api-deserialize';

@Injectable({
  providedIn: 'root'
})
export class ContainerService extends ApiService<Container> {
  API_URL = 'http://localhost:3000';
  entity_endpoint =  'containers';
  async getContainers(): Promise<Container[]>
  {
    let containerObjectsJsonAPI:any = await new Promise(r => {let obs = this.getAll().subscribe(data => {obs.unsubscribe(); r(data)})});
    return deserialize(containerObjectsJsonAPI).data;
  }

}
