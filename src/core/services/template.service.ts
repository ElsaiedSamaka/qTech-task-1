import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {
  items$ = new BehaviorSubject<any[]>([]);
  items = this.items$.asObservable;
  constructor(private apiService: ApiService) {}
  getAll(): Observable<any[]> {
    return this.apiService.get('/api/items').pipe(
      tap((items) => {
        this.items$.next(items);
      })
    );
  }
  getById(id: string): Observable<any> {
    return this.apiService.get(`/api/items/${id}`);
  }
  deleteById(id: string): Observable<any> {
    return this.apiService.delete(`/api/items/${id}`).pipe(
      tap((deleteCartItem) => {
        let updatedCartItems = this.items$.value.filter(
          (cartItem) => cartItem.id !== deleteCartItem.id
        );
        this.items$.next(updatedCartItems);
      })
    );
  }
  post(item: any): Observable<any> {
    return this.apiService.post('/api/items', item).pipe(
      tap((addedCartItem) => {
        this.items$.value.push(addedCartItem);
      })
    );
  }
  put(id: string, item: any): Observable<any> {
    return this.apiService.put(`/api/cart/${id}`, item).pipe(
      tap((updatedItem) => {
        const index = this.items$.value.indexOf(id);
        this.items$.value.splice(index, 1, updatedItem);
      })
    );
  }
}
