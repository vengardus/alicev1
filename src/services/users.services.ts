import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {

  constructor(
    private http: Http
  ) {}

  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=25')
    .map(res => res.json())
    .toPromise();
  }
}