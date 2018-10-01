import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { resolve } from 'dns';



/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  private reqOptions = new RequestOptions();

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');

  }

  public getAllMessages(){

    return new Promise((resolve, reject) => {

      let header = new Headers({
        'Authorization': "Basic " + btoa("astrins:nopass@"),
        'Content-Type': 'application/json'
      })
      let options = new RequestOptions({headers: header})
   
  
      console.log(this.reqOptions);
      this.http.get('http://localhost:3000/api/v1/notifications',options).subscribe(data => {
        console.log(data)
  
        resolve(data);
      })

    })

  }

  public getAllParents(){

    return new Promise((resolve, reject) => {

      let header = new Headers({
        'Authorization': "Basic " + btoa("astrins:nopass@"),
        'Content-Type': 'application/json'
      })
      let options = new RequestOptions({headers: header})
  
      this.http.get('http://localhost:3000/api/v1/parents',options).subscribe(data => {
        console.log(data)
  
        resolve(data);
      })

    })
  }

  
}
