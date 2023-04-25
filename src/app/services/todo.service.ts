import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todos } from '../models/todolist.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  apiUrl = 'http://localhost:3001/lists';

  constructor(private httpClient: HttpClient) {}

  //GET
  getLists(): Observable<Todos[]> {
    return this.httpClient.get<Todos[]>(this.apiUrl);
  }

  //ADD
  addList(list: Todos): Observable<Todos> {
    return this.httpClient.post<Todos>(this.apiUrl, list);
  }

  // DELETE
  deleteList(id?: number): Observable<Todos> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
  //get id For Edit 
  getById(id: number) {
    return this.httpClient.get<Todos>(`${this.apiUrl}/${id}`);
  }

  //update
  updateList(data: Todos) {
    return this.httpClient.put<Todos>(`${this.apiUrl}/${data.id}`, data);
  }
}
