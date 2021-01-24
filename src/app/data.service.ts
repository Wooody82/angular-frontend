import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = "http://localhost:8080/api";

  constructor(private httpClient: HttpClient) { }

  public getCounties() {
    return this.httpClient.get(this.REST_API_SERVER + '/countries');
  }

  public postData(input: any) {
    return this.httpClient.post(this.REST_API_SERVER + '/samordningsnummer', input, { responseType: 'text' })
      .pipe(
        map(
          (response) => {
            if (response) {
              return response;
            } else {
              return false
            }
          },
          (error: any) => {
            return error;
          }
        )
      )
  }

}
