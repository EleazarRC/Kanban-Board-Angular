import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { throwError as observableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
//api with one task
private apiRootOneTast: string = 'https://run.mocky.io/v3/26045374-863c-469d-85c4-51ea1135ce8a';
 
//api without any task
private apiRootAnyTask: string = 'https://run.mocky.io/v3/7841d1af-e8d5-446a-bac5-3506fdd05659';

// api with many task
private apiRootManyTask: string = 'https://run.mocky.io/v3/0933ddef-c9bf-4f26-8ddf-77990fb490cb';
  
  constructor(private http: HttpClient) { }


  /* Get Api Data from mock service */
  getApi() {
    return this.http
      .get<Array<{}>>(this.apiRootManyTask)
      .pipe(map(data => data), catchError(this.handleError));
  }

  /* Handle request error */
  private handleError(res: HttpErrorResponse){
    return observableThrowError(res.error || 'Server error');
  }


}
