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

    if (str == null || str === '') {
      this.result.error = 'Пустая строка поиска.';
    } else {

        const url = `${this.gitUrl + str}&page:${page}`;
        this.doGet(url);

      // alert(r.totalcount);

    }

    return this.result;
  }

  private doGet(url: string) {
    this.result = new FindModel();
    try {
      this.http.get(url).subscribe((resp) => {
        this.extractData(resp);
      if (this.result.users.length < 1) {
        this.result.error = 'Ничего не найдено';
      }
    });
    }catch (err) {
      this.result.error = err.message;
    }
  }

  public clickHref(url) {
    this.doGet(url);
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
