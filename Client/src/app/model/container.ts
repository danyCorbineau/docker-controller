import {Service, Resource, DocumentCollection, DocumentResource } from 'ngx-jsonapi';

export class Container extends Resource{
  public attributes = {
    unique_id: '',
    names: '',
    image: '',
    state: '',
    ports: [],
    created: 0,
    status: '',
  }

}
