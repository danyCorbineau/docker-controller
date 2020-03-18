import { Injectable } from '@angular/core';
import {Container} from "../model/container";
import {ApiService} from "./api.service";
import { deserialize } from 'deserialize-json-api';

@Injectable({
  providedIn: 'root'
})
export class ContainerService extends ApiService<Container> {
  API_URL = 'http://dany-corbineau.fr:9010';
  entity_endpoint =  'containers';
  async getContainers(): Promise<any>
  {
    try {
      let containerObjectsJsonAPI:any = await new Promise(r => {let obs = this.getAll().subscribe(data => {obs.unsubscribe(); r(data)})});
      return deserialize(containerObjectsJsonAPI).data;
    } catch(e) {
      console.log(e);
      return [];
    }
    
    
  }

}
