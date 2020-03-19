import { Injectable } from '@angular/core';
import {Container} from '../model/container';
import {ApiService} from './api.service';
import { deserialize } from 'deserialize-json-api';

@Injectable({
  providedIn: 'root'
})
export class ContainerService extends ApiService<Container> {
  API_URL = 'http://localhost:3000';
  ENTITY_ENDPOINT =  'containers';
  async getContainers(): Promise<any> {
    try {
      const containerObjectsJsonAPI: any = await new Promise(r => {
        const obs = this.getAll().subscribe(data => {obs.unsubscribe(); r(data); });
      });
      return deserialize(containerObjectsJsonAPI).data;
    } catch (e) {
      console.log(e);
      return [];
    }

  }

}
