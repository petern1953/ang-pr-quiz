
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class BaseService<T extends { id: number }> {
  entityName: string = '';

  constructor(
    public config: ConfigService,
    public http: HttpClient,
    @Inject('entityName') entityName: string
  ) {
    this.entityName = entityName;
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.config.apiUrl}/${this.entityName}`)
  }

  get(id: number): Observable<T> {
    return Number(id) === 0
      ? new Observable<T>()
      : this.http.get<T>(`${this.config.apiUrl}/${this.entityName}/${id}`);
  }

  create(entity: T): Observable<T> {
    return this.http
      .post<T>(`${this.config.apiUrl}/${this.entityName}`, entity)
  }

  update(entity: T): Observable<T> {
    return this.http
      .patch<T>(`${this.config.apiUrl}/${this.entityName}/${entity.id}`, entity);
  }

  // remove(entity: T | number): Observable<T> {
  //   let entityId = typeof entity === 'number' ? entity : entity.id;
  //   return this.http
  //     .delete<T>(`${this.config.apiUrl}/${this.entityName}/${entityId}`);
  // }

  remove(entity: T | number): Observable<T> {
    let entityId = typeof entity === 'number' ? entity : entity.id;
    console.log(`to delete: ${this.config.apiUrl}/${this.entityName}/${entityId}`);
    return this.http
      .delete<T>(`${this.config.apiUrl}/${this.entityName}/${entityId}`)
      .pipe(tap((e) => {
        console.log(`${this.entityName} ${entityId} deleted`);
        this.getAll();
      })
    )
      ;
  }

}
