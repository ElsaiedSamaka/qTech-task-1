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
      tap((cartItems) => {
        this.items$.next(cartItems);
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
  post(cartItem: any): Observable<any> {
    return this.apiService.post('/api/items', cartItem).pipe(
      tap((addedCartItem) => {
        this.items$.value.push(addedCartItem);
      })
    );
  }
  put(id: string, cartItem: any): Observable<any> {
    return this.apiService.put(`/api/cart/${id}`, cartItem).pipe(
      tap((updatedCartItem) => {
        const index = this.items$.value.indexOf(id);
        this.items$.value.splice(index, 1, updatedCartItem);
      })
    );
  }
}
