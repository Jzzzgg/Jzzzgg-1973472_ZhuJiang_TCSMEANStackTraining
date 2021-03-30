import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import TaskModel from './task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  storeTask(task : any){
    this.http.post("http://localhost:3000/task", task).
  subscribe(result => console.log(result), error => console.log(error))
  }
  loadData(): Observable<any>
  {
    return this.http.get<TaskModel[]>("/assets/task.json");
  }
}
