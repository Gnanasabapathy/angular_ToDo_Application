import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http:HttpClient) { }

  getAllTodos(){
      return this.http.get("https://jsonplaceholder.typicode.com/todos").pipe(
        map((res: any[]) => {
          const data = res.map(obj => ({
            id: obj.id,
            completed: false,
            title: obj.title,
            userId: obj.userId
          }));
          return data;
        })
      );
  }
}
