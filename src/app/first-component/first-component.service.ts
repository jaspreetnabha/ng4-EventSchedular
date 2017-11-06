import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'Rxjs/Rx';
import { mockObj } from './service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FirstComponentService {

  _mocjObj = mockObj;
  constructor(private httpClient : HttpClient) {
    
   }

  getData(){

    //return this.httpClient.get('service.json');
    return Observable.of(this._mocjObj);
    // this.httpClient.get('service.json');

  }
}
