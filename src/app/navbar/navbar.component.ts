import { AuthServiceService } from './../auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private athServiceService: AuthServiceService) { }
  newArr(x: number){
   this.athServiceService.getClick(x);
  }


  ngOnInit() {

  }

}
