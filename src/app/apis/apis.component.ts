import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css']
})
export class ApisComponent implements OnInit{
ngOnInit(): void {
this.llenarData();
}
constructor(private apiService:ApiService){

}
data: any[] = [];

llenarData(){
 this.apiService.getData().subscribe(data => {
  this.data=data;
  console.log(this.data);
 })
}
}
