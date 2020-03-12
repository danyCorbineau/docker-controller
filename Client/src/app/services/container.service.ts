import { Injectable } from '@angular/core';
import {Container} from "../model/container";

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  constructor() {
  }

  async getContainers(): Promise<Container[]>
  {
    return [
      // tslint:disable-next-line: max-line-length
      {_id: '1220', names: 'abc', image: 'img', state: 'running', ports: ['123:567', '789:1011'], created: 1583508175, status: 'looking for ...'},
      // tslint:disable-next-line: max-line-length
      {_id: '456', names: 'def', image: 'img', state: 'running', ports: ['123:567', '789:1011'], created: 1583508175, status: 'looking for ...'},
      // tslint:disable-next-line: max-line-length
      {_id: '789', names: 'ghi', image: 'img', state: 'running', ports: ['123:567', '789:1011'], created: 1583508175, status: 'looking for ...'},
      // tslint:disable-next-line: max-line-length
      {_id: '101', names: 'klm', image: 'img', state: 'running', ports: ['123:567', '789:1011'], created: 1583508175, status: 'looking for ...'},
      // tslint:disable-next-line: max-line-length
      {_id: '112', names: 'nop', image: 'img', state: 'running', ports: ['123:567', '789:1011'], created: 1583508175, status: 'looking for ...'},
    ];
  }

}
