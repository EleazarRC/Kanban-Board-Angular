import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../core';
import { ListSchema, TaskSchema  } from './../../core/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  taskList!: TaskSchema[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getPrioritiesTask();
  }
  
  getPrioritiesTask(): void {
    this.apiService.getApi()
      .subscribe(
        (response: any) => {
          const lists = response['list'];
          let tasks: TaskSchema[] = [];
          lists.map((element: ListSchema) => {
            console.log(element)
            element.tasks.map(task => {
              if(task.priority == 'urgent'){
                tasks.push(task)
              }
            });
          });
          this.taskList = tasks;
        },
        error => (console.log('Ups! we have an error: ', error))
    );
  }
}