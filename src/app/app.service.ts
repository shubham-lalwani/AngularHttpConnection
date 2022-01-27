import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  constructor(private httpcClient: HttpClient) {}

  getData() {
    return this.httpcClient.get('https://jsonplaceholder.typicode.com/posts');
  }
}
