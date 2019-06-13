import { Component, OnInit } from '@angular/core';
import {  HttpClient ,HttpErrorResponse,HttpRequest,HttpHeaderResponse } from '@angular/common/http';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
contentArray:any
s
  constructor(private http: HttpClient) { }

getList(){
  this.http.get('https://gist.githubusercontent.com/yannski/3019778/raw/dfb34d018165f47b61b3bf089358a3d5ca199d96/movies.json')
  .subscribe((res: Response) => {
    this.contentArray = res;
  }, error => {
    console.log(error);
  });
}
searchFunction(){
 if(this.s == ""){
  this.getList()
 }
 else{
  this.contentArray = this.contentArray.filter(element=> {
    return (element.title.toLowerCase().includes(this.s.toLowerCase()))
  })
 }
}
 ngOnInit(){
  this.getList()
 }
}
