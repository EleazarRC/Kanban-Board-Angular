import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board/board.component';
import { ListComponent } from './components/list/list.component';
import { TaskComponent } from './components/task/task.component';
import { MaterialCdkModule } from '../material-cdk/material-cdk.module';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

/* import { OverlayModule } from '@angular/cdk/overlay'; */



@NgModule({
  declarations: [
    BoardComponent,
    ListComponent,
    TaskComponent,
    CreateTaskComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    MaterialCdkModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
/*     OverlayModule */
    
  ]
})
export class BoardModule { }
