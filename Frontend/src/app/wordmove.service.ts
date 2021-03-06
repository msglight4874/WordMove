import { Injectable } from '@angular/core';
import {Headers, RequestOptions, Http} from '@angular/http';

@Injectable()
export class WordmoveService {

  private apiUrl = 'http://localhost:3000/';

  public processedResult = [];
  constructor(private http: Http) { }

  inputArticle(article) {
    let url = this.apiUrl + 'input';
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = {
      article: article
    };
    return this.http.post(url, body, options).map(rsp => rsp.json());
  }
  saveResult() {
    let url = this.apiUrl + 'result';
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = {
      data: this.processedResult
    };
    return this.http.post(url, body, options).map(rsp => rsp.json());
  }

  getResult(id) {
    let url = this.apiUrl + 'result/'+id;
    return this.http.get(url);
  }
}
