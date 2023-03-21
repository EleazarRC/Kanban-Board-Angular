import { Component, Input } from '@angular/core';
import { ListSchema } from 'src/app/core/models/listschema';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() list!: ListSchema;
}
