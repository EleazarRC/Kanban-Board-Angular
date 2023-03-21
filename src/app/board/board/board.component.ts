import { Component } from '@angular/core';
import { ListSchema } from 'src/app/core/models/listschema';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  lists: ListSchema[];


  constructor(private apiService: ApiService) {
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
}
