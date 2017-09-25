import { User } from '../models/user';
import {FindModel} from '../models/findModel';
import { Injectable} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';


@Injectable()

export class FindService {

  private gitUrl = 'https://api.github.com/search/users?q=';

  constructor(private http: Http) {}
  result = new FindModel();
  public find(str: string, page: number) {
    this.result = new FindModel();
    if (str == null || str === '') {
      this.result.error = 'Пустая строка поиска.';
    } else {
      try {
        const url = `${this.gitUrl + str}&page:${page}`;
        this.http.get(url).subscribe((resp) => {
          this.extractData(resp);
        if (this.result.users.length < 1) {
          this.result.error = 'Ничего не найдено';
        }
      });

      // alert(r.totalcount);
      }catch (err) {
        this.result.error = err.message;
      }
    }

    return this.result;
  }

  private extractData(res: Response) {

    const body = res.json();
    this.result.users = body.items || {};
    this.result.total_count = body.total_count;

    const parse = require('parse-link-header');
    const parsed = parse(res.headers.get('Link'));

    this.result.paging = parsed;

  }


}
