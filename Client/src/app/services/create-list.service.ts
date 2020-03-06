import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';
import { CreateScript } from '../model/create-script';

@Injectable({
  providedIn: 'root'
})
export class CreateListService extends ApiService<CreateScript> {

  API_URL: string = environment.Api.url;
  entity_endpoint = 'scripts';

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }
}
