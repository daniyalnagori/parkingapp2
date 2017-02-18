import { Component, OnInit } from '@angular/core';
import { AngularFire} from 'angularfire2';
import {AppService} from "../app.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.css']
})
export class DashboardNavComponent implements OnInit {

  constructor(private af: AngularFire,private appService:AppService,private router:Router) { 
    
  }

  logout(){
    this.af.auth.logout().then((success)=> {
      this.router.navigate(['/signin']);
    });
  }
  ngOnInit() {
  }

}
