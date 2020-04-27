import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { mergeMap } from 'rxjs/operators';
import { of as observableOf, throwError as observableThrowError, Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  http: HttpClient;
  baseUrl: string;

  constructor(http: HttpClient) {
    this.http = http;
    this.baseUrl = "http://localhost:9009";
  }


  /**
     * for making get api calls
     *
     * @param requestParam interface
     */
  get(requestParam: any): Observable<any> {
    const httpOptions = {
      headers: requestParam.header ? this.getHeader(requestParam.header) : this.getHeader(),
      params: requestParam.param
    };
    return this.http.get(this.baseUrl + requestParam.url, httpOptions).pipe(
      mergeMap((data) => {
        return observableOf(data);
      }));
  }

  private getHeader(headers?: any) {
    const default_headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    return { ...default_headers };
  }

}


