import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApi } from './iapi';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> implements IApi<T> {
  API_URL: string;
  ENTITY_ENDPOINT: string;

  constructor(private http: HttpClient) { }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.API_URL + '/' + this.ENTITY_ENDPOINT);

  }
  getOne(id: number): Observable<T> {
    return this.http.get<T>(this.API_URL + '/' + this.ENTITY_ENDPOINT + '/' + id);
  }
  add(entity: T): Observable<T> {
    console.log('test : ', entity);
    try {
      return this.http.post<T>(this.API_URL + '/' + this.ENTITY_ENDPOINT, entity);
    } catch (e) {
      console.error(e);
      return e;
    }
  }
  update(entity: T) {
    return this.http.put<T>(this.API_URL + '/' + this.ENTITY_ENDPOINT, entity);
  }
  delete(id: number) {
    return this.http.delete(this.API_URL + '/' + this.ENTITY_ENDPOINT + '/' + id);
  }
}
