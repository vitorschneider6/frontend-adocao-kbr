import { CookieService } from 'ngx-cookie-service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho-admin',
  templateUrl: './cabecalho-admin.component.html',
  styleUrls: ['../../../../styles-admin.css']
})
export class CabecalhoAdminComponent {

  constructor(private cookie : CookieService, private router : Router) {}
  nome : string = this.cookie.get('nome')
  id : string = this.cookie.get('id')

  handleExit(){
    this.cookie.deleteAll();
    window.location.reload()
    this.router.navigate(["/admin/login"])
  }
}
