import { Component, OnInit, NgZone, ViewChild, Input } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { TaskSchema } from 'src/app/core/models';

type DropdownObject = {
  value: string;
  viewValue: string;
};
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit{
  @ViewChild('autosize') autosize!: CdkTextareaAutosize;
  @Input() connectedOverlay!: CdkConnectedOverlay;
  @Input() task?: TaskSchema;
  @Input() listId?: string;
  
  createTask!: FormGroup;
  selectedPriority!: string;
  formText!: string;

  priorities: DropdownObject[] = [
    { value: 'urgent', viewValue: 'Urgente' },
    { value: 'moderate', viewValue: 'Moderado' },
    { value: 'low', viewValue: 'Bajo' },
  ];
  constructor(private fb: FormBuilder, private _ngZone: NgZone) { }

  ngOnInit(): void {
    this.setForm();
    this.selectedPriority = '';
    if (this.task && this.task.id.length > 0) {
      this.setValuesOnForm(this.task);
      this.formText = 'Editar';
      this.selectedPriority = this.task.priority;
    } else {
      this.formText = 'Crear';
    }
  }
  
  setForm(): void {
    this.createTask = this.fb.group({
      date: [new Date(), Validators.required],
      priority: ['urgent', Validators.required],
      description: ['', Validators.required],
    });
  }

  onFormAdd(form: any): void {
     if (this.createTask.valid) {
      console.log('valid');
      this.close();
    } else {
      console.log('editada');
      this.close();
    }
  }
  
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable
      .pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  setValuesOnForm(form: TaskSchema): void {
    this.createTask.setValue({
      date: new Date(form.date),
      priority: form.priority,
      description: form.description 
   });
  }

  close(): void {
    this.connectedOverlay.overlayRef.detach();
  }
}
