import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IApi } from './iapi';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> implements IApi<T> {
  API_URL: string;
  entity_endpoint: string;

  constructor(private http: HttpClient) { }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.API_URL + '/' + this.entity_endpoint);

  }
  getOne(id: number): Observable<T> {
    return this.http.get<T>(this.API_URL + '/' + this.entity_endpoint + '/' + id);
  }
  add(entity: T): Observable<T> {
    console.log('test : ', entity);
    return this.http.post<T>(this.API_URL + '/' + this.entity_endpoint, entity);
  }
  update(entity: T) {
    return this.http.put<T>(this.API_URL + '/' + this.entity_endpoint, entity);
  }
  delete(entity: T) {
    return this.http.delete(this.API_URL + '/' + this.entity_endpoint);
  }
}
