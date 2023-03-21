import { Component, Input } from '@angular/core';
import { TaskSchema } from 'src/app/core/models/taskschema';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task!: TaskSchema;
}
