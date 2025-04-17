import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Task } from './tasks.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  #http = inject(HttpClient);
  constructor() { }
  getTaks(): Observable<Task[]> {
    return this.#http.get<Task[]>('https://jsonplaceholder.typicode.com/todos');
  }

  createTask(task: Task): Observable<Task> {
    return this.#http.post<Task>('https://jsonplaceholder.typicode.com/todos', task);
  }
}
