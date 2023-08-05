import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users$ = new BehaviorSubject<any[]>([]);
  users = this.users$.asObservable;

  constructor(private apiService: ApiService) {}
  getAll(): Observable<any[]> {
    return this.apiService.get('/api/users').pipe(
      tap((response) => {
        let { rows: users } = response;
        let sortedUsers = users.sort((a, b) => b.id - a.id);
        this.users$.next(sortedUsers);
      })
    );
  }
  getById(id: string): Observable<any> {
    return this.apiService.get(`/api/users/${id}`);
  }
  deleteById(id: string): Observable<any> {
    return this.apiService.delete(`/api/users/${id}`).pipe(
      tap((deletedUser) => {
        let updatedUsers = this.users$.value.filter(
          (user) => user.id != deletedUser.id
        );
        let sortedUsers = updatedUsers.sort((a, b) => b.id - a.id);
        this.users$.next(sortedUsers);
      })
    );
  }
  post(item: any): Observable<any> {
    return this.apiService.post('/api/users', item).pipe(
      tap((addedUser) => {
        this.users$.value.unshift(addedUser);
      })
    );
  }
  put(id: string, item: any): Observable<any> {
    return this.apiService.put(`/api/users/${id}`, item).pipe(
      tap((updatedUser) => {
        const index = this.users$.value.indexOf(id);
        this.users$.value.splice(index, 1, updatedUser);
      })
    );
  }
}
