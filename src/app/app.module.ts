import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FindComponent } from './components/FindComponent';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    FindComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [FindComponent]
})
export class AppModule { }
