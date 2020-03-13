import { Injectable } from '@angular/core';
import {Container} from "../model/container";
import {Service, DocumentCollection, Resource} from 'ngx-jsonapi';


@Injectable({
  providedIn: 'root'
})
export class ContainerService extends Service {

  public resource = Container;
  public type = 'containers';
  constructor() {
    super();
    this.register();
  }

}
