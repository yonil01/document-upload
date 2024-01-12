import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceDocumentService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://127.0.0.1:3000/api/read-file';

  getContent(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
