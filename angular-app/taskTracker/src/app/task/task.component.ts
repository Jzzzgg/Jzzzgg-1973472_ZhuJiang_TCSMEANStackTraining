import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import TaskModel from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks : TaskModel[] = [];

  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
     this.loadData()
  }

  getData(data : string){
    this.taskService.storeTask(data);
    this.loadData()
  }
  loadData(){
    this.tasks = [];
    this.taskService.loadData().subscribe(
      task => this.tasks = task.task ,
      error => console.log(error),
    );
  }
}

