import { User } from './user';

export class FindModel {

  public total_count: number;
  public paging: any;
  public users: User[] = [];
  public error: string;
  private _isError: boolean;
  get isError(){
    return !(this.error == null || this.error === '');
  }

}
