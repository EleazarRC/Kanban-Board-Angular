import { Component } from '@angular/core';
import { ListSchema } from 'src/app/core/models/listschema';
import { ApiService } from 'src/app/core/services/api.service';
import { CdkConnectedOverlay } from '@angular/cdk/overlay'
import { TaskSchema } from 'src/app/core/models';

const initialValue = {
  id: '',
  description: '',
  date: '',
  priority: '',
};
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  lists: ListSchema[];
  task!: TaskSchema;
  isOverlayDisplayed = false;
  readonly overlayOptions: Partial<CdkConnectedOverlay> = {
    hasBackdrop: true,
    positions: [
      { originX: 'start', originY: 'top', overlayX: 'start',  overlayY: 'top'}
    ]
  };
  listId!: string;

  constructor(private apiService: ApiService) {
    this.task = initialValue;
    this.lists = [];
  }

  ngOnInit(): void {
    this.getDataList();
  }

  getDataList(): void {
    this.apiService.getApi().subscribe(
      (response: any) => this.lists = response['list'],
      error => console.log('Ups! we have an error: ', error)
    );
  }

    
  hideOverlay(): void {
    this.isOverlayDisplayed = false;
  }

  displayOverlay(event?: any): void {
    this.isOverlayDisplayed = true;
    if (!!event) {
      this.task = {
        date: event.date,
        id: event.id,
        description: event.description,
        priority: event.priority,
      };
    } else {
      this.task = initialValue;
    }
  }
}
