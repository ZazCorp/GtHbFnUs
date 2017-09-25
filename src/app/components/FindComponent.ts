import { Component } from '@angular/core';
import { FindService } from '../services/findService';
import { FindModel } from '../models/findModel';
@Component({
  selector: 'app-root',
  templateUrl: 'FindComponent.html',
  providers: [FindService]
})


export class FindComponent  {
  constructor(private fSrv: FindService) {
    this.result = new FindModel();
   }
  result: FindModel;
  onClick(str, page) {
   this.result =  this.fSrv.find(str, page);
 }

 clickHref(url) {
   this.result = this.fSrv.clickHref(url);
 }
}
