import { Observable } from 'rxjs';

export interface IApi<T> {
    API_URL: string;
    entity_endpoint: string;

    getAll(): Observable<T[]>;
    getOne(id: number): Observable<T>;
    add(entity: T): Observable<T>;
    update(entity: T);
    delete(id: number);
}
