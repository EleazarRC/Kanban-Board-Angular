import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListSchema, TaskSchema } from './../../../core/models';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
/* import { TaskService } from 'src/app/core/services/task.service'; */
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() list!: ListSchema;
  @Output() editTask: EventEmitter<TaskSchema> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    
  }

  handleEdit(task: TaskSchema){
    if (this.list) {
      task.listId = this.list.id;
      this.editTask.emit(task);
    }
  }

 
}