import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private r:Router){}
  navi(){
    this.r.navigate(['/op'])
  }
  title = 'example-1';
}
