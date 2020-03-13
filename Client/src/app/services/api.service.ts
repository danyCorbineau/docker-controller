import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApi } from './iapi';
import { HttpClient } from '@angular/common/http';

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
    try {
      return this.http.post<T>(this.API_URL + '/' + this.entity_endpoint, entity);
    } catch (e) {
      console.error(e);
      return null;
    }
  }
  update(entity: T) {
    return this.http.put<T>(this.API_URL + '/' + this.entity_endpoint, entity);
  }
  delete(id: number) {
    return this.http.delete(this.API_URL + '/' + this.entity_endpoint + '/' + id);
  }
}
