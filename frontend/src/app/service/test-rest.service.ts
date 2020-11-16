import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestRestService {

  constructor(private httpClient: HttpClient) { }

  callTestPost(user: User): Observable<string> {
    return this.httpClient.post<string>('localhost:8080/test-post', user);
  }
}
