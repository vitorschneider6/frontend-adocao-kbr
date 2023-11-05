import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../../../../styles-admin.css']
})
export class SidebarComponent {

  constructor(private cookies: CookieService, private router : Router){}

  handleSair(){
    this.cookies.deleteAll()
    this.router.navigate(["/admin/login"])
  }

}
